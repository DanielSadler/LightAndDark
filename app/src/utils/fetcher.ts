import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const refresh = `
mutation Refresh($refreshData: RefreshInput!) {
  refresh(refreshData: $refreshData) {
    refresh_token
    access_token
  }
}
`;

export const fetcher =
  <TData, TVariables>(query: string, variables?: TVariables) =>
  async (): Promise<TData> => {
    const token = await SecureStore.getItemAsync("access_token");
    const res = await fetch(API_URL as string, {
      method: "POST",
      headers: token
        ? {
            "Content-Type": "application/json",
            Authorization: token,
          }
        : {
            "Content-Type": "application/json",
          },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];
      const decoded = jwtDecode(
        (await SecureStore.getItemAsync("access_token")) ?? ""
      ) as { exp: number };
      const accessDenied = Date.now() >= decoded.exp * 1000;
      if (accessDenied) {
        const refreshToken = await SecureStore.getItemAsync("refresh_token");
        if (refreshToken) {
          const refreshResponse = await fetch(API_URL as string, {
            method: "POST",
            headers: token
              ? {
                  "Content-Type": "application/json",
                  Authorization: token,
                }
              : {
                  "Content-Type": "application/json",
                },
            body: JSON.stringify({
              query: refresh,
              variables: { refreshData: { refresh_token: refreshToken } },
            }),
          });
          const refreshJson = await refreshResponse.json();

          if (refreshJson.errors) {
            await SecureStore.deleteItemAsync("refresh_token");
            await SecureStore.deleteItemAsync("access_token");
            throw new Error(message);
          }
          await SecureStore.setItemAsync(
            "access_token",
            refreshJson.data.refresh.access_token
          );
          await SecureStore.setItemAsync(
            "refresh_token",
            refreshJson.data.refresh.refresh_token
          );

          const secondRes = await fetch(API_URL as string, {
            method: "POST",
            headers: refreshJson.data.refresh.access_token
              ? {
                  "Content-Type": "application/json",
                  Authorization: refreshJson.data.refresh.access_token,
                }
              : {
                  "Content-Type": "application/json",
                },
            body: JSON.stringify({ query, variables }),
          });

          const secondJson = await secondRes.json();
          if (secondJson.errors) {
            throw new Error(message);
          }
          return secondJson.data;
        }
      }
      throw new Error(message);
    }

    return json.data;
  };

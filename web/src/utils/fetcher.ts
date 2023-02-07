import jsonwebtoken from 'jsonwebtoken';

const refresh = `
mutation Refresh($refreshData: RefreshInput!) {
  refresh(refreshData: $refreshData) {
    refresh_token
    access_token
  }
}
`;

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    const token = localStorage.getItem('access_token');
    const res = await fetch(process.env.NEXT_PUBLIC_API as string, {
      method: 'POST',
      headers: token
        ? {
            'Content-Type': 'application/json',
            Authorization: token,
          }
        : {
            'Content-Type': 'application/json',
          },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];
      const decoded = jsonwebtoken.decode(
        localStorage.getItem('access_token') ?? ''
      ) as { exp: number };
      const accessDenied = Date.now() >= decoded.exp * 1000;
      if (accessDenied) {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const refreshResponse = await fetch(
            process.env.NEXT_PUBLIC_API as string,
            {
              method: 'POST',
              headers: token
                ? {
                    'Content-Type': 'application/json',
                    Authorization: token,
                  }
                : {
                    'Content-Type': 'application/json',
                  },
              body: JSON.stringify({
                query: refresh,
                variables: { refreshData: { refresh_token: refreshToken } },
              }),
            }
          );
          const refreshJson = await refreshResponse.json();

          if (refreshJson.errors) {
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('access_token');
            throw new Error(message);
          }
          localStorage.setItem(
            'access_token',
            refreshJson.data.refresh.access_token
          );
          localStorage.setItem(
            'refresh_token',
            refreshJson.data.refresh.refresh_token
          );

          const secondRes = await fetch(process.env.NEXT_PUBLIC_API as string, {
            method: 'POST',
            headers: refreshJson.data.refresh.access_token
              ? {
                  'Content-Type': 'application/json',
                  Authorization: refreshJson.data.refresh.access_token,
                }
              : {
                  'Content-Type': 'application/json',
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
};

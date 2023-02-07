import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import * as React from "react";

import { useLoginMutation } from "../../../../graphql";

enum ActionTypes {
  RESTORE_TOKEN,
  SIGN_IN,
  SIGN_OUT,
}

interface Actions {
  type: ActionTypes;
  token?: string | null;
}

interface State {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

export const useAuth = () => {
  const [state, dispatch] = React.useReducer(
    (prevState: State, action: Actions): State => {
      switch (action.type) {
        case ActionTypes.RESTORE_TOKEN:
          return {
            ...prevState,
            userToken: action.token ?? null,
            isLoading: false,
          };
        case ActionTypes.SIGN_IN:
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token ?? null,
          };
        case ActionTypes.SIGN_OUT:
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        default:
          return prevState;
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  const { mutate: login } = useLoginMutation({
    onSuccess: async (data) => {
      if (data.login.access_token && data.login.refresh_token) {
        await SecureStore.setItemAsync("access_token", data.login.access_token);
        await SecureStore.setItemAsync(
          "refresh_token",
          data.login.refresh_token
        );
        dispatch({ type: ActionTypes.SIGN_IN, token: data.login.access_token });
      }
    },
  });

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync("refresh_token");
      } catch (e) {
        return dispatch({ type: ActionTypes.SIGN_OUT });
      }

      if (!userToken) return dispatch({ type: ActionTypes.SIGN_OUT });

      const decoded = jwtDecode(userToken) as { exp: number };
      const accessDenied = Date.now() >= decoded.exp * 1000;
      if (accessDenied) return dispatch({ type: ActionTypes.SIGN_OUT });
      return dispatch({ type: ActionTypes.RESTORE_TOKEN, token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (loginData: { email: string; password: string }) => {
        login({ loginData });
      },
      signOut: () => dispatch({ type: ActionTypes.SIGN_OUT }),
    }),
    []
  );
  return {
    state,
    authContext,
  };
};

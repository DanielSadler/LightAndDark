import * as React from "react";

export const AuthContext = React.createContext(
  {} as { signIn: (loginData: { email: string; password: string }) => void }
);

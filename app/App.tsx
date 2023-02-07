/// <reference types="nativewind/types" />

import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Screens } from "./src/components/Screens";

const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Screens />
  </QueryClientProvider>
);

export default App;

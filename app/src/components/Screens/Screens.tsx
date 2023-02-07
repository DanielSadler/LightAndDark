import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

import StorybookUIRoot from "../../../storybook";
import { AuthContext } from "../../context";
import { Home, SignIn } from "../pages";
import { useAuth } from "./hooks";

const Stack = createNativeStackNavigator();
const useStorybook = false;

export const Screens = () => {
  const { state, authContext } = useAuth();

  const onLayoutRootView = useCallback(async () => {
    if (!state.isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [state.isLoading]);

  if (state.isLoading) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={useStorybook ? "Storybook" : undefined}
          >
            {state.userToken == null ? (
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  headerShown: false,
                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
            ) : (
              <Stack.Screen name="Home" component={Home} />
            )}
            <Stack.Screen name="Storybook" component={StorybookUIRoot} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
};

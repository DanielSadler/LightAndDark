import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

interface Props {}

export const Home = (props: Props) => (
  <View className="flex-1 items-center justify-center">
    <Text>Home Screen</Text>
    <StatusBar style="auto" />
  </View>
);

import { ComponentProps } from "react";
import { Button as RNButton, View } from "react-native";

type Props = ComponentProps<typeof RNButton> & { className?: string };

export const Button = ({ className, ...props }: Props) => (
  <View className={`bg-indigo-500 rounded m-3 ${className}`}>
    <RNButton color="#ffffff" {...props} />
  </View>
);

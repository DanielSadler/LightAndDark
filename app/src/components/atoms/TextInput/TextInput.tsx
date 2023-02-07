import { ComponentProps } from "react";
import { Text, TextInput as RNTextInput, View } from "react-native";

type Props = ComponentProps<typeof RNTextInput> & { label?: string };

export const TextInput = ({ label, className, ...props }: Props) => (
  <View className={className}>
    {label ? (
      <Text className="block text-sm font-medium text-gray-700 my-1">
        {label}
      </Text>
    ) : (
      <View />
    )}
    <RNTextInput
      className="appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      {...props}
    />
  </View>
);

import { useFormik } from "formik";
import { useContext } from "react";
import { Image, View } from "react-native";

import { AuthContext } from "../../../context";
import { Button, TextInput } from "../../atoms";

interface Props {}

export const SignIn = (props: Props) => {
  const { signIn } = useContext(AuthContext);

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: signIn,
  });
  return (
    <View className="w-full h-full items-center justify-around">
      <Image
        source={require("../../../../assets/icon.png")}
        className="h-24 w-24 pt-6"
      />
      <View className="w-full items-center">
        <TextInput
          label="Email Address"
          keyboardType="email-address"
          className="w-11/12 pb-3"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
        />
        <TextInput
          label="Password"
          secureTextEntry
          className="w-11/12 pb-6"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        <Button
          title="Sign In"
          className="w-11/12"
          onPress={() => handleSubmit()}
        />
      </View>
      <View />
    </View>
  );
};

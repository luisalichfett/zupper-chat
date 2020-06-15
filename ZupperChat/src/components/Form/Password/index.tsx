import React from "react";
import { TextInput, View } from "react-native";
import { style } from "./styled";

interface Props {
  handleInput: (event: string) => void;
  handlePasswordFocus?: (event: any) => void;
  marginTop: number;
  placeHolder?: string;
  placeholderTextColor?: string;
  showPassword?: boolean;
  paddingLeft?: number;
}

export const Password = ({
  handleInput,
  handlePasswordFocus,
  marginTop,
  placeHolder,
  placeholderTextColor,
  showPassword = true,
  paddingLeft = 45
}: Props) => {
  return (
    <View style={{ ...style.inputBox, marginTop: marginTop, paddingLeft: paddingLeft }}>
      <TextInput
        secureTextEntry={showPassword}
        textContentType="password"
        placeholderTextColor={placeholderTextColor}
        placeholder={placeHolder}
        style={style.input}
        onChangeText={handleInput}
        onFocus={handlePasswordFocus}
      />
    </View>
  );
};

export default Password;

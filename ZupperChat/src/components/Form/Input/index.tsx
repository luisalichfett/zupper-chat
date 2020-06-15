import React from "react";
import { TextInput, View } from "react-native";
import { style } from "./styled";

interface Props {
  handleInput: (event: string) => void;
  handleInputFocus?: (event: any) => void;
  marginTop: number;
  placeHolder?: string;
  placeholderTextColor?: string;
}

export const Input = ({
  handleInput,
  handleInputFocus,
  marginTop,
  placeHolder,
  placeholderTextColor,
}: Props) => {
  return (
    <View style={{ ...style.inputBox, marginTop: marginTop }}>
      <TextInput
        placeholderTextColor={placeholderTextColor}
        placeholder={placeHolder}
        style={style.input}
        onChangeText={handleInput}
        onFocus={handleInputFocus}
      />
    </View>
  );
};

export default Input;

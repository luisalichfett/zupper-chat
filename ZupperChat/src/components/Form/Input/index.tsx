import React from 'react';
import { TextInput, View } from 'react-native';
import { style } from './styled';

interface Props {
  marginTop: number;
  placeHolder?: string;
  placeholderTextColor?: string;
  handleTextInput: (event: string) => void;
  handleTextInputSubmit?: (event: any) => void;
}

export const Input = ({
  marginTop,
  placeHolder,
  placeholderTextColor,
  handleTextInput,
  handleTextInputSubmit,
}: Props) => {
  return (
    <View style={{ ...style.inputBox, marginTop: marginTop }}>
      <TextInput
        onChangeText={handleTextInput}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeHolder}
        style={style.input}
        onSubmitEditing={handleTextInputSubmit}
      />
    </View>
  );
};

export default Input;

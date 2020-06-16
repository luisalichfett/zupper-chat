import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { style } from './styled';

interface Props {
  marginTop: number;
  placeHolder?: string;
  placeholderTextColor?: string;
  showPassword?: boolean;
  handlePassword: (event: string) => void;
  handlePasswordSubmit?: (event: any) => void;
}

export const Password = ({
  marginTop,
  placeHolder,
  placeholderTextColor,
  showPassword = true,
  handlePassword,
  handlePasswordSubmit,
}: Props) => {
  return (
    <View style={{ ...style.inputBox, marginTop: marginTop }}>
      <TextInput
        secureTextEntry={showPassword}
        textContentType="password"
        placeholderTextColor={placeholderTextColor}
        onSubmitEditing={handlePasswordSubmit}
        onChangeText={handlePassword}
        placeholder={placeHolder}
        style={style.input}
      />
    </View>
  );
};

export default Password;

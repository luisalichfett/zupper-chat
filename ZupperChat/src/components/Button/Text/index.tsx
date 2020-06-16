import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

interface Props {
  children: ReactNode;
  handleOnPress: (event: any) => void;
}

export const TextButton = ({ children, handleOnPress }: Props) => {
  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity onPress={handleOnPress}>{children}</TouchableOpacity>
    </View>
  );
};

export default TextButton;

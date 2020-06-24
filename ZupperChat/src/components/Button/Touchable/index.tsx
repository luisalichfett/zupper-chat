import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, StyleProp, ViewProps, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode;
  handleOnPress: (event: any) => void;
  style?: StyleProp<ViewStyle>
}

export const Touchable = ({ children, handleOnPress, style }: Props) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={handleOnPress}>{children}</TouchableOpacity>
    </View>
  );
};

export default Touchable;

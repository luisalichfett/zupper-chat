import React, { ReactNode } from 'react';
import { Text } from 'react-native';

interface Props {
  children: ReactNode;
  color: string;
  fontWeight?: 'normal' | 'bold';
  underlineText?: 'underline' | 'none';
  style?: StyleProp<TextStyle>;
}

export const InputText = ({
  children,
  color,
  style,
  fontWeight = 'normal',
  underlineText = 'none',
}: Props) => (
  <Text
    style={{
      ...style,
      color: color,
      textDecorationLine: underlineText,
      fontWeight: fontWeight,
      fontSize: 16,
    }}
  >
    {children}
  </Text>
);

export default InputText;

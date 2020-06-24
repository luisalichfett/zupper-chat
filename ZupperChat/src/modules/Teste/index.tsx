import React from 'react';
import { Text, View } from 'react-native';
import style from './styled';

// interface Props {
//   children: ReactNode;
//   color: string;
//   fontWeight?: 'normal' | 'bold';
//   underlineText?: 'underline' | 'none';
  style?: StyleProp<TextStyle>
// }

export const Teste = () => (
  <View style={style.container}>
    <Text>Teste</Text>
  </View>
);

export default Teste;

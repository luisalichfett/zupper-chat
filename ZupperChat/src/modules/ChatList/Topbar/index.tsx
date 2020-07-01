import React from 'react';
import { View, Image } from 'react-native';
import Button from '../../../core/components/Button';
import Bar from '../../../core/components/Bar';
import User from '../../../core/assets/svg/user.svg';
import NewMessage from '../../../core/assets/svg/write.svg';
import { style } from './styled';

const LogoBar = require('../../../core/assets/img/logobar.png');

interface Props {
  handleOnPress: (event: any) => void;
}
export const Topbar = ({ handleOnPress }: Props) => {
  return (
    <Bar>
      <View style={style.container}>
        <View style={style.userEmptyPhoto}>
          <User width="50" height="50" fill="#ffffff" />
        </View>
        <Image style={style.logo} source={LogoBar} />
        <Button.Touchable
          style={style.newMessage}
          handleOnPress={handleOnPress}
        >
          <NewMessage width="45" height="45" fill="#ffffff" />
        </Button.Touchable>
      </View>
    </Bar>
  );
};

export default Topbar;

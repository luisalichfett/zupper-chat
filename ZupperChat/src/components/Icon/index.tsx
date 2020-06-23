import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

interface Props {
  icon: ImageSourcePropType;
  height?: number;
  width?: number;
}

export const Icon = ({ icon, height = 50, width = 50 }: Props) => {
  return (
    <>
      <Image
        source={icon}
        style={{resizeMode: "contain", height: height, width: width }}
      />
    </>
  );
};

export default Icon;

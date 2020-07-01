import React, { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';
import { style } from './styled';

const BackgroundImage = require('../../../../core/assets/img/background.png');

export const AnimatedBackground = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -1040,
          duration: 10000,
          useNativeDriver: false
        }),
        Animated.timing(scrollX, {
          toValue: 665,
          duration: 20000,
          useNativeDriver: false
        }),
        Animated.timing(scrollX, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: false
        }),
      ])
    ).start();
  }, [scrollX]);

  return (
    <Animated.View style={{ ...style.container, left: scrollX }}>
      <Image source={BackgroundImage} />
    </Animated.View>
  );
};

export default AnimatedBackground;

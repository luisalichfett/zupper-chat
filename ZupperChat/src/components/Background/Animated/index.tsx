import React, { useEffect, useRef, useState } from "react";
import { View, Animated, Image } from "react-native";
import { style } from "./styled";

const BackgroundImage = require("../../../core/assets/img/background.png");

export const AnimatedBackground = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -1340,
          duration: 10000,
        }),
        Animated.timing(scrollX, {
          toValue: 1340,
          duration: 20000,
        }),
        Animated.timing(scrollX, {
          toValue: 0,
          duration: 10000,
        }),
      ])
    ).start();
  }, [scrollX]);

  return (
    <Animated.View style={{ ...style.container, left: scrollX }}>
      <Image source={BackgroundImage} style={style.image} />
    </Animated.View>
  );
};

export default AnimatedBackground;

import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { style } from "./styled";

const Logo = require("../../core/assets/img/logo.png");

export const Login = () => {
  return (
    <>
      <Background.Animated />
      <View style={style.container}>
        <Icon icon={Logo} height="50%" width="50%" />
        <Button.Default
          text="Sing up"
          handleOnPress={() => console.log("hi")}
          marginTop={150}
        />
      </View>
    </>
  );
};

export default Login;

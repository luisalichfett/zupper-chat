import React, { useState, useEffect, useRef } from "react";
import { View, Keyboard, Animated } from "react-native";
import Background from "../../components/Background";
import Icon from "../../components/Icon";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Form from "./Form";
import { style } from "./styled";

const Logo = require("../../core/assets/img/logo.png");

export const Login = () => {
  const [form, showForm] = useState("");
  const paddingBottom = useRef(new Animated.Value(180)).current;
  const title = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", keyboardWillShow);
    Keyboard.addListener("keyboardWillHide", keyboardWillHide);

    return () => {
      Keyboard.removeListener("keyboardWillShow", keyboardWillShow);
      Keyboard.removeListener("keyboardWillHide", keyboardWillHide);
    };
  });

  const keyboardWillShow = () => {
    Animated.timing(paddingBottom, {
      duration: 10,
      toValue: 5,
    }).start();
    Animated.timing(title, {
      duration: 10,
      toValue: 0,
    }).start();
  };

  const keyboardWillHide = () => {
    Animated.timing(paddingBottom, {
      duration: 10,
      toValue: 180,
    }).start();
    Animated.timing(title, {
      duration: 500,
      toValue: 1,
    }).start();
  };

  return form ? (
    <>
      {form === "sing-up" && (
        <Form.SingUp
          paddingBottom={paddingBottom}
          title={title}
          handleConfirmButton={() => console.log("confirm")}
          handleLoginButton={() => showForm("login")}
        />
      )}
      {form === "login" && (
        <Form.Login
          paddingBottom={paddingBottom}
          title={title}
          handleConfirmButton={() => console.log("confirm")}
          handleForgotPassword={() => showForm("password")}
        />
      )}
    </>
  ) : (
    <>
      <Background.Animated />
      <View style={style.container}>
        <Icon icon={Logo} height={300} width={300} />
        <Button.Default
          text="Sing up"
          handleOnPress={() => showForm("sing-up")}
          marginTop={-20}
        />
      </View>
    </>
  );
};

export default Login;

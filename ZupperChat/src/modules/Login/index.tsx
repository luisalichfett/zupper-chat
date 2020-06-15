import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Icon from "../../components/Icon";
import Form from "../../components/Form";
import { style } from "./styled";
import { SafeAreaView } from "react-native-safe-area-context";

const Logo = require("../../core/assets/img/logo.png");

export const Login = () => {
  const [singUpForm, showSingUpForm] = useState(false);
  const [behavior, setBehavior] = useState("");
  const [paddingPassword, setPaddingPassword] = useState(45);

  const handlePasswordFocus = () => {
    setBehavior("padding")
    setPaddingPassword(0);
  }

  const renderForm = () =>
    singUpForm && (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Background.Animated />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={behavior === "padding" ? behavior : undefined}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View style={style.form}>
              <Text.h1 color="#fff">Sing Up</Text.h1>
              <Form.Input
                placeHolder="Name"
                placeholderTextColor="#fff"
                handleInput={(e) => console.log(e)}
                handleInputFocus={() => setBehavior("")}
                marginTop={40}
              />
              <Form.Input
                placeHolder="Username"
                placeholderTextColor="#fff"
                handleInput={(e) => console.log(e)}
                handleInputFocus={() => setBehavior("")}
                marginTop={30}
              />
              <Form.Input
                placeHolder="Email"
                placeholderTextColor="#fff"
                handleInput={(e) => console.log(e)}
                handleInputFocus={() => setBehavior("")}
                marginTop={30}
              />
              <Form.Input
                placeHolder="Photo URL"
                placeholderTextColor="#fff"
                handleInput={(e) => console.log(e)}
                handleInputFocus={() => setBehavior("")}
                marginTop={30}
              />
              <Form.Password
                paddingLeft={paddingPassword}
                placeHolder="Password"
                placeholderTextColor="#fff"
                handleInput={(e) => console.log(e)}
                handlePasswordFocus={() => handlePasswordFocus()}
                marginTop={30}
              />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
        <View style={{position: "absolute"}}>
          <Button.Default
            text="Confirm"
            handleOnPress={() => showSingUpForm(true)}
            marginTop={540}
          />
        </View>
      </View>
    );

  return singUpForm ? (
    renderForm()
  ) : (
    <>
      <Background.Animated />
      <View style={style.container}>
        <Icon icon={Logo} height={300} width={300} />
        <Button.Default
          text="Sing up"
          handleOnPress={() => showSingUpForm(true)}
          marginTop={-20}
        />
      </View>
    </>
  );
};

export default Login;

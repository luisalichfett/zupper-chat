import React, { useState, useEffect, useRef } from 'react';
import { View, Keyboard, Animated } from 'react-native';
import Background from '../../core/components/Background';
import Icon from '../../core/components/Icon';
import Button from '../../core/components/Button';
import Form from './Form';
import { style } from './styled';
import { Login as LoginData } from './interfaces/Login';
import { SingUp as SingUpData } from './interfaces/SingUp';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../routes';
import { useLogin, useSingUp } from './hook';

const Logo = require('../../core/assets/img/logo.png');

interface Props {
  navigation: StackNavigationProp<Routes, 'Login'>;
}

export const Login = ({ navigation }: Props) => {
  const [login, , loadLogin] = useLogin();
  const [singup, , loadSingUp] = useSingUp();
  const [form, showForm] = useState('');
  const paddingBottom = useRef(new Animated.Value(180)).current;
  const title = useRef(new Animated.Value(1)).current;
  const fadeInLogo = useRef(new Animated.Value(0)).current;
  const fadeInSingUpButton = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (login) navigation.navigate('ChatList', { profileId: login.id });
  }, [login]);

  useEffect(() => {
    if (singup) navigation.navigate('ChatList', { profileId: singup.id });
  }, [singup]);

  useEffect(() => {
    Animated.timing(fadeInLogo, {
      duration: 3000,
      toValue: 1,
      useNativeDriver: false,
    }).start();
    setTimeout(
      () =>
        Animated.timing(fadeInSingUpButton, {
          duration: 1000,
          toValue: 1,
          useNativeDriver: false,
        }).start(),
      3000
    );
  });

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', keyboardWillHide);
    };
  }, [Keyboard]);

  const keyboardWillShow = () => {
    Animated.timing(paddingBottom, {
      duration: 10,
      toValue: 5,
      useNativeDriver: false,
    }).start();
    Animated.timing(title, {
      duration: 10,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const keyboardWillHide = () => {
    Animated.timing(paddingBottom, {
      duration: 10,
      toValue: 180,
      useNativeDriver: false,
    }).start();
    Animated.timing(title, {
      duration: 500,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <Background.Animated />
      {form ? (
        <>
          {form === 'sing-up' && (
            <Form.SingUp
              paddingBottom={paddingBottom}
              title={title}
              handleLoginButton={() => showForm('login')}
              onSubmit={(data: SingUpData) => loadSingUp(data)}
            />
          )}
          {form === 'login' && (
            <Form.Login
              paddingBottom={paddingBottom}
              title={title}
              handleForgotPassword={() => showForm('password')}
              onSubmit={(data: LoginData) => loadLogin(data)}
            />
          )}
        </>
      ) : (
        <View style={style.container}>
          <Animated.View style={{ opacity: fadeInLogo }}>
            <Icon icon={Logo} height={300} width={300} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeInSingUpButton, flex: 1 }}>
            <Button.Default
              text="Sing up"
              handleOnPress={() => showForm('sing-up')}
              marginTop={-20}
            />
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default Login;

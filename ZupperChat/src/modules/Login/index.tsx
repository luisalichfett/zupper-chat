import React, { useState, useEffect, useRef } from 'react';
import { View, Keyboard, Animated } from 'react-native';
import Background from '../../components/Background';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Form from './Form';
import { style } from './styled';

const Logo = require('../../core/assets/img/logo.png');

export const Login = () => {
  const [form, showForm] = useState('');
  const paddingBottom = useRef(new Animated.Value(180)).current;
  const title = useRef(new Animated.Value(1)).current;
  const fadeInLogo = useRef(new Animated.Value(0)).current;
  const fadeInSingUpButton = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeInLogo, {
      duration: 3000,
      toValue: 1,
    }).start();
    setTimeout(
      () =>
        Animated.timing(fadeInSingUpButton, {
          duration: 2000,
          toValue: 1,
        }).start(),
      4000
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
            />
          )}
          {form === 'login' && (
            <Form.Login
              paddingBottom={paddingBottom}
              title={title}
              handleForgotPassword={() => showForm('password')}
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

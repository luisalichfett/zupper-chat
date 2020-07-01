import React, { useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  StyleProp,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { verifySubmit } from '../helpers';
import Text from '../../../../core/components/Text';
import Form from '../../../../core/components/Form';
import Button from '../../../../core/components/Button';
import { style } from '../../styled';
import { Login } from '../../interfaces/Login';

interface Props {
  paddingBottom: StyleProp<Animated.Value>;
  title: StyleProp<Animated.Value>;
  handleForgotPassword: (event: any) => void;
  onSubmit: (data: Login) => void;
}

export const LoginForm = ({
  paddingBottom,
  title,
  handleForgotPassword,
  onSubmit,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, setValue, handleSubmit, getValues } = useForm<Login>();

  useEffect(() => {
    register({ name: 'username' }, { required: true });
    register({ name: 'password' }, { required: true });
  }, [register]);

  const getBeforeSubmitValues = () => {
    const beforeSubmitData = getValues();
    setIsDisabled(verifySubmit(beforeSubmitData));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={style.form}>
            <Animated.View style={{ opacity: title }}>
              <Text.h1 color="#fff">Login</Text.h1>
            </Animated.View>
            <Form.Input
              placeHolder="Username"
              placeholderTextColor="#fff"
              handleTextInput={(value) => setValue('username', value)}
              handleTextInputSubmit={getBeforeSubmitValues}
              marginTop={160}
            />
            <Form.Password
              placeHolder="Password"
              placeholderTextColor="#fff"
              handlePassword={(value) => setValue('password', value)}
              handlePasswordSubmit={getBeforeSubmitValues}
              marginTop={40}
            />
            <Animated.View style={{ height: paddingBottom }} />
            <View style={{ height: 100 }} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
      <View style={{ position: 'absolute' }}>
        <Button.Default
          text="Confirm"
          handleOnPress={handleSubmit(onSubmit)}
          marginTop={540}
          isDisabled={isDisabled}
        />
        <View style={style.loginButton}>
          <Text.h5 color="#fff">Forgot your password? </Text.h5>
          <Button.Touchable handleOnPress={handleForgotPassword}>
            <Text.h5 color="#fff" underlineText="underline">
              New password
            </Text.h5>
          </Button.Touchable>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { verifySubmit } from '../helpers';
import Background from '../../../../components/Background';
import Text from '../../../../components/Text';
import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import { style } from '../../styled';

interface Props {
  paddingBottom: object;
  title: object;
  handleForgotPassword: (event: any) => void;
}

export const LoginForm = ({
  paddingBottom,
  title,
  handleForgotPassword,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, setValue, handleSubmit, getValues } = useForm();

  useEffect(() => {
    register({ name: 'username' }, { required: true });
    register({ name: 'password' }, { required: true });
  }, [register]);

  const onSbumit = (data: object) => console.log({ data });

  const getBeforeSubmitValues = () => {
    const { beforeSubmitData } = getValues();
    setIsDisabled(verifySubmit(beforeSubmitData));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Background.Animated />
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
              marginTop={30}
            />
            <Animated.View style={{ height: paddingBottom }} />
            <View style={{ height: 100 }} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
      <View style={{ position: 'absolute' }}>
        <Button.Default
          text="Confirm"
          handleOnPress={handleSubmit(onSbumit)}
          marginTop={540}
          isDisabled={isDisabled}
        />
        <View style={style.loginButton}>
          <Text.h5 color="#fff">Forgot your password? </Text.h5>
          <Button.Text handleOnPress={handleForgotPassword}>
            <Text.h5 color="#fff" underlineText="underline">
              New password
            </Text.h5>
          </Button.Text>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

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
  handleLoginButton: (event: any) => void;
}

export const SingUpForm = ({
  paddingBottom,
  title,
  handleLoginButton,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { register, setValue, handleSubmit, getValues } = useForm();

  useEffect(() => {
    register({ name: 'name' }, { required: true });
    register({ name: 'username' }, { required: true });
    register({ name: 'email' }, { required: true });
    register({ name: 'photoUrl' });
    register({ name: 'password' }, { required: true });
  }, [register]);

  const onSbumit = (data: object) => console.log(data);

  const getBeforeSubmitValues = () => {
    const beforeSubmitData = getValues();
    setIsDisabled(verifySubmit(beforeSubmitData, 'photoUrl'));
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
              <Text.h1 color="#fff">Sing Up</Text.h1>
            </Animated.View>
            <Form.Input
              placeHolder="Name"
              handleTextInput={(value) => setValue('name', value)}
              handleTextInputSubmit={getBeforeSubmitValues}
              placeholderTextColor="#fff"
              marginTop={40}
            />
            <Form.Input
              placeHolder="Username"
              handleTextInput={(value) => setValue('username', value)}
              handleTextInputSubmit={getBeforeSubmitValues}
              placeholderTextColor="#fff"
              marginTop={30}
            />
            <Form.Input
              placeHolder="Email"
              handleTextInput={(value) => setValue('email', value)}
              handleTextInputSubmit={getBeforeSubmitValues}
              placeholderTextColor="#fff"
              marginTop={30}
            />
            <Form.Input
              placeHolder="Photo URL"
              handleTextInput={(value) => setValue('photoUrl', value)}
              handleTextInputSubmit={getBeforeSubmitValues}
              placeholderTextColor="#fff"
              marginTop={30}
            />
            <Form.Password
              placeHolder="Password"
              handlePassword={(value) => setValue('password', value)}
              handlePasswordSubmit={getBeforeSubmitValues}
              placeholderTextColor="#fff"
              marginTop={30}
            />
            <Animated.View style={{ height: paddingBottom }} />
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
          <Text.h5 color="#fff">Already have an account? </Text.h5>
          <Button.Text handleOnPress={handleLoginButton}>
            <Text.h5 color="#fff" underlineText="underline">
              Login
            </Text.h5>
          </Button.Text>
        </View>
      </View>
    </View>
  );
};

export default SingUpForm;

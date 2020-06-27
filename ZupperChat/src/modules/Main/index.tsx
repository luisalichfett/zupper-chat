import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';
import { Routes } from '../../routes';
import ChatList from '../ChatList';

const Stack = createStackNavigator<Routes>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChatList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChatList" component={ChatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

import React, { useRef } from 'react';
import Topbar from './Topbar';
import { View, Animated } from 'react-native';
import NewMessage from './Topbar/NewMessage';

export const ChatList = () => {
  const displayUsersList = useRef(new Animated.Value(700)).current;

  const handleNewMessage = () => {
    Animated.timing(displayUsersList, {
      toValue: 0,
      duration: 1500,
    }).start();
  };

  const handleCancelButton = () =>
    Animated.timing(displayUsersList, {
      toValue: 700,
      duration: 1500,
    }).start();

  return (
    <>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: '#000',
        }}
      />
      <NewMessage
        display={displayUsersList}
        handleCancelButton={() => handleCancelButton()}
      />
      <Topbar handleOnPress={() => handleNewMessage()} />
    </>
  );
};

export default ChatList;

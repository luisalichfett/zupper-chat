import React, { useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import NewMessage from './NewMessage';
import Topbar from './Topbar';
import ChatRooms from './ChatRooms';

export const ChatList = () => {
  const displayUsersList = useRef(new Animated.Value(725)).current;
  const unallowedOutsideClick = useRef(new Animated.Value(0)).current;
  const [newMessageMode, setNewMessageMode] = useState(false);

  const handleNewMessage = () => {
    setNewMessageMode(true);
    Animated.sequence([
      Animated.timing(unallowedOutsideClick, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(displayUsersList, {
        toValue: -57,
        duration: 850,
        useNativeDriver: false
      }),
    ]).start();
  };

  const handleCancelButton = () => {
    Animated.sequence([
      Animated.timing(displayUsersList, {
        toValue: 725,
        duration: 850,
        useNativeDriver: false
      }),
      Animated.timing(unallowedOutsideClick, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }),
    ]).start();
    setTimeout(() => setNewMessageMode(false), 1750);
  };

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
      <Topbar handleOnPress={() => handleNewMessage()} />
      <ChatRooms />
      {newMessageMode && (
        <NewMessage
          display={displayUsersList}
          fadeView={unallowedOutsideClick}
          handleCancelButton={() => handleCancelButton()}
        />
      )}
    </>
  );
};

export default ChatList;

import React from 'react';
import Topbar from './Topbar';
import { View } from 'react-native';
import NewMessage from './Topbar/NewMessage';

export const ChatList = () => (
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
    <NewMessage />
    <Topbar />
  </>
);

export default ChatList;

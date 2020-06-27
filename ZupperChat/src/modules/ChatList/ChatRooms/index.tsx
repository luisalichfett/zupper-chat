import React, { useEffect } from 'react';
import { Animated, View, Image, StyleProp } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Text from '../../../components/Text';
import { fakechats } from './fakechats';
import { style } from './styled';

interface Message {
  id: string;
  text: string;
}

interface User {
  id: string;
  name: string;
  user: string;
  photoUrl: string;
  email: string;
  messages: Message[];
}

export const ChatRooms = () => {
  const renderUser = (item: User) => (
    <View style={style.userContainer}>
      <Image style={style.userPhoto} source={{ uri: item.photoUrl }} />
      <View style={style.userInfo}>
        <Text.h5 color="#fff" fontWeight="bold">
          {item.name}
        </Text.h5>
        <View style={{ marginTop: 5, width: '85%', height: '40%' }}>
          <Text.h5
            key={item.messages[item.messages.length - 1].id}
            color="#dcdee0"
          >
            {item.messages[item.messages.length - 1].text}
          </Text.h5>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <FlatList
        style={{
          marginTop: 96,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '85.59%',
          borderTopColor: '99cdb8',
          borderTopWidth: 1,
        }}
        data={fakechats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderUser(item)}
      />
    </>
  );
};

export default ChatRooms;

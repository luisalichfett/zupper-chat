import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Text from '../../../core/components/Text';
import { style } from './styled';
import { useUsersChat } from '../hooks';
import { UserChatItem } from '../interfaces/UserChat';

export const ChatRooms = () => {
  const [usersChat, , loadUsersChat] = useUsersChat();

  useEffect(() => {
    loadUsersChat();
  }, [loadUsersChat]);

  const renderUser = (item: UserChatItem) => (
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
        data={usersChat?.content}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderUser(item)}
      />
    </>
  );
};

export default ChatRooms;

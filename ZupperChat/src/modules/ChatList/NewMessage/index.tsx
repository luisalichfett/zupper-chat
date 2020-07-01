import React, { useEffect } from 'react';
import {
  Animated,
  SectionList,
  View,
  Image,
  StyleProp,
  SectionListData,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../core/components/Button';
import Form from '../../../core/components/Form';
import Text from '../../../core/components/Text';
import { style } from './styled';
import useUsersList from '../hooks';
import { User } from '../interfaces/User';

interface Props {
  fadeView: StyleProp<Animated.Value>;
  display: StyleProp<Animated.Value>;
  handleCancelButton: (event: any) => void;
}

export const NewMessage = ({
  display,
  fadeView,
  handleCancelButton,
}: Props) => {
  const [usersList, , loadUsersList] = useUsersList();

  useEffect(() => {
    loadUsersList();
  }, [loadUsersList]);

  const renderUser = (item: SectionListData<User>) => (
    <View style={style.userContainer}>
      <Image style={style.userPhoto} source={{ uri: item.photoUrl }} />
      <View style={style.userInfo}>
        <Text.h5 color="#fff" fontWeight="bold">
          {item.name}
        </Text.h5>
        <View style={{ marginTop: 2 }}>
          <Text.h6 color="#dcdee0">{item.email}</Text.h6>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          flex: 1,
          backgroundColor: '#123456',
          opacity: fadeView,
          height: '100%',
          width: '100%',
        }}
      />
      <Animated.View style={{ marginTop: display, height: 725 }}>
        <SafeAreaView style={style.container}>
          <View style={{ marginBottom: 0, flex: 1, flexDirection: 'column' }}>
            <View style={style.containerTitle}>
              <View>
                <Text.h4 color="#fff" fontWeight="bold">
                  New Message
                </Text.h4>
              </View>
              <Button.Touchable handleOnPress={handleCancelButton}>
                <Text.h5 color="#ffa115">Cancel</Text.h5>
              </Button.Touchable>
            </View>
            <View style={style.searchField}>
              <Form.Search handleTextInput={(text) => console.log(text)} />
            </View>
            {usersList && (
              <SectionList
                sections={usersList.content}
                renderItem={({ item }) => renderUser(item)}
                renderSectionHeader={({ section: { title } }) => (
                  <View style={style.sectionTitle}>
                    <Text.h4 color="#fff">{title}</Text.h4>
                  </View>
                )}
              />
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default NewMessage;

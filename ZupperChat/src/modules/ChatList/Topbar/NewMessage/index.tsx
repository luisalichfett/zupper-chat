import React from "react";
import { Animated, SectionList, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import Search from "../../../../core/assets/svg/search.svg";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import { fakelist } from "./fakelist";
import { style } from "./styled";
import Form from "../../../../components/Form";

interface User {
  id: string;
  name: string;
  user: string;
  photoUrl: string;
  email: string;
}

export const NewMessage = () => {
  const renderUser = (item: User) => (
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
      <SafeAreaView style={style.container}>
        <Animated.View
          style={{ marginBottom: 0, flex: 1, flexDirection: "column" }}
        >
          <View style={style.containerTitle}>
            <View>
              <Text.h4 color="#fff" fontWeight="bold">
                New Message
              </Text.h4>
            </View>
            <Button.Touchable handleOnPress={() => console.log("close")}>
              <Text.h5 color="#ffa115">Cancel</Text.h5>
            </Button.Touchable>
          </View>
          <View style={style.searchField}>
            <Form.Search handleTextInput={(text) => console.log(text)}/>
          </View>
          <SectionList
            sections={fakelist}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderUser(item)}
            renderSectionHeader={({ section: { title } }) => (
              <View style={style.sectionTitle}>
                <Text.h4 color="#fff">{title}</Text.h4>
              </View>
            )}
          />
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

export default NewMessage;

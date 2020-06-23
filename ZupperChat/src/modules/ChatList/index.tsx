import React from "react";
import { View, Image } from "react-native";
import Bar from "../../components/Bar";
import { style } from "./styled";
import User from "../../core/assets/svg/user.svg";

const LogoBar = require("../../core/assets/img/logobar.png");

export const ChatList = () => (
  <Bar>
    <View style={{ height: 50 }}>
      <Image style={style.logo} source={LogoBar} />
    </View>
    <User />
  </Bar>
);

export default ChatList;

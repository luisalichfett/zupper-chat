import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { style } from "./styled";

interface Props {
  text: string;
  handleOnPress: (event: any) => void;
  height?: number;
  width?: number;
  marginOpacity?: number;
  marginTop: number;
}

export const DefaultButton = ({
  text,
  height = 60,
  width = 250,
  marginOpacity = -60,
  marginTop,
  handleOnPress,
}: Props) => {
  return (
    <View style={{ ...style.container, top: marginTop }}>
      <View
        style={{
          ...style.buttonOpacity,
          width: width,
          height: height,
        }}
      />
      <View
        style={{
          ...style.default,
          width: width,
          height: height,
          marginTop: marginOpacity,
        }}
      >
        <TouchableOpacity onPress={handleOnPress}>
          <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DefaultButton;

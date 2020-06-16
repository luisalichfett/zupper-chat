import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { style } from "./styled";

interface Props {
  text: string;
  handleOnPress: (event: any) => void;
  height?: number;
  width?: number;
  marginTop: number;
  isDisabled?: boolean;
}

export const DefaultButton = ({
  text,
  height = 60,
  width = 250,
  marginTop,
  handleOnPress,
  isDisabled = false,
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
          marginTop: -height,
        }}
      >
        <TouchableOpacity onPress={handleOnPress}>
          <Text style={style.text}>{text}</Text>
        </TouchableOpacity>
      </View>
      {isDisabled && (
        <View
          style={{
            ...style.disabled,
            width: width,
            height: height,
            marginTop: -height
          }}
        />
      )}
    </View>
  );
};

export default DefaultButton;

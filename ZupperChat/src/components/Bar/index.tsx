import React, { ReactNode } from "react";
import { View, Image } from "react-native";
import { style } from "./styled";

const BarBackground = require("../../core/assets/img/bar.png");

interface Props {
  type?: "topbar" | "footer";
  children: ReactNode;
}

export const Bar = ({ type = "topbar", children }: Props) => {
  return (
    <View style={style.container}>
      <View style={type === "topbar" ? style.topbar : style.footer}>
        <Image source={BarBackground} />
      </View>
      <View style={style.children}>{children}</View>
    </View>
  );
};

export default Bar;

import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { style } from "./styled";

interface Props {
  icon: ImageSourcePropType;
  height?: string;
  width?: string;
}

export const Login = ({ icon, height = "10%", width = "10%" }: Props) => {
  return (
    <>
      <Image
        source={icon}
        style={{ ...style.image, height: height, width: width }}
      />
    </>
  );
};

export default Login;

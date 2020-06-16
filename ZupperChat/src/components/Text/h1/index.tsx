import React, { ReactNode } from "react";
import { Text } from "react-native";

interface Props {
  children: ReactNode;
  color: string;
  fontWeight?: "normal" | "bold";
  underlineText?: "underline" | "none"
}

export const InputText = ({ children, color, fontWeight = "normal", underlineText = "none" }: Props) => (
  <Text style={{ color: color, textDecorationLine: underlineText,fontWeight: fontWeight, fontSize: 50 }}>
    {children}
  </Text>
);

export default InputText;

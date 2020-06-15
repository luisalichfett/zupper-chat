import React, { ReactNode } from "react";
import { Text } from "react-native";

interface Props {
  children: ReactNode;
  color: string;
  fontWeight?: "normal" | "bold";
}

export const InputText = ({ children, color, fontWeight = "normal" }: Props) => (
  <Text style={{ color: color, fontWeight: fontWeight, fontSize: 30 }}>
    {children}
  </Text>
);

export default InputText;

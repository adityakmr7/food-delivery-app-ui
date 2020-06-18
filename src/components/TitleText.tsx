import React from "react";
import { Text } from "react-native";
const TitleText: React.FC<{ text: string }> = ({ text }) => (
  <Text style={{ fontSize: 20, color: "#F57C00", fontWeight: "bold" }}>
    {text}
  </Text>
);

export default TitleText;

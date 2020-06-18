import React from "react";
import { Text } from "react-native";
import { Center } from "../components/Center";
interface DetailScreenProps {}

export const DetailScreen: React.FC<DetailScreenProps> = ({}) => {
  return (
    <Center>
      <Text>Detail</Text>
    </Center>
  );
};

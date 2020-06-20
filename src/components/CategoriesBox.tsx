import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { color } from "../constants";

const { width, height } = Dimensions.get("window");

interface CategoriesProps {
  goto: (id: number) => void;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  id: number;
}

const CategoriesBox = ({
  goto,
  image,
  title,
  subTitle,
  id,
}: CategoriesProps) => (
  <View
    style={{
      marginVertical: 15,
      marginHorizontal: 6,
    }}
  >
    <View
      style={{
        width: width / 3,
        height: "100%",
        flexDirection: "column",
        backgroundColor: color.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={{ width: 50, height: 50 }} source={image} />
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>{title}</Text>
      </View>
      <AntDesign
        onPress={() => goto(id)}
        name="rightcircleo"
        size={24}
        color={color.primary}
        style={{ backgroundColor: "white", borderRadius: 50 }}
      />
    </View>
  </View>
);

export default CategoriesBox;

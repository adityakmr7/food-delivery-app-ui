import React from "react";
import { View, Text, Image, Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { color } from "../constants";
import { useLinkProps } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

interface CategoriesProps {
  goto: () => void;
}

const CategoriesBox = ({ goto }: CategoriesProps) => (
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
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/food-1.png")}
        />
      </View>
      <View style={{ paddingBottom: 10 }}>
        <Text>Pizza</Text>
      </View>
      <AntDesign
        onPress={() => goto()}
        name="rightcircleo"
        size={24}
        color={color.primary}
        style={{ backgroundColor: "white", borderRadius: 50 }}
      />
    </View>
  </View>
);

export default CategoriesBox;

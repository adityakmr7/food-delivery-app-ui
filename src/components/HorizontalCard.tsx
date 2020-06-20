import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageSourcePropType,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { color } from "../constants";
const { width, height } = Dimensions.get("window");

interface HorizontalProps {
  goto: () => void;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  price: number;
}
const HorizontalCard = ({
  goto,
  price,
  image,
  title,
  subTitle,
}: HorizontalProps) => {
  const star = [1, 2, 3, 4, 5];
  return (
    <View
      style={{
        marginVertical: 15,
        height: height / 4 - 50,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 5,
        shadowRadius: 5,
      }}
    >
      <View style={{ flex: 1, paddingLeft: 20 }}>
        <Image style={{ height: "70%", width: "70%" }} source={image} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <View style={{ flexDirection: "row" }}>
          {star.map((item, index) => {
            return (
              <Entypo
                key={index}
                name="star-outlined"
                size={12}
                color="black"
              />
            );
          })}
        </View>
        <Text>
          {" "}
          <Text style={{ fontSize: 10, color: color.primary }}>$</Text>
          <Text style={{ fontSize: 20 }}>{price}</Text>
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 50,
          height: 50,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: color.primary,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <Entypo
            onPress={() => goto()}
            name="plus"
            size={24}
            color={color.tileBackground}
          />
        </View>
      </View>
    </View>
  );
};

export default HorizontalCard;

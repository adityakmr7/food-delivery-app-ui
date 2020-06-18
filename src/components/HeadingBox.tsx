import React from "react";
import { Text, View, Dimensions, Image } from "react-native";

import TitleText from "../components/TitleText";
const { width, height } = Dimensions.get("window");

const HeadingBox = ({}) => (
  <View
    style={{
      marginVertical: 10,
      shadowColor: "black",
      elevation: 10,
      shadowOpacity: 0.9,
      paddingVertical: 10,
      paddingHorizontal: 10,
      height: height / 6,
    }}
  >
    <Image
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        position: "absolute",
        top: 10,
        justifyContent: "center",
      }}
      source={require("../../assets/dboy.png")}
    />
    <View
      style={{
        justifyContent: "center",
        //backgroundColor: "blue",
        height: "100%",
        borderRadius: 20,
        alignItems: "center",
        paddingLeft: 100,
      }}
    >
      <View>
        <TitleText text={"Free Delivery"} />
        <TitleText text={"During Covid-19"} />
      </View>
    </View>
  </View>
);

export default HeadingBox;

import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Center } from "../components/Center";
import { AntDesign } from "@expo/vector-icons";
import { color, ScreenHeight, ScreenWidth } from "../constants";
import SectionTitle from "../components/SectionTitle";
interface DetailScreenProps {}

export const DetailScreen: React.FC<DetailScreenProps> = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: color.detailBack,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Text style={{ fontSize: 30 }}>Meaty Pizza</Text>
          <Text style={{ fontSize: 16, color: "grey" }}>
            With Beef , Mushroom
          </Text>
        </View>
        <View
          style={{
            width: ScreenWidth - 10,
            height: ScreenHeight / 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: ScreenWidth - 110, height: ScreenHeight / 3 }}
            source={require("../../assets/food-1.png")}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={
            {
              //backgroundColor: "blue"
            }
          }
        >
          <View
            style={{
              marginHorizontal: 30,
              paddingVertical: 30,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ color: "grey" }}>Size</Text>
              <Text style={{ fontSize: 20 }}>Medium</Text>
            </View>
            <DetailBox property={"Weight"} quality={"400 gm"} />
            <DetailBox property={"Price"} quality={"$12"} />
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <View style={{ paddingVertical: 10 }}>
            <SectionTitle title={"Ingredients"} viewAll={false} />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingVertical: 30,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 30,
              backgroundColor: "#EAEAEE",
              elevation: 0.5,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/food-1.png")}
              />
              <Text>Beef</Text>
            </View>
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/food-1.png")}
              />
              <Text>Beef</Text>
            </View>
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/food-1.png")}
              />
              <Text>Beef</Text>
            </View>
            <View>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/food-1.png")}
              />
              <Text>Beef</Text>
            </View>
          </View>

          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                style={{
                  borderWidth: 1 - 0.5,
                  borderRadius: 50,
                  borderColor: "grey",
                }}
                name="pluscircle"
                size={60}
                color={color.primary}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const DetailBox = ({
  property,
  quality,
}: {
  property: string;
  quality: string;
}) => (
  <View>
    <Text style={{ color: "grey" }}>{property}</Text>
    <Text style={{ fontSize: 20 }}>{quality}</Text>
  </View>
);

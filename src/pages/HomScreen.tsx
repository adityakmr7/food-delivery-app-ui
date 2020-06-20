import React from "react";
import { View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "../constants";
import SectionTitle from "../components/SectionTitle";
import HeadingBox from "../components/HeadingBox";
import CategoriesBox from "../components/CategoriesBox";
import HorizontalCard from "../components/HorizontalCard";
import { StackProps } from "../interface/RouteParamList";
import { data } from "../data/dummyData";
interface HomeScreenProps {}

const { width, height } = Dimensions.get("window");

function HomeScreen({ navigation, route }: StackProps<"Home">) {
  const navigateTo = (id: number) => {
    navigation.navigate("Detail", {
      productId: id,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: color.tileBackground }}
    >
      <HeadingBox />
      <View
        style={{
          marginVertical: 15,
          height: height / 3 - 30,
          marginHorizontal: 20,
        }}
      >
        <SectionTitle title={"Categories"} viewAll={true} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <CategoriesBox
                id={item.id}
                image={item.img}
                title={item.title}
                subTitle={item.subtitle}
                goto={navigateTo}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <SectionTitle title={"Popular Now"} viewAll={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <HorizontalCard
                id={item.id}
                image={item.img}
                title={item.title}
                subTitle={item.subtitle}
                price={item.price}
                goto={navigateTo}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

import { Dimensions } from "react-native";
export const color = {
  primary: "#FA9300",
  tileBackground: "#FAFAFC",
  textColor: "#333333",
  detailBack: "#F3F3F6",
};

const { width, height } = Dimensions.get("window");

export const ScreenWidth = width;
export const ScreenHeight = height;

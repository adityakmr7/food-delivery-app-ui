import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Fontisto } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import HomeScreen from "../pages/HomScreen";
import { DetailScreen } from "../pages/DetailScreen";
import { RouteParamList } from "../interface/RouteParamList";
interface RoutesProps {}

const Stack = createStackNavigator<RouteParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{ paddingLeft: 20 }}>
                <Fontisto name="checkbox-passive" size={24} color="black" />
              </View>
            ),
            headerTitle: () => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>Home</Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 20 }}>
                <Octicons name="search" size={24} color="black" />
              </View>
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Fontisto, Octicons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../pages/HomScreen";
import { DetailScreen } from "../pages/DetailScreen";
import { RouteParamList } from "../interface/RouteParamList";
import { TouchableOpacity } from "react-native-gesture-handler";
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
                <Ionicons name="ios-menu" size={24} color="black" />
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
        <Stack.Screen
          options={({ navigation, route }) => ({
            headerStyle: {
              elevation: 0,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={{ paddingLeft: 20 }}
              >
                <AntDesign name="leftcircleo" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ paddingRight: 20 }}>
                <EvilIcons name="heart" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
          name="Detail"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

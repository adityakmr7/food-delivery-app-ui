import React from "react";
import { View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
const SectionTitle: React.FC<{ title: string; viewAll: boolean }> = ({
  title,
  viewAll,
}) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
    </View>
    {viewAll ? (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ paddingHorizontal: 10 }}>View All</Text>
        <SimpleLineIcons name="arrow-right-circle" size={24} color="black" />
      </View>
    ) : null}
  </View>
);

export default SectionTitle;

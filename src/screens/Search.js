import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const { name, params } = useRoute();

  console.log(name);
  console.log(params);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Text style={{ fontSize: 25 }}>Next</Text>
      </TouchableOpacity>
      <Text>Hey, {params?.name}</Text>
    </View>
  );
};

export default Search;

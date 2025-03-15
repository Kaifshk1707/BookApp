import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        width: 60,
        backgroundColor: "#1273de",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        // marginBottom: Platform.OS === "android" ? 0 : 0,
      }}
    >
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default AddButton;

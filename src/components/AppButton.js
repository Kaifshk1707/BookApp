import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ onSaveDetail }) => {
  return (
    <TouchableOpacity
      style={{
        width: "80%",
        backgroundColor: "#1273de",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 20,
      }}
      onPress={onSaveDetail}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#eee" }}>
        Save
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

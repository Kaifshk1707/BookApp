import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";

interface GlobalTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  othersProps?: object;
}

const GlobalTextInput: React.FC<GlobalTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  othersProps,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#A1AEB5",
        width: "100%",
        height: 45,
        borderRadius: 5,
        justifyContent: "center",
        paddingHorizontal: 8,
        marginBottom: 20,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...othersProps}
      />
    </View>
  );
};

export default GlobalTextInput;

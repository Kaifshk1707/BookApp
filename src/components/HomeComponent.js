import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HomeComponent = ({
  title,
  BookTitle,
  imageURL,
  price,
  email,
  date,
  onDeleteItem,
  onEditItem,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        marginVertical: 10,
        padding: 15,
        borderRadius: 12,
        // width: "100%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 220,
          borderRadius: 10,
          marginBottom: 12,
        }}
        source={
          imageURL
            ? { uri: imageURL }
            : require("./../assets/image/emptyImage.jpg")
        }
      />

      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 6,
            color: "#333",
          }}
        >
          Author name:
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 6,
              color: "#333",
            }}
          >
            {" "}
            {title}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            marginBottom: 6,
            color: "#333",
          }}
        >
          📖 {BookTitle}
        </Text>
        <Text style={{ fontSize: 16, color: "#555", marginBottom: 6 }}>
          💰 Price:{" "}
          <Text style={{ fontWeight: "bold", color: "#4CAF50" }}>${price}</Text>
        </Text>
        <Text style={{ fontSize: 15, color: "#1273de", marginBottom: 6 }}>
          ✉️ Seller: {email}
        </Text>
        <Text style={{ fontSize: 14, color: "#777" }}>
          📆 Published on: {moment.utc(date).format("MMMM YY, h:mm A")}
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          // marginTop: 8,
          // backgroundColor: "#F3F3F3",
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#444" }}>
            👍 Like
          </Text>
        </TouchableOpacity> */}
          <TouchableOpacity
            onPress={onEditItem}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 20,
              // backgroundColor: "#eee",
              borderColor: "#1273de",
              borderWidth: 1,
            }}
          >
            <FontAwesome6 name="edit" size={24} color="#1273de" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 20,
              backgroundColor: "#eee",
              borderColor: "red",
              borderWidth: 1,
            }}
            onPress={onDeleteItem}
          >
            <MaterialIcons name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeComponent;

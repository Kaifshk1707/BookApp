import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Profile = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   getApiData();
  // }, []);

  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#FFF",
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 200,
          borderRadius: 8,
          marginBottom: 10,
        }}
        source={{ uri: item.image_item }}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
        📖 {item.name_of_item}
      </Text>
      <Text style={{ fontSize: 16, color: "#666", marginBottom: 4 }}>
        💰 Price:{" "}
        <Text style={{ fontWeight: "bold" }}>${item.price_of_item}</Text>
      </Text>
      <Text style={{ fontSize: 14, color: "blue", marginBottom: 4 }}>
        ✉️ Seller: {item.name_of_shop}
      </Text>
      <Text style={{ fontSize: 14, color: "blue", marginBottom: 4 }}>
        ✉️ Details: {item.details_item}
      </Text>
      <Text style={{ fontSize: 14, color: "#888" }}>
        📆 Published on: {moment.utc(item.createdAt).format("MMMM Do, h:mm A")}
      </Text>
      <View
        style={{
          width: "100%",
          marginTop: 10,
          backgroundColor: "#f5f5f5",
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ paddingHorizontal: 15, paddingVertical: 8 }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              👍 Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => !loading && handleUpdateBook(item.id)}
            style={{ paddingHorizontal: 15, paddingVertical: 8 }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              📖
              {loading ? "Updating..." : " Update"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => !loading && handleDeletePost(item.id)}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              {loading ? "Deleting..." : " Delete"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Profile;

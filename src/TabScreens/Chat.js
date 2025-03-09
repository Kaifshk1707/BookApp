import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Chat = () => {
  const [electronicList, setElectronicList] = useState([]);

  const endPointURL1 = "https://67c9694e0acf98d0708a2b66.mockapi.io/electronic";

  // Fetch Data
  const getListOfBook = async () => {
    try {
      const response = await axios.get(endPointURL1);
      setElectronicList(response.data); // Update state with fetched data
    } catch (err) {
      console.log("Error fetching data", err);
    }
  };

  useEffect(() => {
    getListOfBook(); // Fetch data when the component mounts
  }, []);

  // Delete a book by ID
  const deleteBookById = async (id) => {
    try {
      await axios.delete(`${endPointURL1}/${id}`);
      Alert.alert("Book deleted successfully");
      getListOfBook(); // Fetch updated data after deletion
    } catch (err) {
      console.log(err);
    }
  };

  const body = {
    name_of_item: "Hero Development",
    image_item: "https://example.com/sample-image.jpg",
    price_of_item: 1300,
    details_item: "Learn! Programming",
  }

  // Create a new book
  const createBook = async () => {
    try {
      await axios.post(endPointURL1, body);
      getListOfBook(); // Fetch updated data after creation
      Alert.alert("Book was created");
    } catch (err) {
      console.log("An Error", err);
    }
  };


  const ChatItem = ({ item, deleteBookById }) => {
    return (
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
          💰 Price: <Text style={{ fontWeight: "bold" }}>${item.price_of_item}</Text>
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
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>👍 Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>📖 Read</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteBookById(item.id)} style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#d9534f" }}>🗑️ Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: "#F5F5F5" }}>
      {electronicList.length > 0 ? (
        <FlatList
          data={electronicList}
          keyExtractor={(item) => item.id.toString()} 
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => <ChatItem item={item} deleteBookById={deleteBookById} />}
        />
      ) : (
        <ActivityIndicator size={"large"} color={"#A7CCF6"} />
      )}
      <Button title="Create Post" onPress={createBook} />
    </SafeAreaView>
  );
};

export default Chat;

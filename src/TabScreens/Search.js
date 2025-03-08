import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Search = () => {
  const [electronicList, setElectronicList] = useState([]);

  const endPointURL1 = "https://67c9694e0acf98d0708a2b66.mockapi.io/electronic";

  const getBookById = async () => {
    try {
      const response = await axios.get(endPointURL1);
      setElectronicList(response.data);
      
    } catch (err) {
      console.log("An Error", err);
    }
  };

  const deleteBookById = async (id) => {
    try{
      const response = await axios.delete(`${endPointURL1}/${id}`);
      Alert.alert("Book is deleted successfully")
    }catch(err){
      console.log(err);
      
    }
  }

  useEffect(() => {
    getBookById();
  }, []);

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
        💰 Price: <Text style={{ fontWeight: "bold" }}>${item.price_of_item}</Text>
      </Text>
      <Text style={{ fontSize: 14, color: "blue", marginBottom: 4 }}>
        ✉️ Seller: {item.name_of_shop}
      </Text>
      <Text style={{ fontSize: 14, color: "blue", marginBottom: 4 }}>
        ✉️ Details: {item.details_item}
      </Text>
      <Text style={{ fontSize: 14, color: "#888" }}>
        📆 Published on: {moment.utc(item.createdAt).format("MMMM Doтрибут, h:mm A")}
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
          <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              👍 Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              📖 Read
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              🔄 Share
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => deleteBookById(item.id)} style={{ paddingHorizontal: 15, paddingVertical: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}>
              🔄 Delete
            </Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#F5F5F5" }}>
      <FlatList
        data={electronicList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Search;
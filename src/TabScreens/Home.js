import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Home = () => {
  const [bookList, setBookList] = useState([]);

  const endPointURL = "https://67c9694e0acf98d0708a2b66.mockapi.io/books";

  const getAPIData = async () => {
    const response = await axios.get(endPointURL);
    console.log("Fetched Data:", response.data);
    setBookList(response.data);
    
  };

  const deletePost = async(id) =>{
    try{
      const response = await axios.delete(`${endPointURL}/${id}`)
      Alert.alert("Post has beend deleted")
    }catch(err){
      console.log("An error occured", err);
      
    }
  }

  useEffect(() => {
    getAPIData();
  }, []);

  renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        marginVertical: 10,
        padding: 15,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
      }}
    >
      <Image
        style={{ width: '100%', height: 220, borderRadius: 10, marginBottom: 12 }}
        source={{ uri: item.cover }}
      />

      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 6, color: '#333' }}>
          📖 {item.name_of_author}
        </Text>
        <Text style={{ fontSize: 16, color: '#555', marginBottom: 6 }}>
          💰 Price: <Text style={{ fontWeight: 'bold', color: '#4CAF50' }}>${item.price_of_book}</Text>
        </Text>
        <Text style={{ fontSize: 15, color: '#2196F3', marginBottom: 6 }}>
          ✉️ Seller: {item.email_of_seller}
        </Text>
        <Text style={{ fontSize: 14, color: '#777' }}>
          📆 Published on: {moment.utc(item.createdAt).format('MMMM Doтрибут, h:mm A')}
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          marginTop: 12,
          backgroundColor: '#F3F3F3',
          paddingVertical: 12,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#444' }}>👍 Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 }}
          >
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#444' }}>📖 Read</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20 }}
            onPress={() => deletePost(item.id)}
          >
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#444' }}>🔄 Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#F5F5F5" }}>


      {bookList.length > 0 ?
        (<FlatList
          // horizontal
          data={bookList}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={renderItem}
        />) :
        (
          <ActivityIndicator size={"large"} color={"#A7CCF6"} />
        )}
    </View>
  );
};

export default Home;

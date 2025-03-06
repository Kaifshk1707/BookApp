import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import moment from "moment";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const navigation = useNavigation();

  const endPointURL = "https://67c9694e0acf98d0708a2b66.mockapi.io/books";

  const getAPIData = async () => {
    const response = await axios.get(endPointURL);
    console.log(JSON.stringify(response.data, null, 5));
    setBookList(response.data);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text style={{ color: "black", fontSize: 25 }}>Home</Text> */}
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name_of_author}</Text>
            {/* <Text>{item.createdAt}</Text> */}
            <Text>
              {moment.utc(item?.created_at).format("MMMM Do YYYY, h:mm A")}
            </Text>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: item.cover }}
            />
            <Text>{item.email_of_seller}</Text>
            <Text>{item.price_of_book}</Text>
          </View>
        )}
      />

      {/* <Button title="Get Data-List" onPress={getAPIData} /> */}
    </View>
  );
};

export default Home;

import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [electronicList, setElectronicList] = useState([]);

  const endPointURL = "https://67c9694e0acf98d0708a2b66.mockapi.io/books";

  const getAPIData = async () => {
    const response = await axios.get(endPointURL);
    console.log("Fetched Data:", response.data);
    setBookList(response.data);
    console.error("Error fetching data:", error);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#F5F5F5" }}>
      {/* <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Book List 📚
      </Text> */}

      {/* <Button title="Get Books" onPress={getAPIData} /> */}

      <FlatList
        horizontal
        data={bookList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
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
            {/* Book Cover */}
            <Image
              style={{
                width: "100%",
                height: 200,
                borderRadius: 8,
                marginBottom: 10,
              }}
              source={{ uri: item.cover }}
            />

            {/* Book Details */}
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
              📖 {item.name_of_author}
            </Text>

            <Text style={{ fontSize: 16, color: "#666", marginBottom: 4 }}>
              💰 Price:{" "}
              <Text style={{ fontWeight: "bold" }}>${item.price_of_book}</Text>
            </Text>

            <Text style={{ fontSize: 14, color: "blue", marginBottom: 4 }}>
              ✉️ Seller: {item.email_of_seller}
            </Text>

            <Text style={{ fontSize: 14, color: "#888" }}>
              📆 Published on:{" "}
              {moment.utc(item.createdAt).format("MMMM Do YYYY, h:mm A")}
            </Text>

            {/* Action Buttons */}
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
                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}
                  >
                    👍 Like
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}
                  >
                    📖 Read
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "#555" }}
                  >
                    🔄 Share
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

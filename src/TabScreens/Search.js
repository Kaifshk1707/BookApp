import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getElectronicData, handleDeletePost } from "../API/config";
import HomeComponent from "../components/HomeComponent";

const Search = () => {
  const [electronicList, setElectronicList] = useState([]);

  const getListOfBook = () => {
    getBookData({
      onSuccess: (data) => setBookList(data),
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    getListOfBook();
  }, []);

  const hadnleDeleteItem = (item) => {
    console.log(item.id);
    handleDeletePost({
      onSuccess: () => getListOfBook(),
      onError: (err) => console.log(err),
      itemID: item.id,
    });
  };

  const handleEditPost = (item) => {
    setModalVisible(true);
    setSelectedItem(item);
  };

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#F5F5F5" }}>
      {electronicList.length > 0 ? (
        <FlatList
          // horizontal
          data={electronicList}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <HomeComponent
              title={item.name_of_item}
              BookTitle={item.details_item}
              price={item.price_of_item}
              email={item.name_of_shop}
              imageURL={item.image_item}
              date={item.createdAt}
              onDeleteItem={() => handleDeleteItem(item)}
              onEditItem={() => handleEditPost(item)}
            />
          )}
        />
      ) : (
        <ActivityIndicator size={"large"} color={"#A7CCF6"} />
      )}
    </View>
  );
};

export default Search;

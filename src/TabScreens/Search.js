import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getElectronicData } from "../API/config";
import HomeComponent from "../components/HomeComponent";

const Search = () => {
  const [electronicList, setElectronicList] = useState([]);

  const getListData = () => {
    getElectronicData({
      onSuccess: (data) => setElectronicList(data),
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#F5F5F5" }}>
      {electronicList.length > 0 ? (
        <FlatList
          horizontal
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
              onDeleteItem={() => hadnleDeleteItem(item)}
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

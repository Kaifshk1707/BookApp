import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { getElectronicData } from "../API/config";
import HomeComponent from "../components/HomeComponent";

const Search = () => {
  interface ElectronicItem {
    id: number;
    name_of_item: string;
    details_item: string;
    price_of_item: number;
    name_of_shop: string;
    image_item: string;
    createdAt: string;
    hadnleDeleteItem: () => void;
    handleEditPost: () => void;
  }

  const [electronicList, setElectronicList] = useState<ElectronicItem[]>([]);

  const getListData = () => {
    getElectronicData({
      onSuccess: (data: any) => setElectronicList(data),
      onError: (err: any) => console.log(err),
    });
  };

  useEffect(() => {
    getListData();
  }, []);

  function handleDeleteItem(item: ElectronicItem): void {
    throw new Error("Function not implemented.");
  }

  function handleEditPost(item: ElectronicItem): void {
    throw new Error("Function not implemented.");
  }

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

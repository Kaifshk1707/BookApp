import {
  View,
  FlatList,
  ActivityIndicator,
  Modal,
  Text,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAPIData, handleDeletePost } from "../API/config";
import HomeComponent from "../components/HomeComponent";
import AddButton from "../components/AddButton";
import AddBookScreen from "../screeens/AddBookScreen";
import GlobalTextInput from "../screeens/GlobalTextInput";
import AppButton from "../components/AppButton";

const Home = () => {
  const [bookList, setBookList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getListOfBook = () => {
    getAPIData({
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

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#F5F5F5",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {bookList.length > 0 ? (
        <FlatList
          // horizontal
          data={bookList}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <HomeComponent
              title={item.name_of_author}
              BookTitle={item.book_title}
              price={item.price_of_book}
              email={item.email_of_seller}
              imageURL={item.cover}
              date={item.createdAt}
              onDeleteItem={() => hadnleDeleteItem(item)}
            />
          )}
        />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size={60} color={"#A7CCF6"} />
        </View>
      )}
      <AddButton onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onCloseModal={() => setModalVisible(false)}
          createNewSuccess={() => getListOfBook()}
        />
      </Modal>
    </View>
  );
};

export default Home;

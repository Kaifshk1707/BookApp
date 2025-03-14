import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { createBook, handleUpdateBook } from "../API/config";
import GlobalTextInput from "../screeens/GlobalTextInput";
import AppButton from "../components/AppButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddBookScreen = ({ onCloseModal, createNewSuccess, selectedItem }) => {
  const [image, setImage] = useState(selectedItem?.cover || "");
  const [authorName, setAuthorName] = useState(
    selectedItem?.name_of_author || ""
  );
  const [bookName, setBookName] = useState(selectedItem?.book_title || "");
  const [price, setPrice] = useState(selectedItem?.price_of_book || "");
  const [email, setEmail] = useState(selectedItem?.email_of_seller || "");

  const createNewBook = () => {
    createBook({
      body: {
        cover: image,
        name_of_author: authorName,
        book_title: bookName,
        price_of_book: price,
        email_of_seller: email,
      },
      onSuccess: () => {
        onCloseModal();
        createNewSuccess();
      },
      onError: (err) => {
        console.log("API Error:", err);
        Alert.alert("Some error occurred", err?.message || "Unknown error");
      },
    });
  };

  const handleEditPost = () => {
    handleUpdateBook({
      Id: selectedItem.id,
      body: {
        cover: image,
        name_of_author: authorName,
        book_title: bookName,
        price_of_book: price,
        email_of_seller: email,
      },
      onSuccess: () => {
        onCloseModal();
        createNewSuccess();
      },
      onError: (err) => {
        console.log("API Error:", err);
        Alert.alert("Some error occurred", err?.message || "Unknown error");
      },
    });
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onCloseModal}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign
          style={{
            marginTop: "5%",
            alignSelf: "flex-start",
            marginLeft: "5%",
          }}
          name="closecircle"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 10,
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "800" }}>Book Details</Text>
        <GlobalTextInput
          placeholder="Cover Image"
          value={image}
          onChangeText={(txt) => setImage(txt)}
        />
        <GlobalTextInput
          placeholder="Author Name: "
          value={authorName}
          onChangeText={(txt) => setAuthorName(txt)}
        />
        <GlobalTextInput
          placeholder="Book Name: "
          value={bookName}
          onChangeText={(txt) => setBookName(txt)}
        />
        <GlobalTextInput
          placeholder="Price 💰: "
          keyboardType={"numeric"}
          value={price}
          onChangeText={(txt) => setPrice(txt)}
        />
        <GlobalTextInput
          placeholder="Seller Email: "
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        <AppButton
          onSaveDetail={!!selectedItem ? handleEditPost : createNewBook}
          selectedItem={selectedItem}
        />
      </View>
    </View>
  );
};

export default AddBookScreen;

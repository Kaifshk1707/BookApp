import axios from "axios";
import { Alert } from "react-native";
import { API_BASE_URL } from "@env";

const bookListDataURL = `${API_BASE_URL}/books`;
const electronicListDataURL = `${API_BASE_URL}/electronic`;

export const getBookData = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(bookListDataURL);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An Error", error);
  }
};

export const getElectronicData = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(electronicListDataURL);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An Error", error);
  }
};

export const getBookById = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(`${bookListDataURL}/6`);
    // console.log(response.data, null + 10);
    onSuccess && onSuccess(response.data);
  } catch (err) {
    onError && onError(error);
    console.log("An Error", err);
  }
};

// Delete a book by ID
export const handleDeletePost = async ({ onSuccess, onError, itemID }) => {
  try {
    const response = await axios.delete(`${bookListDataURL}/${itemID}`);
    onSuccess && onSuccess(response.data);
    Alert.alert("Post has been deleted");
  } catch (error) {
    onError && onError(error);
    console.log("An error occured", error);
  }
};

// const body = {  // hard code practice body
//   name_of_item: "Hero Development",
//   image_item: "https://example.com/sample-image.jpg",
//   price_of_item: 1300,
//   details_item: "Learn! Programming",
// };
// Create a new book
export const createBook = async ({ onSuccess, onError, body }) => {
  try {
    const response = await axios.post(bookListDataURL, body); // Store response
    onSuccess && onSuccess(response.data);
    Alert.alert("Book was created");
  } catch (error) {
    onError && onError(error);
    console.log("An Error:", error);
  }
};

// Update the book
export const handleUpdateBook = async ({ onSuccess, onError, body, Id }) => {
  try {
    const response = await axios.put(`${bookListDataURL}/${Id}`, body); // Store response
    onSuccess && onSuccess(response.data);
    Alert.alert("Book has been updated");
    // getBookData(); // Fetch updated data after creation
  } catch (error) {
    onError && onError(error);
    console.log("Error", error);
  }
};

import axios from "axios";
import { Alert } from "react-native";
import { API_BASE_URL } from "@env";

const endPointURL = `${API_BASE_URL}/books`;

export const getAPIData = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(endPointURL);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An Error", error);
  }
};

export const getBookById = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(`${endPointURL}/6`);
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
    const response = await axios.delete(`${endPointURL}/${itemID}`);
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
    const response = await axios.post(endPointURL, body); // Store response
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
    const response = await axios.put(`${endPointURL}/${Id}`, body); // Store response
    onSuccess && onSuccess(response.data);
    Alert.alert("Book has been updated");
    // getAPIData(); // Fetch updated data after creation
  } catch (error) {
    onError && onError(error);
    console.log("Error", error);
  }
};

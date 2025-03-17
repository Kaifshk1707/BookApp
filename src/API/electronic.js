import axios from "axios";
import { Alert } from "react-native";
import { API_BASE_URL } from "@env";

const electronicListURL = `${API_BASE_URL}/electronic`;

export const getBookData = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(electronicListURL);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An error occurred", error);
  }
};

export const getBookById = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(`${electronicListURL}/6`);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error);
    console.log("An error occurred", error);
  }
};

export const handleDeletePost = async ({ onSuccess, onError, itemID }) => {
  try {
    const response = await axios.delete(`${electronicListURL}/${itemID}`);
    onSuccess && onSuccess(response.data);
    // Alert.alert("Post has been deleted");
  } catch (error) {
    onError && onError(error);
    console.log("An error occurred", error);
  }
};

export const createBook = async ({ onSuccess, onError, body }) => {
  try {
    const response = await axios.post(electronicListURL, body);
    onSuccess && onSuccess(response.data);
    // Alert.alert("Book was created");
  } catch (error) {
    onError && onError(error);
    console.log("An error occurred", error);
  }
};

export const handleUpdateBook = async ({ onSuccess, onError, body, Id }) => {
  try {
    const response = await axios.put(`${electronicListURL}/${Id}`, body);
    onSuccess && onSuccess(response.data);
    // Alert.alert("Book has been updated");
  } catch (error) {
    onError && onError(error);
    console.log("An error occurred", error);
  }
};

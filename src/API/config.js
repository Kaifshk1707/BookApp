import axios from "axios";
import { Alert } from "react-native";
import { API_BASE_URL } from "@env";

const endPointURL = `${API_BASE_URL}/books`;

export const getAPIData = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(endPointURL);
    // console.log("Fetched Data:", response.data);
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
    console.log("====================================");
    console.log(response.data, null + 10);
    console.log("====================================");
    onSuccess && onSuccess(response.data);

    Alert.alert("Book was created");
  } catch (error) {
    onError && onError(error);
    console.log("An Error:", error);
  }
};

export const handleUpdateBook = async ({ onSuccess, onError }) => {
  try {
    await axios.put(`${endPointURL}/8`, body);
    onSuccess && onSuccess(response.data);
    // getAPIData(); // Fetch updated data after creation
  } catch (error) {
    onError && onError(error);
    console.log("Error", error);
  }
};

// export const getApiData = async ({ onError, onSuccess }) => {
//     try {
//       const response = await axios.get(endPointURL);
//       onSuccess();
//     } catch (error) {
//       onError();
//       Alert.alert("Error", "Failed to load data. Please try again.");
//     }
//   };

// // Fetch Data
// export const getListOfBook = async ({ onSuccess, onError }) => {
//     try {
//       const response = await axios.get(endPointURL);
//       onSuccess();
//     } catch (err) {
//       onError();
//       console.log("Error fetching data", err);
//     }
//   };

// Delete a book by ID
// export const handleDeletePost = async ({ onSuccess, onError }) => {
//   if (loading) return;
//   setLoading(true);
//   try {
//     await axios.delete(`${endPointURL}/${id}`);
//     onSuccess();
//     getApiData();
//   } catch (err) {
//     onError();
//     console.error("Error deleting post:", err.response?.data || err.message);
//   } finally {
//     setLoading(false);
//   }
// };

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",  // Backend URL
});

export const loginUser = async (credentials) => {
  try {
    const response = await API.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

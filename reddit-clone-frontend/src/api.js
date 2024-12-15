import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Login
export const loginApi = async (email, password) => {
  try {
    const response = await apiClient.post("/login", { email, password });

    const { id, username } = response.data;

    localStorage.setItem("userID", id);
    localStorage.setItem("username", username);

    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// Logout
export const logoutApi = async () => {
  try {
    const response = await apiClient.get("/logout");
    return response.data;
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    throw error;
  }
};

// Register
export const registerApi = async (userData) => {
  try {
    const response = await apiClient.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Register error:", error.response?.data || error.message);
    throw error;
  }
};

// Get All Posts
export const getAllPostsApi = async () => {
  try {
    const response = await apiClient.get("/get-all-posts");
    return response.data.data;
  } catch (error) {
    console.error("Get All Posts error:", error.response?.data || error.message);
    throw error;
  }
};
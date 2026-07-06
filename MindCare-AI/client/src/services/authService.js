import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/auth`;

export const registerUser = (userData) => {
  return API.post("/register", userData);
};

export const loginUser = (userData) => {
  return API.post("/login", userData);
};
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/auth`;

export const registerUser = (userData) => {
  return axios.post(`${API}/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API}/login`, userData);
};
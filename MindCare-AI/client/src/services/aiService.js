import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/ai`;
API.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {

    config.headers.Authorization = `Bearer ${token}`;

  }

  return config;

});

export const analyzeMood = (data) =>
  API.post("/ai/analyze", data);
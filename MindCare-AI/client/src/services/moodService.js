import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/moods`;

const getToken = () => {
  return localStorage.getItem("token");
};

export const getTodayMood = () => {
  return axios.get(`${API}/today`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const getAllMoods = () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const createMood = (data) => {
  return axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const updateMood = (id, data) => {
  return axios.put(`${API}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const deleteMood = (id) => {
  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
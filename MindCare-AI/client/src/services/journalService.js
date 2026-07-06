import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/journals`;

const getToken = () => {
  return localStorage.getItem("token");
};

export const createJournal = (data) => {
  return axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const getJournals = () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const updateJournal = (id, data) => {
  return axios.put(`${API}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const deleteJournal = (id) => {
  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

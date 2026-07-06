import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/profile`;

const getToken = () => localStorage.getItem("token");

export const getProfile = () => {
  return axios.get(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const updateProfile = (data) => {
  return axios.put(API, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const deleteAccount = () => {
  return axios.delete(
    `${API}/delete-account`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
};

export const changePassword = (data) => {
  return axios.put(
    `${API}/change-password`,
    data,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
};
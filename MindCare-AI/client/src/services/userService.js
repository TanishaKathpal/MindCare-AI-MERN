import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/auth`;

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.user;
};
import axios from "axios";
const API = `${import.meta.env.VITE_API_URL}/analytics`;
const getToken = () => localStorage.getItem("token");

export const getDashboardAnalytics = () => {

    return axios.get(`${API}/dashboard`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    });

};
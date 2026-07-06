import axios from "axios";

const API = "http://localhost:5000/api/analytics";

const getToken = () => localStorage.getItem("token");

export const getDashboardAnalytics = () => {

    return axios.get(`${API}/dashboard`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    });

};
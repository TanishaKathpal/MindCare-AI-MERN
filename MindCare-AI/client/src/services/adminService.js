
import axios from "axios";
const API = `${import.meta.env.VITE_API_URL}/admin`;



const getToken = () => localStorage.getItem("token");

export const getAdminDashboard = () => {
    return axios.get(`${API}/dashboard`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
};

export const getUsers = () => {
    return axios.get(`${API}/users`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
};
export const deleteUser = (id) => {

    return axios.delete(`${API}/users/${id}`, {

        headers: {
            Authorization: `Bearer ${getToken()}`
        }

    });

};

export const updateUserRole = (id, role) => {

    return axios.patch(
        `${API}/users/${id}/role`,
        { role },
        {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        }
    );

};
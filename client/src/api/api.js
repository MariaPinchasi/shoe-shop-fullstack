import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const URL = `${BASE_URL}/api/v1`;
const API = axios.create({
    URL,
    withCredentials: true
});

export const getAllShoes = async () => {
    const res = await API.get(`${URL}/shoes`);
    return res.data.data;
}

export const getShoe = async (shoeId) => {
    const res = await API.get(`${URL}/shoes/${shoeId}`);
    return res.data.data;
}

export const updateShoe = async (shoe, shoeId) => {
    await API.put(`${URL}/shoes/${shoeId}`, shoe);
}

export const createShoe = async (shoe) => {
    await API.post(`${URL}/shoes`, shoe);
}

export const deleteShoe = async (shoeId) => {
    await API.delete(`${URL}/shoes/${shoeId}`);
}

export const registerUser = async (userData) => {
    const res = await API.post(`${URL}/auth/register`, userData);
    return res.data.user;

}

export const loginUser = async (email, password) => {
    const res = await API.post(`${URL}/auth/login`, { email, password });
    return res.data.user;

}

export const logoutUser = async () => {
    await API.put(`${URL}/auth/logout`);
}

export const getUser = async () => {
    const res = await API.get(`${URL}/auth/currentUser`);
    return res.data.data;

}

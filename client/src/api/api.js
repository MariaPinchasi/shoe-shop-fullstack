import axios from "axios";
import { handleError, showToast } from "../utils";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const URL = `${BASE_URL}/api/v1/shoes`;


export const getAllShoes = async () => {
    try {
        const res = await axios.get(URL);
        return res.data.data;
    } catch (err) {
        handleError(err, 'Error while getting the shoes');
    }
}

export const getShoe = async (shoeId) => {
    try {
        const res = await axios.get(
            `${URL}/${shoeId}`
        );
        return res.data.data;
    } catch (err) {
        handleError(err, `Error while getting the shoe with id ${shoeId}`);
    }
}

export const updateShoe = async (shoe, shoeId) => {
    try {
        await axios.put(`${URL}/${shoeId}`, shoe);
        showToast('Shoe successfully updated');
    } catch (err) {
        handleError(err, "Error while updating the shoe");
    }
}

export const createShoe = async (shoe) => {
    try {
        await axios.post(`${URL}`, shoe);
        showToast('Shoe successfully added');
    } catch (err) {
        handleError(err, "Error while adding the shoe");
    }
}

export const deleteShoe = async (shoeId) => {
    try {
        await axios.delete(`${URL}/${shoeId}`);
        showToast('Shoe successfully deleted');
    } catch (err) {
        handleError(err, "Error while deleting the shoe");
    }
}

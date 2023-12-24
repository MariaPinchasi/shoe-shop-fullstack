import { createContext, useEffect, useState } from "react";
import { createShoe, deleteShoe, getAllShoes, getShoe, updateShoe } from "../api/api.js"
import { handleError, showToast } from "../utils/index.js";
export const AppShoesContext = createContext();

export const AppShoesProvider = ({ children }) => {

    const [shoes, setShoes] = useState([]);
    const [shoe, setShoe] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchShoes = async () => {
        try {
            const shoesData = await getAllShoes();
            setShoes(shoesData);
            setIsLoading(false);
        } catch (err) {
            handleError(err, 'Error while getting the shoes');
        }
    }

    useEffect(() => {
        fetchShoes();
    }, []);

    const fetchShoe = async (shoeId) => {
        try {
            const shoeData = await getShoe(shoeId);
            setShoe(shoeData);
        } catch (err) {
            handleError(err, `Error while getting the shoe with id ${shoeId}`);
        }
    }

    const handleShoeEdit = async (shoe, shoeId) => {
        try {
            await updateShoe(shoe, shoeId);
            showToast('Shoe successfully updated');
            fetchShoes();
        } catch (err) {
            handleError(err, "Error while updating the shoe");
        }
    };
    const handleShoeDeletion = async (shoeId) => {
        try {
            await deleteShoe(shoeId);
            showToast('Shoe successfully deleted');
            fetchShoes();
        } catch (err) {
            handleError(err, "Error while deleting the shoe");
        }
    };
    const handleShoeAddition = async (shoe) => {
        try {
            await createShoe(shoe);
            showToast('Shoe successfully added');
            fetchShoes();
        } catch (err) {
            handleError(err, "Error while adding the shoe");
        }
    };

    return (
        <AppShoesContext.Provider
            value={{
                isLoading,
                shoes,
                shoe,
                setShoe,
                fetchShoes,
                getShoe,
                fetchShoe,
                handleShoeAddition,
                handleShoeDeletion,
                handleShoeEdit
            }}>
            {children}
        </AppShoesContext.Provider>
    )
}
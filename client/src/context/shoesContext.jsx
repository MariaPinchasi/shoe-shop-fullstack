import { createContext, useEffect, useState } from "react";
import { createShoe, deleteShoe, getAllShoes, getShoe, updateShoe } from "../api/api.js"
import { handleError } from "../utils/index.js";
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
        await updateShoe(shoe, shoeId);
        fetchShoes();
    };
    const handleShoeDeletion = async (shoeId) => {
        await deleteShoe(shoeId);
        fetchShoes();

    };
    const handleShoeAddition = async (shoe) => {
        await createShoe(shoe);
        fetchShoes();
    };

    return (
        <AppShoesContext.Provider
            value={{
                isLoading,
                shoes,
                shoe,
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
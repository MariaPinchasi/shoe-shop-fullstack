import { useContext } from "react";
import { AppShoesContext } from '../context/shoesContext.jsx'
export const useGlobalShoesContext = () => {
    return useContext(AppShoesContext);
}
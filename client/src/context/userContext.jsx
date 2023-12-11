import { createContext, useState } from "react";

export const AppUserContext = createContext();

const userFromLocalStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

export const AppUserProvider = ({ children }) => {
    const [user, setUser] = useState(userFromLocalStorage);

    const login = (formData) => {
        let isAdmin = false;
        if (formData.name === 'admin') {
            isAdmin = true;
        }
        const userData = { name: formData.name, isAdmin };
        localStorage.setItem('userData', JSON.stringify(userData))
        setUser(userData);
    }

    const logout = () => {
        localStorage.removeItem('userData')
        setUser(null)
    }

    return (
        <AppUserContext.Provider
            value={{
                user,
                login,
                logout,
            }}>
            {children}
        </AppUserContext.Provider>
    );
}
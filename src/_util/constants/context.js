'use client'
import {createContext, useContext, useState, useEffect } from 'react';
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(true);
    const [isMenu, setIsMenu] = useState(false);
    const [id, setId] = useState(2);
    const [formIndex, setFormIndex] = useState(1);
    return (
        <GlobalContext.Provider value={{isLogged,user,formIndex,setFormIndex,isMenu,setIsMenu,id,setId}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;
import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const UserContext = createContext();

const INITIAL_VALUE = {
    id: 0,
    userName: "",
    isLoggedIn: false,
    role: "",
}

const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(INITIAL_VALUE);
    const [user, setUser] = useLocalStorage("user", null);
    useEffect(() => { setUser(loggedInUser); },
        [loggedInUser, setUser]);

    const logoutUser = () => {
        setUser(null);
        setLoggedInUser(INITIAL_VALUE);
    };
    return (
        <UserContext.Provider
            value={{
                loggedInUser,
                setLoggedInUser,
                logoutUser,
                user
            }}
        >
            {children}
        </UserContext.Provider>

    )
}

export { UserContext, UserProvider }
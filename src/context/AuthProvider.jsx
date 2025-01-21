import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: [] });  // ✅ Ensure employees always exists

    useEffect(() => {
        setLocalStorage();
        const localData = getLocalStorage();
        if (localData && Array.isArray(localData.employees)) {
            setUserData({ employees: localData.employees });
        } else {
            setUserData({ employees: [] });  // ✅ Fallback to empty array
        }
    }, []);

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

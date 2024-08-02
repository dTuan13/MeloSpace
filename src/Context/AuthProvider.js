import React, { useState, createContext } from 'react'
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState()
    const AuthValue = {
        auth,
        setAuth
    }
    return (
        <AuthContext.Provider value={AuthValue}>
            {children}
        </AuthContext.Provider>
    )
}
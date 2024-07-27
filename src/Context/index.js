import React from 'react';
import { AuthProvider, AuthContext } from './AuthProvider'

export const Contexts = {
    AuthContext
}

const Providers = ({children}) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
   
}
export default Providers
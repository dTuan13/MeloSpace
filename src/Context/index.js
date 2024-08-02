import React from 'react';
import { AuthProvider, AuthContext } from './AuthProvider'
import { SongContext, SongProvider } from './SongProvider';
import { PlaylistProvider, PlaylistContext } from './PlaylistProvider';

export const Contexts = {
    AuthContext,
    SongContext,
    PlaylistContext
}

const Providers = ({children}) => {
    return(
        <AuthProvider>
            <SongProvider>
                <PlaylistProvider>
                    {children}
                </PlaylistProvider>
            </SongProvider>
        </AuthProvider>
    )
   
}
export default Providers
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
            <PlaylistProvider>
                        {children}
            </PlaylistProvider>
    )
   
}
export default Providers
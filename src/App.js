import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from './Components/Auth';
import AppRoutes from './Routes/AppRoutes';
import AddPlaylist from './Components/AddPlaylist/AddPlaylist';
import AddAlbum from './Components/AddAlbum/AddAlbum';
function App() {
    return (
        <div className="App">
            <GoogleOAuthProvider clientId="184797883583-a5f3khiol3btdqdvnbd225cic0h8m8i1.apps.googleusercontent.com">
                <AppRoutes />
            </GoogleOAuthProvider>
            <AddPlaylist />
            <AddAlbum />
        </div>
    );
}

export default App;

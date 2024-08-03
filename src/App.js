import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from './Components/Auth';
import AppRoutes from './Routes/AppRoutes'
function App() {
    return (
        <div className="App">
            <GoogleOAuthProvider clientId="184797883583-a5f3khiol3btdqdvnbd225cic0h8m8i1.apps.googleusercontent.com">
                <AppRoutes />
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
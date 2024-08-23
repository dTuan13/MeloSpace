import { useContext, useEffect, useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context';
export default function Auth({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    let navigate = useNavigate();
    const getContext = useContext(GlobalContext);

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            try {
                var loginDetails = await getUserInfo(codeResponse);
                localStorage.setItem('access_token', loginDetails.access_token);
                const decode = (token) =>
                    decodeURIComponent(
                        atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
                            .split('')
                            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
                            .join(''),
                    );
                const userInfo = JSON.parse(decode(loginDetails.access_token));

                console.log(userInfo.payload)
                localStorage.setItem('userID', userInfo.payload.guid);
                localStorage.setItem('avatar', userInfo.payload.avatar);
                localStorage.setItem('fullName', userInfo.payload.fullname);
                localStorage.setItem('userName','');
                navigate('/');
                
            } catch (error) {}
        },
        onError: () => {
            console.log('fail');
        },
    });
    return <div onClick={() => googleLogin()}>{children}</div>;
}

async function getUserInfo(codeResponse) {
    var response = await fetch('http://localhost:5000/google_login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: codeResponse.code }),
    });
    return await response.json();
}

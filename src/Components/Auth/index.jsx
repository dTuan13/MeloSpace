import { useContext, useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context";
export default function Auth({children}) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})
    let navigate = useNavigate()
    const getContext = useContext(GlobalContext)

    const googleLogin = useGoogleLogin({
      flow: "auth-code",
      onSuccess: async (codeResponse) => {
        try {
          var loginDetails = await getUserInfo(codeResponse);
          localStorage.setItem('access_token', loginDetails.access_token)
          const userInfo = JSON.parse(atob(loginDetails.access_token.split('.')[1]))
          getContext.setAuth(userInfo)
          navigate('/')
        } catch (error) {
          
        }
       
      },  
      onError: () => {
        console.log('fail')
      }
    });
    return (
      <div onClick={() => googleLogin()}>
        {children}
      </div>
 
    )
    const handleLogout = () => {
      setLoggedIn(false);
      setUser(false);
    };
  }


    async function getUserInfo(codeResponse) {
        var response = await fetch("http://localhost:5000/google_login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: codeResponse.code }),
        });
        return await response.json();
  }
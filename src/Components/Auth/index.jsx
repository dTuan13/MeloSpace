import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Google } from "@mui/icons-material";
export default function Auth() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})

    const googleLogin = useGoogleLogin({
      flow: "auth-code",
      onSuccess: async (codeResponse) => {
        console.log(codeResponse)
        var loginDetails = await getUserInfo(codeResponse);
        console.log(loginDetails.access_token);
      },
    });
  
    const handleLogout = () => {
      setLoggedIn(false);
      setUser(false);
    };
  
    return (
      <>
          <div
            onClick={() => googleLogin()}>
            Login with Google
            <Google />
          </div>
        
      </>
    );
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
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";

const GoogleButton = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authType, setAuthType] = useState(2);
    const [token, setToken] = useState("");
    const navigate = useNavigate()

    return (
        <GoogleOAuthProvider locale="en" clientId="641553983301-n4knggtg5vua9ivtimgjkbubrcrjo7j3.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={async credentialResponse => {

                    const tokenValue = credentialResponse.credential;

                    try {
                        const res = await api.post("Auth/sign-in", { email, password, token : tokenValue, authType });
                        console.log(res);
                        if (res.data.success === true) {
                            localStorage.setItem("accessToken", res.data.accessToken)
                            localStorage.setItem("refreshToken", res.data.refreshToken)

                            navigate("/profile")
                        }
                    } catch (err) {
                        console.log(err.response?.data);
                    }
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleButton;
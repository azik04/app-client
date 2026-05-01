import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "./components/GoogleButton/GoogleButton";
import Input from "../../components/Input/Input";
import api from "../../services/api";
import PrimaryButton from "../../components/Button/PrimaryButton/PrimaryButton";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [token, setToken] = useState("")
    const [authType, setAuthType] = useState(1);
    const navigate = useNavigate();

    const post = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("Auth/sign-in", { email, password, token, authType })
            if (res.data.success === true) {
                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("refreshToken", res.data.refreshToken)

                navigate("/profile")
            }
        } catch (err) {
            setErrors(err.response.data?.errors)
        }
    }

    return (
        <form className="auth__form" onSubmit={post}>
            <div className="row">

                <Input col="col-12" labelFor="email" label="Email" id="email" type="text" onChange={e => setEmail(e.target.value)} name="email" placeholder="Enter your email" error={errors.Email?.[0]} />

                <Input col="col-12" labelFor="password" label="Password" id="password" type="password" onChange={e => setPassword(e.target.value)} name="password" placeholder="Enter your password" error={errors.Password?.[0]} />

                <div class="d-flex align-items-center justify-content-between mb-3">
                    <a href="auth/forgot-password" class="small">Forgot Password ?</a>
                    <a href="auth/sign-up" class="small">Dont have an account ?</a>
                </div>

            </div>

            <PrimaryButton />

            <GoogleButton />
        </form>
    )
}

export default SignIn;
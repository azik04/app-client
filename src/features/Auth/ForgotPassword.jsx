import { useNavigate } from "react-router-dom"
import { useState } from "react";
import api from "../../services/api";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/Button/PrimaryButton/PrimaryButton";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({})
    const [emailTypes, setEmailTypes] = useState(1)

    const post = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post("Account/send-mail", { email, emailTypes })
            if (res.data.success === true) {
                navigate(`/auth/check-mail?email=${email}&type=2`)
            }
        } catch (err) {
            setErrors(err.response.data?.errors)
        }

    }

    return (
        <form className="auth__form" onSubmit={post}>
            <div className="row">

                <Input col="col-12" labelFor="email" label="Email" id="email" type="text" onChange={e => setEmail(e.target.value)} name="email" placeholder="Enter your email" error={errors.email?.[0]} />

                <div class="d-flex align-items-center justify-content-between mb-3">
                    {/* <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label class="form-check-label small" for="flexCheckDefault">Default checkbox</label>
                                </div> */}
                    <a href="/auth" class="small">Already have an account ?</a>
                    <a href="sign-up" class="small">Dont have an account ?</a>
                </div>
            </div>

            <PrimaryButton />
        </form>
    )
}

export default ForgotPassword;
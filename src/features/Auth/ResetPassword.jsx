import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import PrimaryButton from "../../components/Button/PrimaryButton/PrimaryButton";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [errors, setErrors] = useState({})

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const userId = params.get("userId")
    const token = params.get("token");

    const checkParams = () => {
        if (token === null || userId === null) {
            navigate("/auth")
        }
    }

    useEffect(() => {
        checkParams()
    }, [])

    const put = async (e) => {
        e.preventDefault()

        try {
            const res = await api.put("Account/reset-password", { userId, token, newPassword, confirmNewPassword })

            if (res.data.success === true) {
                navigate("/auth")
            }
        } catch (err) {
            setErrors(err.response.data?.errors)
        }
    }

    return (
        <form className="auth__form" onSubmit={put}>
            <div className="row">

                <Input col="col-12" labelFor="newPassword" label="New Password" id="newPassword" type="password" onChange={e => setNewPassword(e.target.value)} name="newPassword" placeholder="Enter your new password" error={errors.NewPassword?.[0]} />

                <Input col="col-12" labelFor="confirmNewPassword" label="Confirm New Password" id="confirmNewPassword" type="password" onChange={e => setConfirmNewPassword(e.target.value)} name="confirmNewPassword" placeholder="Enter your new password again" error={errors.ConfirmNewPassword?.[0]} />

                <div class="d-flex align-items-center justify-content-between mb-3">
                    {/* <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label class="form-check-label small" for="flexCheckDefault">Default checkbox</label>
                                </div> */}
                    <a href="sign-up" class="small">Dont have an account?</a>
                </div>
            </div>

            <PrimaryButton />
        </form>
    )
}

export default ResetPassword;
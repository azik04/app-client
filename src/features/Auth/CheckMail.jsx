import { useLocation, useNavigate } from "react-router-dom";
import letter from "../../images/email.png"
import api from "../../services/api";
import "./style.css"
import { useEffect } from "react";

const CheckMail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get("email")
    const emailTypes = Number(params.get("type"))

    useEffect(() => {
        if (!email || !emailTypes) {
            navigate("/auth");
            return;
        }
    }, [email, emailTypes])

    const post = async () => {
        try {
            const res = await api.post("Account/send-mail", { email, emailTypes })
            if (res.data.success === true) {
                console.log("Email resent");
            } else {
                navigate("/auth");
            }
        } catch (error) {
            console.log(error)
            navigate("/auth")
        }
    }

    return (
        <div className='asset'>
            <div class="asset-container">
                <img src={letter} className="asset-container__image mb-3" alt="confirm-email" />
                <p className="fs-2 fw-semibold mb-3">Check your email</p>
                <p className="fs-5 mb-3">We are sending a confirmation email</p>

                <div className="d-flex justify-content-center gap-2">
                    <a href="mailto:" className="btn btn-dark w-50">
                        Open Email
                    </a>

                    <button onClick={post} className="btn btn-dark w-50">
                        Resend Email
                    </button>

                </div>

            </div>
        </div>
    )
}

export default CheckMail;
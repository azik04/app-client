import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import "./style.css"

const ConfirmMail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const userId = params.get("userId")
    const token = params.get("token");


    const put = async () => {
        const res = await api.put("Account/confirm", { userId, token })

        if (res.data.success === false) {
            navigate("/auth")
        }
    }

    useEffect(() => {
        if (!userId || !token) {
            navigate("/auth");
            return;
        }

        put();
    }, [userId, token]);
    
    return (
        <div className='asset'>
            <div class="asset-container">
                <i className="fa-solid fa-circle-check mb-3"></i>

                <p className="fs-2 fw-semibold mb-3">Your email confirmed</p>

                <p className="fs-6 mb-3">The account and subscription have been <br /> successfully created, you can <br /> now log into your account.</p>
                <a href="/auth" class="btn btn-dark w-50">Go to Auth</a>
            </div>
        </div>
    )
}

export default ConfirmMail;
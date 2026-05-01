import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

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
        put()
    }, [])

    return (
        <div class="app-container d-flex">

            <section class="bg-section d-flex align-items-center justify-content-center">
                <div class="bg-white p-4 rounded border text-center">
                    <i
                        className="fa-solid fa-circle-check fa-6x mb-4"
                        style={{
                            color: "rgba(0, 128, 0, 0.5)",
                            display: "block",
                            margin: "0 auto"
                        }}
                    ></i>
                    <p className="fs-2 fw-semibold">Your email confirmed</p>
                    <p className="fs-4">The account and subscription have been <br /> successfully created, you can <br /> now log into your account.</p>
                    <a href="/auth" class="btn btn-lg btn-dark">Go to Auth</a>
                </div>
            </section>

        </div>
    )
}

export default ConfirmMail;
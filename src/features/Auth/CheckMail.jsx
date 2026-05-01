import { useLocation, useNavigate } from "react-router-dom";
import letter from "../../images/email.png"
import api from "../../services/api";

const CheckMail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const post = async () => {
        const params = new URLSearchParams(location.search);
        const email = params.get("email")
        const emailTypes = Number(params.get("type"))

        if (!email) {
            navigate("/auth")
        }

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
        <div class="app-container d-flex">

            <section class="bg-section d-flex align-items-center justify-content-center">
                <div class="bg-white p-4 rounded border text-center">
                    <img src={letter} id="letter-img" className="img-fluid" alt="confirm-email" />
                    <p className="fs-2 fw-semibold">Check your email</p>
                    <p className="fs-4">We are sending a confirmation email</p>

                    <div className="d-flex justify-content-center gap-3">
                        <button onClick={post} class="btn btn-lg btn-secondary">Resent email</button>

                        <a href="mailto:" class="btn btn-lg btn-dark">Go to email</a>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default CheckMail;
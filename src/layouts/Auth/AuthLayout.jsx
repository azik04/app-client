import { Outlet } from "react-router-dom";
import image from "../../images/auth.png";
import "./style.css";


const AuthLayout = () => {
    return (
        <div className="auth">

            <div className="auth__image">
                <img src={image} alt="Authentication" />
            </div>

            <div className="auth__content">
                <div className="auth__box bg-light border rounded d-flex flex-column justify-content-center p-4">

                    <div className="auth__header text-center mb-4">
                        <h2 className="auth__title mb-4">Logo</h2>
                        <span className="auth__subtitle fs-3">Welcome to my app!</span>
                    </div>

                    <Outlet />

                </div>
            </div>

        </div>

    )
}

export default AuthLayout;
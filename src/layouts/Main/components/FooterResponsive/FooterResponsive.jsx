import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const FooterResponsive = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <footer className="bg-footer__responsive d-block d-md-none">
            <ul className="nav justify-content-between">
                <li onClick={() => navigate("/")}>
                    <span className={`footer-link nav-link ${ location.pathname === "/" ? "active" : ""}`}>Profile</span>
                </li>

                <li onClick={() => navigate("/job")}>
                    <span className={`footer-link nav-link ${ location.pathname === "/job" ? "active" : "" }`}>Requests</span>
                </li>

                <li onClick={() => navigate("/test")}>
                    <span className={`footer-link nav-link ${ location.pathname === "/test" ? "active" : "" }`}>Workers</span>
                </li>

                <li onClick={() => navigate("/logout")}>
                    <span className="footer-link nav-link">Sign out</span>
                </li>
            </ul>
        </footer>
    );
};

export default FooterResponsive;
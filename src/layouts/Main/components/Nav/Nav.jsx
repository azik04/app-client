import { useNavigate } from "react-router-dom"
import "./style.css"
import { getDecodedToken } from "../../../../services/JwtService"

const Nav = () => {
    const navigate = useNavigate()
    const decodedToken = getDecodedToken();
    return (
        <nav className="bg-nav navbar">
            <div className="d-block d-md-none">
                <button className="secondary-button btn"><i className="fa-solid fa-bars"></i></button>
            </div>
            <div className="nav-profile d-flex gap-2">
                <span className="text-muted">{decodedToken.ClientName}</span>
                <div className="nav-profile__image" onClick={() => navigate("/")}>
                    <img src={`http://localhost:5221${decodedToken.FilePath}`} className="circle-photo" alt="Profile"></img>
                </div>

            </div>

        </nav>
    )
}

export default Nav;
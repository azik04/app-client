import { useNavigate } from "react-router-dom"
import "./style.css"
import { getDecodedToken } from "../../../../services/JwtService"

const Nav = () => {
    const navigate = useNavigate()
    const decodedToken = getDecodedToken();

    return (
        <nav className="bg-nav navbar">

            <div className="d-block d-md-none">
                <button className="secondary-button btn">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            <div className="nav-profile d-flex gap-2">

                <span className="text-muted">
                    {decodedToken?.ClientName ?? "User"}
                </span>

                <div 
                    className="nav-profile__image" 
                    onClick={() => navigate("/")}
                >
                    <img 
                        src={
                            decodedToken?.FilePath 
                            ? `http://10.200.17.141:5221${decodedToken.FilePath}`
                            : "/default-user.png"
                        }
                        className="circle-photo"
                        alt="Profile"
                    />
                </div>

            </div>

        </nav>
    )
}

export default Nav;
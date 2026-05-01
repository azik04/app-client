import { useNavigate } from "react-router-dom"
import profile from "../../../../images/profile.webp"
import "./style.css"

const Nav = () => {
    const navigate = useNavigate()
    
    return (
        <nav className="bg-nav navbar">
            <div className="d-block d-md-none">
                <button className="secondary-button btn"><i className="fa-solid fa-bars"></i></button>
            </div>
            <div className="nav-profile d-flex gap-3">
                <a href="profile">
                    <img src={profile} className="circle-photo" alt="Profile"></img>
                </a>
                <span className="text-muted">Hacibalayev Əvəz</span>
            </div>

        </nav>
    )
}

export default Nav;
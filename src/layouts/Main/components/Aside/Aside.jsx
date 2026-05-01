import { useState } from "react";
import api from "../../../../services/api"
import "./style.css"
import { NavLink, useNavigate } from "react-router-dom";
import { getUserRole } from "../../../../services/JwtService";

const Aside = () => {
    const [active, setActive] = useState()

    const navigate = useNavigate();
    const userRole = getUserRole();
    const signOut = async () => {
        const refreshToken = localStorage.getItem("refreshToken")
        try {
            const res = await api.put("Auth/sign-out", { refreshToken })
            if (res.data.success) {
                navigate("auth")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const toggle = (id) => {
        setActive(id)
    }

    return (
        <aside className="bg-sidebar d-none d-md-flex flex-column">
            <div className="sidebar-logo text-center mb-3">LOGO</div>

            <ul className="sidebar-menu nav">
                <li><NavLink to="." end className={`sidebar-link nav-link `}>Profile</NavLink></li>
                <li><NavLink to="requests" end className={`sidebar-link nav-link `}>Requests</NavLink></li>
                <li><NavLink to="workers" end className={`sidebar-link nav-link `}>Workers</NavLink></li>
                
                {/* {userRole === "Admin" && (
                    <> */}
                        <li><NavLink to="admin" end className="sidebar-link nav-link">Admin</NavLink></li>
                        <li><NavLink to="admin/statistics" end className="sidebar-link nav-link">Statistics</NavLink></li>
                    {/* </>
                )} */}

                <li><button onClick={signOut} className="sidebar-link nav-link w-100 text-start">Sign out</button></li>
            </ul>
        </aside>
    )
}

export default Aside;
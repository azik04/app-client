import { Outlet } from "react-router-dom";
import Aside from "./components/Aside/Aside";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import FooterResponsive from "./components/FooterResponsive/FooterResponsive";
import "./style.css"

const MainLayout = () => {
    return (
        <>
            <Aside />

            <seaction className="main">
                <Nav />

                <main className="section">
                    <Outlet />
                </main>

                <Footer />
            </seaction>
    
            <FooterResponsive />
        </>
    )
}

export default MainLayout;
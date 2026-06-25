import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const HomeLayout = () => {
    return (
        <div className="home">
            <Nav />

            <Outlet />

            <Footer />
        </div>
    )
}

export default HomeLayout;
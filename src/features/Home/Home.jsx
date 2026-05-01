import ContactUs from "./components/ContactUs/ContactUs"
import Header from "./components/Helper/Header"
import Info from "./components/Info/Info"
import Stats from "./components/Stats/Stats"
import Users from "./components/Users/Users"

const Home = () => {
    return (
        <>
            <Header />
            <Info/>
            <Stats/>
            <Users/>
            <ContactUs/>
        </>
    )
}

export default Home
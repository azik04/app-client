import { getUserId } from "../../services/jwtService";
import api from "../../services/api";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import AddressList from "./components/AddressList/AddressList";

const Profile = () => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        const clientId = getUserId()

        try {
            const res = await api.get(`Account/id/${clientId}`)
            setData(res.data.data)
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container">
            <Card data={data} fetchData={fetchData} />

            <AddressList/>
        </div>
        
    )
}

export default Profile;
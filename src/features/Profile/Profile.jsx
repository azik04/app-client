import { getWorkerId, getClientId, getUserRole } from "../../services/jwtService";
import api from "../../services/api";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import AddressList from "./components/AddressList/AddressList";
import History from "./components/History/History";
import { useParams } from "react-router-dom";

const Profile = () => {
    const [data, setData] = useState({});

    const fetchData = async () => {
        const role = getUserRole();

        try {
            if (role === "Client") {
                const clientId = getClientId()
                const res = await api.get(`Client/id/${clientId}`);
                setData(res.data.data);
            }
            else if (role === "Worker") {
                const workerId = getWorkerId()
                const res = await api.get(`Worker/id/${workerId}`);

                setData(res.data.data);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container">
            <Card data={data} fetchData={fetchData} />

            <AddressList />

            <History />
        </div>

    )
}

export default Profile;
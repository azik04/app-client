import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import api from "../../services/api";

const Job = () => {
    const [data, setData] = useState([]);
    const [serviceId, setServiceId] = useState(null)

    const fetchData = async () => {
        try {
            const res = await api.get("Job/service/1");
            setData(res.data.data)
        }catch(error){
            console.warn(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container">
            <Filter setServiceId={setServiceId} />

            <Card data={data} />
        </div>
    )
}

export default Job;
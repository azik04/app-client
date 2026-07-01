import { useParams } from "react-router-dom";
import Map from "../../components/MapContainer/Map/Map";
import api from "../../services/api";
import Info from "./components/Info/Info";
import { useEffect, useState } from "react";
import History from "./components/History/History";
import ActionButton from "./components/JobHeader/JobHeader";
import MapReader from "./components/MapReader/MapReader";
import JobHeader from "./components/JobHeader/JobHeader"
import "./style.css"

const JobInfo = () => {
    const { jobId } = useParams();
    const [data, setData] = useState({});
    const [location, setLocation] = useState({
        lat: data.lat,
        lng: data.lng
    })

    const fetchData = async () => {
        const res = await api.get(`Job/id/${jobId}`)
        setData(res.data.data)
    }

    useEffect(() => {
        if (data.lat && data.lng) {
            setLocation({
                lat: data.lat,
                lng: data.lng
            });
        }
    }, [data]);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container">
            
            <JobHeader fetchData={fetchData} name={data.name} status={data.status}/>

            <Info data={data} workerJob={data.workerJob} />


            <div className="row g-3">

                <MapReader location={location} />

                <History workerJobHistory={data.workerJobHistory} />

            </div>

        </div>
    )
}

export default JobInfo;
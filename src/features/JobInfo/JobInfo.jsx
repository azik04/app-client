import { useParams } from "react-router-dom";
import Map from "../../components/MapContainer/Map/Map";
import api from "../../services/api";
import Info from "./components/Info";
import { useState } from "react";

const JobInfo = () => {
    const {jobId} = useParams();
    const [data, setData] = useState({});

    const fetchData = async() => {
        const res = await api.get(`Job/id/${jobId}`)
        fetchData(res.data.data)
    }

    return (
        <div className="container">
            <Info data={data} />

            <div className="row g-4">

                <div className="col-12 col-md-6">
                    <div className="p-3 text-center bg-white rounded border">
                        <h4 className="mb-3">Map</h4>
                        <Map />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="p-3 text-center bg-white rounded border">
                        <h4 className="mb-3">History</h4>

                        <div className="bg-light p-2 border rounded">
                            <p className="mb-2">14:44 receved by Azik Hacibalayev</p>
                            <p className="mb-2">14:54 canceled by Azik Hacibalayev</p>
                            <p className="mb-2">14:54 canceled by Azik Hacibalayev</p>
                            <p className="mb-2">14:54 canceled by Azik Hacibalayev</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JobInfo;
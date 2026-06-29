import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import api from "../../services/api";
import PrimaryPop from "../../components/Pop/PrimaryPop/PrimaryPop";
import JobForm from "./components/JobForm/JobForm";
import { getUserId } from "../../services/JwtService";

const Job = () => {
    const [data, setData] = useState([]);
    const [serviceId, setServiceId] = useState(null)
    const [createJob, setCreateJob] = useState(false);
    const [request, setRequest] = useState(1);
    const [serviceName, setServiceName] = useState()

    const fetchData = async () => {
        try {
            let link;

            if (request === 1) {
                if (serviceId === null) {
                    link = "Job/service";
                } else {
                    link = `Job/service?serviceId=${serviceId}`;
                }
            }

            else if (request === 2) {
                const appId = getUserId();
                if (serviceId === null) {
                    link = `Job/appId/${appId}?jobStatus=2`;
                } else {
                    link = `Job/appId/${appId}?serviceId=${serviceId}&jobStatus=2`;
                }
            }
            else {
                return;
            }

            const res = await api.get(link);
            setData(res.data.data);
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [request, serviceId])

    return (
        <div className="container">
            <Filter setServiceId={setServiceId} />

            <div className="d-flex align-items-center justify-content-between w-100 mb-4">

                <button onClick={() => setCreateJob(true)} className="btn btn-dark">Create job</button>

                <div className="d-flex gap-3">
                    <button className="btn" onClick={() => setRequest(1)}>Active jobs</button>
                    <button className="btn" onClick={() => setRequest(2)}>My Jobs</button>
                </div>

                <button onClick={() => setCreateJob(true)} className="btn btn-dark">Create job</button>

            </div>


            <Card data={data} />

            {createJob &&
                <PrimaryPop onClose={() => setCreateJob(false)} header={"Create job"}>
                    <JobForm onClose={() => setCreateJob(false)} />
                </PrimaryPop>
            }
        </div>
    )
}

export default Job;
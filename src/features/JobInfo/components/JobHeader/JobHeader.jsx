import { data, useParams } from "react-router-dom";
import api from "../../../../services/api";
import { getUserRole, getWorkerId } from "../../../../services/JwtService";
import { useState } from "react";
import "./style.css"

const ActionButton = ({ fetchData, name, status }) => {
    const { jobId } = useParams();
    const [cancel, setCancele] = useState(2);
    const role = getUserRole();

    const sumbit = async (workerJobStatus = null) => {
        const workerId = getWorkerId();

        const res = await api.post("WorkerJob", {
            workerId,
            jobId,
            workerJobStatus
        })

        if (res.data.success === true) {
            fetchData()
        }
    }

    return (
        <div className="job-header">
            <h4 className="job-info__title">{name}</h4>

            {role === "Worker" && (
                <div className="job-actions">
                    {status === "Active" && (
                        <button onClick={() => sumbit()} className="btn">Handle</button>
                    )}
                    {status === "IsHandled" && (
                        <>
                            <button onClick={() => sumbit(4)} className="btn">Submit</button>
                            <button onClick={() => sumbit(2)} className="btn">Cancele</button>
                        </>
                    )}
                </div>
            )}

        </div>

    )
}

export default ActionButton;
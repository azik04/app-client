import { useEffect, useState } from "react"
import "./style.css"

const Info = ({ data, workerJob }) => {
    return (

        <div className="job-info bordered">
            <div className="job-info__gallery">
                <img
                    src={`http://10.200.17.141:5221${data.appFile?.[0]}`}
                    alt=""
                    className="job-info__main-image"
                />
                {data.appFile?.length > 1 && (
                    <div className="job-info__thumbnails">
                        {data.appFile.slice(1).map((item, index) => (
                            <img
                                key={index}
                                src={`http://10.200.17.141:5221${item}`}
                                alt={`job-info-${index}`}
                                className="job-info__thumbnail"
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="job-info__content">

                <div className="job-info__meta">
                    <div className="job-info__item">
                        <span>Client</span>
                        <strong>{data.clientName}</strong>
                    </div>

                    <div className="job-info__item">
                        <span>Service</span>
                        <strong>{data.serviceName}</strong>
                    </div>

                    <div className="job-info__item">
                        <span>Contact</span>
                        <strong>994505157710</strong>
                    </div>

                    <div className="job-info__item">
                        <span>Status</span>
                        <strong>{data.status}</strong>
                    </div>
                </div>

                <div className="job-info__description">
                    {data.description}
                </div>
            </div>
        </div>
    )
}

export default Info;
import { useEffect, useState } from "react"
import "./style.css"
import Image from "../../../../components/Image/Image";

const Info = ({ data, workerJob }) => {
    const [image, setImage] = useState(false);
    const [images, setImages] = useState([]);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        setMainImage(data.appFile?.[0])
        setImages(data.appFile);
    }, [data]);

    return (
        <div className="job">
            <div className="job__gallery">
                <div className="job__main">
                    <img
                        src={`http://10.200.17.141:5221${mainImage}`}
                        alt="Job"
                        onClick={() => setImage(true)}
                    />
                </div>

                {data.appFile?.length > 1 && (
                    <div className="job__thumbs">
                        {data.appFile.map((item, index) => (
                            <div className="job__thumb" key={index}>
                                <img
                                    src={`http://10.200.17.141:5221${item}`}
                                    alt={`Job ${index + 1}`}
                                    onClick={() => setMainImage(item)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="job__body">

                <div className="job__section">
                    <h5 className="job__title">Client Information</h5>

                    <div className="job__row">
                        <div className="job__item">
                            <span className="job__label">Client</span>
                            <strong className="job__value">
                                {data.clientName}
                            </strong>
                        </div>

                        <div className="job__item">
                            <span className="job__label">Service</span>
                            <strong className="job__value">
                                {data.serviceName}
                            </strong>
                        </div>

                        <div className="job__item">
                            <span className="job__label">Contact</span>
                            <strong className="job__value">
                                994505157710
                            </strong>
                        </div>

                        <div className="job__item">
                            <span className="job__label">Status</span>
                            <strong className="job__value">
                                {data.status}
                            </strong>
                        </div>
                    </div>
                </div>

                {data.status !== "Active" && data.workerJob && (
                    <div className="job__section">
                        <h5 className="job__title">Worker Information</h5>

                        <div className="job__row">
                            <div className="job__item">
                                <span className="job__label">Worker</span>
                                <strong className="job__value">
                                    {data.workerJob.workerName}
                                </strong>
                            </div>

                            <div className="job__item">
                                <span className="job__label">Handled At</span>
                                <strong className="job__value">
                                    {data.workerJob.createAt}
                                </strong>
                            </div>

                            <div className="job__item">
                                <span className="job__label">Status</span>
                                <strong className="job__value">
                                    {data.workerJob.status}
                                </strong>
                            </div>
                        </div>
                    </div>
                )}

                <div className="job__description">
                    {data.description}
                </div>
            </div>

            {image && (
                <Image
                    image={mainImage}
                    onClose={() => setImage(false)}
                />
            )}
        </div>
    );
}

export default Info;
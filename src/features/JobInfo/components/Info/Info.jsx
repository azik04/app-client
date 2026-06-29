import { useEffect, useState } from "react"
import "./style.css"
import Image from "../../../../components/Image/Image";

const Info = ({ data, workerJob }) => {
    const [image, setImage] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(data.appFile);
    }, [data]);

    console.log(images);
    return (

        <div className="job-info bordered">
            <div className="job-info__gallery">
                <img onClick={() => { setImage(true); setImageUrl(data.appFile?.[0]); }} src={`http://10.200.17.141:5221${data.appFile?.[0]}`} alt="main-photo" className="job-info__main-image" />

                {data.appFile?.length > 1 && (
                    <div className="job-info__thumbnails">
                        {data.appFile.slice(1).map((item, index) => (
                            <img key={index} src={`http://10.200.17.141:5221${item}`} alt={`job-info-${index}`} className="job-info__thumbnail"/>
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

            {image && (
                <Image
                    image={imageUrl}
                    onClose={() => setImage(false)}
                />
            )}
        </div>
    )
}

export default Info;
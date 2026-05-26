import "./style.css"
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="row">
            {data.length === 0 ? (
                <div className="col-12">
                    <div className="job-card text-center">
                        <p>Data not found</p>
                    </div>
                </div>
            ) : (
                data.map(item => (
                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={item.id}>
                        <div className="job-card" onClick={() => navigate(`/job/${item.id}`)}>
                            <div className="job-card__image mb-3">
                                <img src={`http://localhost:5221${item.filePath}`} alt="Job-Image" />
                            </div>

                            <p className="fs-5">{item.name}</p>
                            <p>{item.serviceName}</p>
                        </div>
                    </div>
                ))
            )}

        </div>
    );
}

export default Card;
import NoData from "../../../../components/NoData/NoData";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="row">
            {data.length === 0 ? (
                <NoData/>
            ) : (
                data.map(item => (
                    <div className="col-6 col-md-4 col-lg-3 p-2" key={item.id}>
                        <div className="job-card" onClick={() => navigate(`/job/${item.id}`)}>
                            <div className="job-card__image">
                                <img src={`http://10.200.17.141:5221${item.appFile}`} alt="Job-Image" />
                            </div>
                            <div className="job-card__data">
                                <p className="fs-5">{item.name}</p>
                                <p>{item.serviceName}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}

        </div>
    );
}

export default Card;
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { getUserId } from "../../../../services/JwtService";

const History = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const appId = getUserId();

    const fetchData = async() => {
        const res = await api.get(`Job/appId/${appId}?jobStatus=3`);
        setData(res.data.data)
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className="address-list">

            <div className="address-list__header">
                <h3 className="address-list__title">History</h3>
            </div>

            <ul className="address-list__list">
                {data.length === 0 ? (
                    <li className="address-list__item">
                        <div className="address-list__card">
                            <div className="address-list__row">
                                <span className="address-list__text fs-6">
                                    No addresses available
                                </span>
                            </div>
                        </div>
                    </li>
                ) : (
                    data.map(item => (
                        <li key={item.id} className="address-list__item">

                            <div className="address-list__card">

                                <div className="address-list__row">
                                    <span className="address-list__text fs-6">
                                        {item.name}
                                    </span>

                                    <button className="address-list__toggle btn btn-sm" onClick={() => navigate(`/job/${item.id}`)}>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>

                            </div>

                        </li>
                    ))
                )}
            </ul>

        </div>
    )
}

export default History;
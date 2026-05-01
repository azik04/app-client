import PrimaryPop from "../../../../components/Pop/PrimaryPop/PrimaryPop";
import { getUserRole } from "../../../../services/JwtService";
import UpdateUser from "../UserForm/UserForm";
import "./style.css"
import { useState } from "react";

const Card = ({ data, fetchData }) => {
    const [updateUser, setUpdateUser] = useState(false)
    const userRole = getUserRole()

    return (
        <>
            <div className="profile-card">
                <button className="btn btn-white profile-edit" type="button" onClick={() => setUpdateUser(true)}><i className="fa-solid fa-pen"></i></button>

                <div className="profile-header">
                    <img src={`http://localhost:5221${data.filePath}`} alt="Profile-img" className="profile-avatar" />

                    <ul className="profile-main">
                        <li>Ad: <b>{data.name} {data.surname}</b></li>
                        <li>Əlaqə nömrəsi: <b>{data.phoneNumber}</b></li>
                        <li>Active Address: <b>{data.address || "Select the address in address Line"}</b></li>
                        <li>Fin: <b>7HPP313</b></li>

                        {userRole === "Worker" && (
                            <>
                                <li>Fin: <b>{data.pin}</b></li>
                                <li><b>{data.jobCount || 0}</b> Jobs</li>
                                <li><b>{data.reviewCount || 0}</b> Reviews</li>
                                <li className="profile-tags">
                                    <span>Plumbing</span>
                                    <span>Electrical</span>
                                    <span>Painting</span>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            {updateUser && (
                <PrimaryPop header="Create Address" onClose={() => setCreateAddress(false)}>
                    <UpdateUser onClose={() => setUpdateUser(false)} fetchData={fetchData} />
                </PrimaryPop>
            )}
        </>
    )
}

export default Card;
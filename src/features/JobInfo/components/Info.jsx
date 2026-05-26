import Photo from "../../../images/auth.png"
import "./style.css"

const Info = ({ data }) => {
    return (
        <div className="job-card">
            <button className="btn btn-white profile-edit" type="button" ><i className="fa-solid fa-pen"></i></button>

            <div className="job-header">
                <img src={Photo} alt="job-img" className="job-avatar" />

                <ul className="job-main">
                    <li>Ad: <b>Test</b></li>
                    <li>Əlaqə nömrəsi: <b>Test</b></li>
                    <li>Active Address: <b>Test</b></li>
                    <li>Fin: <b>7HPP313</b></li>
                </ul>
            </div>
        </div>
    )
}

export default Info;
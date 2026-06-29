import "./style.css";

const Image = ({ image, onClose }) => {
    return (
        <div className="primary-pop">
            <div className="image__container">
                <div className="primary-pop__header mb-3">
                    <h4>Image</h4>

                    <button className="btn-close" onClick={onClose}></button>
                </div>
                <img src={`http://10.200.17.141:5221${image}`} alt="image" />

            </div>
        </div>
    )
}

export default Image;
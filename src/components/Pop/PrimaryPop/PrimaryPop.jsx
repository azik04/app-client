import "./style.css";

const PrimaryPop = ({ header, onClose, children }) => {
    return (
        <div className="primary-pop">
            <div className="primary-pop__container">
                
                <div className="primary-pop__header mb-3">
                    <h4>{header}</h4>
                    <button className="btn-close" onClick={onClose}></button>
                </div>

                <div className="primary-pop__body">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default PrimaryPop;
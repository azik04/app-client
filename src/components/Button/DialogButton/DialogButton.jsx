import "./style.css"

const DialogButton = ({ onClose }) => {
    return(
        <div className="pop-button">
            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Close</button>

            <button className="btn btn-dark" type="submit">Submit</button>
        </div>
    )
}

export default DialogButton
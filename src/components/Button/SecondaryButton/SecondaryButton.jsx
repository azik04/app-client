import "./style.css"

const SecondaryButton = ({setRemovePop}) => {
    return(
        <div className="mini-btn">
            <button type="button" onClick={() => setRemovePop(true)} className="btn btn btn-outline-secondary">Remove</button>

            <button type="submit" className="btn btn-dark">Save</button>
        </div>
    )
}

export default SecondaryButton
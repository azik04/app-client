import "./style.css"

const Success = ({ message }) => {

    return (
        <div className="notify notify_succes shadow">
            <span className="text-success fw-semibold">{message}</span>
        </div>
    )
}

export default Success;
import "./style.css"

const Error = ({ message }) => {
    return (
        <div className="notify notify_error shadow">
            <span className="text-danger fw-semibold">{message}</span>
        </div>
    )
}

export default Error;
const Textarea = ({ col, label, labelFor, type, placeholder, value, onChange, error = null, name, id }) => {
    return (
        <div className={`${col} mb-3`}>
            <label htmlFor={labelFor} className="form-label">{label}</label>
            <textarea type={type} placeholder={placeholder} value={value} id={id} onChange={onChange} name={name} className="form-control form-control-lg mb-1" ></textarea>
            <div className="text-danger small">{error}</div>
        </div>
    )
}

export default Textarea;
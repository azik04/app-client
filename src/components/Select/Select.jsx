const Select = ({ col, label, id, name, value, onChange, options = [], error }) => {
    return (
        <div className={`${col} mb-3`}>

            <label htmlFor={id} className="form-label">{label}</label>

            <select id={id} name={name} value={value} onChange={onChange} className="form-select form-select-lg">
                <option value="" hidden>
                    Select something
                </option>

                {options?.length > 0 ? (
                    options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    ))
                ) : (
                    <option disabled>No items available</option>
                )}
            </select>

            {error && (<div className="text-danger small">{error}</div>)}

        </div >
    );
};

export default Select;
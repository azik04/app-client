const Input = ({
  col,
  label,
  labelFor,
  type,
  placeholder,
  value,
  onChange,
  error = null,
  name,
  id,
  multiple,
}) => {
  return (
    <div className={`${col} mb-3`}>
      <label htmlFor={labelFor} className="form-label">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...(type !== "file" ? { value } : {})}
        id={id}
        multiple={multiple}
        onChange={onChange}
        name={name}
        className="form-control form-control-lg mb-1"
      />

      <div className="text-danger small">{error}</div>
    </div>
  );
};

export default Input;
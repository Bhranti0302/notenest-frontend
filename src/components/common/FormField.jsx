const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = "",
}) => {
  return (
    <div className={`flex w-full flex-col gap-1.5 ${className}`}>
      {/* Field Label */}
      <label
        htmlFor={name}
        className="text-sm sm:text-base font-semibold text-gray-700"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {/* Input Fields */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full rounded-lg bg-white border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {/* Error Message */}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;

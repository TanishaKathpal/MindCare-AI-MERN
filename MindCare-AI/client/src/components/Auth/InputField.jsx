function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
}) {
  return (
    <div className="mb-5">

      {/* Label */}

      <label className="block mb-2 text-sm font-semibold text-slate-700">
        {label}
      </label>

      {/* Input Box */}

      <div
        className={`flex items-center rounded-xl border bg-white px-4 py-3 transition-all duration-300

        ${
          error
            ? "border-red-500"
            : "border-slate-300 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
        }`}
      >
        {Icon && (
          <Icon className="mr-3 text-slate-400 text-lg" />
        )}

        <input
          className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>

      {/* Error */}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
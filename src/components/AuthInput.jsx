function AuthInput ({
    label,
    type,
    name,
    value,
    placeholder,
    onChange,
    error,
    showToggle,
    onToggle,
    showPassword,
}) {
    return (
        <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <div className="relative">
                <input 
                type={showToggle ? (showPassword ? "text" : "password") : type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition duration-300 focus:ring-2 ${
                    error
                    ? "border-red-400 focus:ring-red-200"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                }`}
                />

                {showToggle && (
                    <button
                    type="button"
                    onClick={onToggle}
                    className="absolute right-3 top-3 text-sm text-blue-600 hover:text-blue-800"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                )}
            </div>

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}

export default AuthInput;
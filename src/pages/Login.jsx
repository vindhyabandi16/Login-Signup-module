import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthInput from "../components/AuthInput";
import { validateEmail, validatePassword } from "../utils/validation";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    useEffect(() => {
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        setErrors({
            email: emailError,
            password: passwordError,
        });

        setIsFormValid(!emailError && !passwordError);
    }, [formData.email, formData.password]);

    function handleSubmit(event) {
        event.preventDefault();

        if (!isFormValid) {
            toast.error("Please fix all validation errors");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Login successful!");
            console.log("Login Data:", formData);
        }, 1500);
    }

    return (
        <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-8">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition duration-300 hover:shadow-2xl">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="mt-2 text-sm text-gray-500">
                        Login to continue to your account
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <AuthInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    error={formData.email ? errors.email : ""}
                    />

                    <AuthInput
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    error={formData.password ? errors.password : ""}
                    showToggle={true}
                    showPassword={showPassword}
                    onToggle={() => setShowPassword(!showPassword)}
                    />

                    <div className="mb-5 flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="h-4 w-4"
                            />
                            Remember Me
                        </label>

                        <button
                        type="button"
                        onClick={() => toast.info("Forgot Password UI only")}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            Forgot Password
                        </button>
                    </div>

                    <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className={`w-full rounded-lg py-3 font-semibold text-white transition duration-300 ${
                    isFormValid && !loading
                    ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
                    : "cursor-not-allowed bg-gray-400"
                    }` }
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Do not have an account?{ " "}
                        <Link
                        to="/signup"
                        className="font-semibold text-blue-600 hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                    </div>
                    </main>
    );
}

export default Login;

                   
                    
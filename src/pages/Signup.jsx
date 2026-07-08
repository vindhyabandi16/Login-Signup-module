import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthInput from "../components/AuthInput";
import { validateConfirmPassword, validateEmail, validatePassword, validateFullName } from "../utils/validation";

function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPasswod] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    useEffect(() => {
        const fullNameError = validateFullName(formData.fullName);
        const emailError =  validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);

        setErrors({
            fullName: fullNameError,
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        setIsFormValid(
            !fullNameError &&
            !emailError &&
            !passwordError &&
            !confirmPasswordError 
        );

    }, [
        formData.fullName,
        formData.email,
        formData.password,
        formData.confirmPassword
    ]);

    function handleSubmit(event) {
        event.preventDefault();

        if (!isFormValid) {
            toast.error("Please fix all validation errors");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.success("Account created successfully!");
            console.log("Signup Data:", formData);
        }, 1500)
    }

    return (
        <main className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-8">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition duration-300 hover:shadow-2xl">
           <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="mt-2 text-sm text-gray-500">

            </p>
           </div>

           <form onSubmit={handleSubmit}>
            <AuthInput
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Enter your full name"
            onChange={handleChange}
            error={formData.fullName ? errors.fullName : ""}
            />

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
            placeholder="Create a strong password"
            onChange={handleChange}
            error={formData.password ? errors.password : ""}
            showToggle={true}
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            />

             <AuthInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Re-enter your password"
            onChange={handleChange}
            error={formData.confirmPassword ? errors.confirmPassword : ""}
            showToggle={true}
            showPassword={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            />

            <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`mt-2 w-full rounded-lg py-3 font-semibold text-white transition duration-300 ${
                isFormValid && !loading
                ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
                : "cursor-not-allowed bg-gray-400"
            }`}
            >
                {loading ? "Creating Account..." : "Sign Up"}
            </button>
            
           </form>

           <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
            >
                Login
            </Link>
           </p>
           </div>
        </main>
    );
}

export default Signup;
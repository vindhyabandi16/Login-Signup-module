export function validateEmail(email) {
    if(!email.trim()) {
        return "Email is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return "Please enter a valid email address";
    }

    return "";
}

export function validatePassword(password) {
    if (!password.trim()) {
        return "Password is required";
    }

    if (password.length < 8) {
        return "Password must be atleast 8 characters";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain atleast one uppercase letter";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must contain atleast one lowercase letter";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must contain atleast one number";
    }

    if (!/[!@#$%^&*]/.test(password)) {
        return "Password must contain atleast one special character";
    }

    return "";
}

export function validateRequired(value, fieldName) {
    if (!value.trim()) {
        return `${fieldName} is required`;
    }

    return "";
}

export function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword.trim()) {
        return "Confirm password is required";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match";
    }

    return "";
}
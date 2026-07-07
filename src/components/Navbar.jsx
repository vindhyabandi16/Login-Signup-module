import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <Link to="/login" className="text-xl font-bold text-blue-600">
                   User Portal
                </Link>

                <div className="flex gap-4">
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                        isActive
                        ? "font-semibold text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                        }
                        >
                            Login
                    </NavLink>

                    <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                     isActive
                    ? "font-semibold text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                    }
                    >
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
// NOTE: Navbar sirf Login button show karega
// Role selection + password wala kaam Login Page par hoga

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* 🔹 Fixed Top Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* University Info */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="./img.png"
              alt="University Logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-primary">
                University and Institute of Information Technology
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Department of Computer Science
              </p>
            </div>
          </Link>

          {/* Login Button (sirf redirect karega) */}
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-primary hover:bg-primary text-white rounded-lg font-medium transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* 🔹 Navigation Bar */}
      <header className="bg-primary text-white py-3 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap font-titillium font-bold justify-center gap-4 md:gap-6 text-sm">
            <Link to="/distinguished-fyp" className="hover:text-yellow-300">
              Distinguished FYP
            </Link>
            <Link to="/fyp-ideas" className="hover:text-yellow-300">
              Ideas for Students
            </Link>
            <Link to="/key-dates" className="hover:text-yellow-300">
              Key Dates
            </Link>
            <Link to="/rules-and-sops" className="hover:text-yellow-300">
              Rules & SOPS
            </Link>
            <Link to="/downloads" className="hover:text-yellow-300">
              Downloads
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

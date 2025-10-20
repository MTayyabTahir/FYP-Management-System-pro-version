import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  // Single handleLogin function
  const handleLogin = (role) => {
    localStorage.setItem("role", role);
    if (role === "student") navigate("/student/dashboard");
    else if (role === "coordinator")
      navigate("/dashboard"); // Changed from "super-admin" to "coordinator"
    else if (role === "supervisor") navigate("/supervisor/dashboard");
    setIsLoginModalOpen(false);
  };

  return (
    <>
      {/* 🔹 Fixed Top Header (only this part stays fixed) */}
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
              <h1 className="text-lg font-bold text-green-700">
                University and Institute of Information Technology
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Department of Computer Science
              </p>
            </div>
          </Link>

          {/* Login Button */}
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            Login
          </button>
        </div>
      </div>
      {/* Spacer for fixed top header */}
      <div className="h-20"></div>{" "}
      {/* Added spacer to prevent content from being hidden under fixed header */}
      {/* 🔹 Navigation Bar (NOT fixed) */}
      <header className="bg-green-700 text-white py-3 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link
              to="/distinguished-fyp"
              className="hover:text-yellow-300 transition-colors"
            >
              Distinguished FYP
            </Link>
            <Link
              to="/fyp-ideas"
              className="hover:text-yellow-300 transition-colors"
            >
              Ideas for Students
            </Link>
            <Link
              to="/key-dates"
              className="hover:text-yellow-300 transition-colors"
            >
              Key Dates
            </Link>
            <Link
              to="/rules-and-sops"
              className="hover:text-yellow-300 transition-colors"
            >
              Rules & SOPS
            </Link>
            <Link
              to="/downloads"
              className="hover:text-yellow-300 transition-colors"
            >
              Downloads
            </Link>
          </nav>
        </div>
      </header>
      {/* 🔸 Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-green-700">Login</h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Select your role to continue to the dashboard
            </p>

            <div className="space-y-4">
              <button
                onClick={() => handleLogin("student")}
                className="w-full py-3 rounded-lg bg-green-600 text-white font-medium text-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Login as Student
              </button>
              <button
                onClick={() => handleLogin("coordinator")}
                className="w-full py-3 rounded-lg bg-green-600 text-white font-medium text-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Login as Coordinator
              </button>
              <button
                onClick={() => handleLogin("supervisor")}
                className="w-full py-3 rounded-lg bg-green-600 text-white font-medium text-lg shadow-md hover:bg-green-700 transition-colors"
              >
                Login as Supervisor
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Hardcoded credentials mapping roles to username/password for demonstration.
 * In a real application, this would be an API call and roles would be more granular.
 */
const DEMO_CREDENTIALS = {
  student: {
    username: "student",
    password: "stud123",
    redirect: "/student/dashboard",
    roleKey: "student",
  },
  coordinator: {
    username: "coordinator",
    password: "coord123",
    redirect: "/dashboard",
    roleKey: "super-admins",
  },
  supervisor: {
    username: "supervisor",
    password: "super123",
    redirect: "/supervisor/dashboard",
    roleKey: "supervisor",
  },
};

const LoginPage = () => {
  const navigate = useNavigate();

  // State for form inputs and UI feedback
  const [loginRole, setLoginRole] = useState("student");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission

  /**
   * Handles the login process.
   * In a real application, this would involve async communication with a backend API.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError(""); // Clear previous errors
    setIsSubmitting(true);

    // Simulate Network Delay (Optional, for better UX feedback)
    setTimeout(() => {
      const selectedCredential = DEMO_CREDENTIALS[loginRole];

      if (
        inputUsername === selectedCredential.username &&
        inputPassword === selectedCredential.password
      ) {
        // Successful Login: Store role and navigate
        localStorage.setItem("userRole", selectedCredential.roleKey);
        navigate(selectedCredential.redirect);
      } else {
        // Failed Login
        setLoginError("Invalid username or password for the selected role.");
        setIsSubmitting(false); // Re-enable button
      }
    }, 500); // 500ms delay to simulate network latency
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb] p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transition-all duration-300 ease-in-out">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-green-800 text-center mb-1">
            FYP Management System
          </h1>
          <p className="text-center text-gray-500">
            Securely access your account.
          </p>
        </header>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-1">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-gray-700"
            >
              Login As
            </label>
            <select
              id="role"
              value={loginRole}
              onChange={(e) => {
                setLoginRole(e.target.value);
                setLoginError(""); // Clear error on role change
              }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus:ring-green-600 focus:border-green-600 outline-none transition-shadow"
            >
              <option value="student">Student</option>
              <option value="coordinator">Coordinator</option>
              <option value="supervisor">Supervisor</option>
            </select>
          </div>

          {/* Username Input */}
          <div className="space-y-1">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-green-600 focus:border-green-600 outline-none"
              required
              autoComplete="username"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-green-600 focus:border-green-600 outline-none"
              required
              autoComplete="current-password"
            />
          </div>

          {/* Error Message Display */}
          {loginError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm text-center">
              {loginError}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold transition duration-200 ease-in-out shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Demo Credentials Section */}
        <section className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-2">
            🔑 Demo Access Credentials
          </h3>
          <ul className="space-y-1 list-disc list-inside ml-2">
            <li className="text-gray-600">
              <span className="font-semibold">Student:</span> username `student`
              / password `stud123`
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Coordinator:</span> username
              `coordinator` / password `coord123`
            </li>
            <li className="text-gray-600">
              <span className="font-semibold">Supervisor:</span> username
              `supervisor` / password `super123`
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;

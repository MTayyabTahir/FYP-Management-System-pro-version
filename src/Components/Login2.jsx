import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage2 = () => {
  const navigate = useNavigate();

  // Hardcoded credentials for FYP Management System
  const credentials = {
    student: { username: "student", password: "stud123" },
    coordinator: { username: "coordinator", password: "coord123" },
    supervisor: { username: "supervisor", password: "super123" },
  };

  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const selected = credentials[role];

    if (username === selected.username && password === selected.password) {
      if (role === "coordinator") {
        localStorage.setItem("role", "super-admins");
        navigate("/dashboard");
      }
      if (role === "supervisor") {
        localStorage.setItem("role", "supervisor");
        navigate("/supervisor/dashboard");
      }
      if (role === "student") {
        localStorage.setItem("role", "student");
        navigate("/student/dashboard");
      }
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen w-full m-[-20px]  p-20 flex items-center justify-center bg-green-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT ILLUSTRATION */}
        <div className="hidden md:flex items-center justify-center bg-green-200 ">
          <img
            src="./assets/ill.png"
            alt="Login Illustration"
            className="max-w-sm"
          />
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkzF0LHPuBhUXzgYtqZVORAhjOe9E1LwLknSIQnHaqQ5PGPRuX4L3&usqp=CAE&s"
              alt="University Logo"
              className="h-14 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-green-700">
              FYP Management System
            </h2>
            <p className="text-sm text-gray-500">Login to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Role */}
            <div>
              <label className="block text-sm font-medium mb-1">Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
              >
                <option value="student">Student</option>
                <option value="coordinator">Coordinator</option>
                <option value="supervisor">Supervisor</option>
              </select>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-600 outline-none"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 text-xs text-gray-500 border-t pt-4">
            <p className="font-semibold mb-1">Demo Credentials</p>
            <p>Student: student / stud123</p>
            <p>Coordinator: coordinator / coord123</p>
            <p>Supervisor: supervisor / super123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;

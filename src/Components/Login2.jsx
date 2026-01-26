import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  User,
  Shield,
  BookOpen,
  GraduationCap,
  Eye,
  EyeOff,
} from "lucide-react";

const LoginPage2 = () => {
  const navigate = useNavigate();

  const credentials = {
    student: { username: "student", password: "stud123" },
    coordinator: { username: "coordinator", password: "coord123" },
    supervisor: { username: "supervisor", password: "super123" },
  };

  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getRoleIcon = () => {
    switch (role) {
      case "student":
        return <GraduationCap className="w-5 h-5" />;
      case "coordinator":
        return <Shield className="w-5 h-5" />;
      case "supervisor":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <User className="w-5 h-5" />;
    }
  };

  const getRoleDescription = () => {
    switch (role) {
      case "student":
        return "Access your FYP projects, submissions, and supervisor communications";
      case "coordinator":
        return "Manage FYP allocations, timelines, and system administration";
      case "supervisor":
        return "Guide student projects, evaluate submissions, and provide feedback";
      default:
        return "";
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const selected = credentials[role];

    if (username === selected.username && password === selected.password) {
      localStorage.setItem("role", role);

      switch (role) {
        case "coordinator":
          navigate("/dashboard");
          break;
        case "supervisor":
          navigate("/supervisor/dashboard");
          break;
        case "student":
          navigate("/student/dashboard");
          break;
        default:
          navigate("/");
      }
    } else {
      setError("Invalid credentials. Please check your username and password.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-100">
        {/* Left Panel - University Branding */}
        <div className="bg-gradient-to-br from-green-900 to-green-700 p-12 text-white hidden lg:flex flex-col justify-between relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-white/10 rounded-lg">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">University</h1>
                <p className="text-white text-sm">Final Year Project</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Final Year Project
              <br />
              <span className="text-white">Management System</span>
            </h2>

            <p className="text-whitemb-12 leading-relaxed">
              A comprehensive platform for managing, tracking, and evaluating
              undergraduate final year projects across all departments.
            </p>
          </div>

          {/* Role Information Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-white/20 rounded-lg">{getRoleIcon()}</div>
              <h3 className="text-lg font-semibold capitalize">{role} Login</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              {getRoleDescription()}
            </p>
          </div>

          {/* University Info */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
            <p className="text-whitetext-sm">
              © {new Date().getFullYear()} University FYP System. All rights
              reserved.
            </p>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Mobile Header */}
          <div className="lg:hidden mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="font-bold text-gray-900">University FYP</h1>
                  <p className="text-xs text-gray-500">Management System</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to your account to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sign in as
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["student", "coordinator", "supervisor"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 ${
                        role === r
                          ? "border-primary bg-green-50 text-primary"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div
                        className={`mb-2 p-2 rounded-full ${
                          role === r ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {r === "student" && (
                          <GraduationCap className="w-5 h-5" />
                        )}
                        {r === "coordinator" && <Shield className="w-5 h-5" />}
                        {r === "supervisor" && <BookOpen className="w-5 h-5" />}
                      </div>
                      <span className="text-sm font-medium capitalize">
                        {r}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Username Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  isLoading
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary to-green-600 hover:from-primary hover:to-green-700 shadow-lg hover:shadow-xl"
                } text-white flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Demo Credentials
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {Object.entries(credentials).map(([role, creds]) => (
                  <div
                    key={role}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="p-1 bg-green-100 rounded">
                        {role === "student" && (
                          <GraduationCap className="w-4 h-4 text-primary" />
                        )}
                        {role === "coordinator" && (
                          <Shield className="w-4 h-4 text-primary" />
                        )}
                        {role === "supervisor" && (
                          <BookOpen className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {role}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">User:</span>{" "}
                        {creds.username}
                      </p>
                      <p className="text-xs text-gray-600">
                        <span className="font-medium">Pass:</span>{" "}
                        {creds.password}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                These are demo credentials for testing purposes
              </p>
            </div>

            {/* Help Text */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Need help?{" "}
                <a
                  href="#"
                  className="text-primary hover:text-green-800 font-medium"
                >
                  Contact System Administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;

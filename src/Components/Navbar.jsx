import { Bell, Moon, Sun, User, ChevronDown, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [year, setYear] = useState("2025");
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(null);

  const years = ["2025", "2026"];

  // ================= ROLE BASED USER =================
  useEffect(() => {
    const role = localStorage.getItem("role"); // student | supervisor

    if (role === "student") {
      setUser({
        name: "Ali Student",
        role: "Student",
        avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        profileRoute: "/student/profile",
      });
    } else if (role === "supervisor") {
      setUser({
        name: "Dr. Ahsan Arshad",
        role: "Supervisor",
        avatar: "https://www.uaar.edu.pk/media/profile/arshad-21122.gif",
        profileRoute: "/supervisor/profile",
      });
    } else {
      setUser({
        name: "Ahsan Arshad",
        role: "coordinator",
        avatar: "https://www.uaar.edu.pk/media/profile/arshad-21122.gif",
        profileRoute: "/login",
      });
    }
  }, []);

  if (!user) return null;

  return (
    <header className="max-w-full bg-white border-b shadow-sm flex items-center justify-between px-6 py-3 sticky top-0 z-50 md:ml-64">
      {/* ================= LEFT ================= */}
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src="/img.png"
            alt="University Logo"
            className="h-14 w-14 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-green-700">UIIT</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Department of Computer Science
            </p>
          </div>
        </Link>

        <div className="relative mt-1 w-40">
          {/* <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full appearance-none border border-green-300 bg-green-50 text-sm rounded-md px-3 py-2 pr-8"
          >
            {years.map((yr) => (
              <option key={yr}>{yr} Session</option>
            ))}
          </select> */}

          {/* <ChevronDown
            size={16}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600"
          /> */}
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-5 relative">
        {/* Profile */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="h-9 w-9 rounded-full overflow-hidden border">
            <img
              src={user.avatar}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-sm font-medium text-green-800">
              {user.name}
            </span>
            <span className="text-xs text-green-600">{user.role}</span>
          </div>

          <ChevronDown size={18} className="text-green-600" />
        </div>

        {/* ================= DROPDOWN ================= */}
        {openMenu && (
          <div className="absolute right-0 top-12 bg-green-50 shadow-lg rounded-lg w-48 border z-50">
            <button
              onClick={() => {
                setOpenMenu(false);
                navigate(user.profileRoute);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-green-200"
            >
              <User size={16} /> My Profile
            </button>

            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import img from "/assets/arid.png";

export default function Sidebar({ links = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= Desktop Sidebar ================= */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-[#0f5d3b] text-white shadow-lg flex-col">
        {/* Logo Section */}
        <div className="px-6 py-6">
          <h1 className="text-2xl font-bold">Fyp Managment System</h1>
          <p className="text-sm text-gray-200 mt-1">ARID University</p>
        </div>

        <hr className="border-green-700 mx-6" />

        {/* Nav Items */}
        <nav className="flex-1 pl-5 py-6 space-y-2 overflow-y-auto">
          {links.length > 0 ? (
            links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-l-full font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-[#0f5d3b] shadow-md"
                      : "text-white hover:bg-green-700/60"
                  }`
                }
              >
                {link.icon && <span className="w-5 h-5">{link.icon}</span>}
                <span>{link.label}</span>
              </NavLink>
            ))
          ) : (
            <p className="text-gray-300 text-sm px-4">No Links Available</p>
          )}
        </nav>

        {/* Footer */}
        <div className="text-center text-xs text-gray-300 py-4">
          © 2026 ARID University
        </div>
      </aside>

      {/* ================= Mobile Navbar ================= */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#0f5d3b] text-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={img}
              alt="University Logo"
              className="h-10 w-10 rounded-lg bg-white p-1 shadow-sm"
            />
            <div>
              <h1 className="font-semibold text-lg">OBE-RMS</h1>
              <p className="text-xs text-gray-200">ARID University</p>
            </div>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-green-700 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dropdown Menu (SAME UI AS DESKTOP) */}
        {open && (
          <nav className="flex flex-col px-4 py-4 space-y-2 bg-[#0f5d3b] border-t border-green-700">
            {links.length > 0 ? (
              links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-white text-[#0f5d3b] shadow-md"
                        : "text-white hover:bg-green-700/60"
                    }`
                  }
                >
                  {link.icon && <span className="w-5 h-5">{link.icon}</span>}
                  <span>{link.label}</span>
                </NavLink>
              ))
            ) : (
              <p className="text-gray-300 text-sm px-4">No Links Available</p>
            )}
          </nav>
        )}
      </div>
    </>
  );
}

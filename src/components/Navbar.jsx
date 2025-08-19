import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-300";

  return (
    <nav className="bg-white shadow-md py-1 px-1 flex justify-center space-x-4 sticky top-0 z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkClasses} ${isActive ? "bg-blue-600 text-white shadow-lg" : "text-blue-600 hover:bg-blue-100"}`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

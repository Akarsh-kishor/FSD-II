import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">RBAC App</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Dashboard</Link>

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}

        {user?.role === "editor" && (
          <Link to="/editor">Editor</Link>
        )}

        {user?.role === "viewer" && (
          <Link to="/viewer">Viewer</Link>
        )}
      </div>

      <div className="navbar-actions">
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {user ? (
          <>
            <span className="user-role">
              {user.name} ({user.role})
            </span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
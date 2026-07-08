
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return savedTheme === "dark";
  });

  const menuRef = useRef(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar" ref={menuRef}>
      <div className="container">
        <div className="logo">
          <span className="logo-icon">📝</span>
          <h2>TaskFlow</h2>
        </div>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/Dashboard" className={location.pathname === "/Dashboard" ? "active" : ""} onClick={closeMenu}>
            Dashboard
          </Link>
          <Link to="/Tasks" className={location.pathname === "/Tasks" ? "active" : ""} onClick={closeMenu}>
            Tasks
          </Link>
          <Link to="/About" className={location.pathname === "/About" ? "active" : ""} onClick={closeMenu}>
            About
          </Link>
        </nav>

        <div className="nav-actions">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? "☀️" : "🌙"}
          </button>
          <button className="login-btn">Login</button>
        </div>

        <button
          className={`menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}
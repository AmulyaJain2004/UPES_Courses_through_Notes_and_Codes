import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">🎓</span>
            <span className="brand-text">UPES Repository</span>
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/resources"
              className={`nav-link ${isActive("/resources")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://github.com/AmulyaJain2004/UPES_Courses_through_Notes_and_Codes"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link github-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>GitHub</span>
              <span className="external-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

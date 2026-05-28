import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

const links = ["Home", "About", "Project", "Services", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(id.toLowerCase());
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={(e) => handleClick(e, "home")}>
          <span className="navbar__logo-t">t</span>ahmid
        </a>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={(e) => handleClick(e, l)}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__socials">
          <a href="https://github.com/tah10mid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tahmidul-islam-39606029a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

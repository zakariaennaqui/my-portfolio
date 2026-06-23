import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = ["home", "about", "skills", "projects", "contact"];

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">ZE.</div>

        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav__link ${activeSection === link ? "nav__link--active" : ""}`}
                onClick={() => scrollToSection(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button className="nav__mobile-btn" onClick={() => setIsMenuOpen((o) => !o)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`nav__mobile-menu ${isMenuOpen ? "nav__mobile-menu--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button key={link} className="nav__mobile-link" onClick={() => scrollToSection(link)}>
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}

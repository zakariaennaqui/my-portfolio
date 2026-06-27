import { useState, useEffect } from "react";
import "./Navbar.css";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Logo */}
        <button className="navbar__logo" onClick={() => scrollTo("home")} aria-label="Go to top">
          <span className="navbar__logo-icon">ZE</span>
          <span className="navbar__logo-text">
            Zakaria <span>Ennaqui</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                id={`nav-${link.id}`}
                className={`navbar__link${activeSection === link.id ? " navbar__link--active" : ""}`}
                onClick={() => scrollTo(link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.label}
                {activeSection === link.id && <span className="navbar__link-dot" />}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://github.com/zakariaennaqui"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
          aria-label="View GitHub profile"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${mobileOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {/* <div className={`navbar__mobile${mobileOpen ? " navbar__mobile--open" : ""}`} aria-hidden={!mobileOpen}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`navbar__mobile-link${activeSection === link.id ? " navbar__mobile-link--active" : ""}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
        <a
          href="https://github.com/zakariaennaqui"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__mobile-cta"
        >
          View GitHub →
        </a>
      </div> */}
      {mobileOpen && (
        <div className="navbar__mobile navbar__mobile--open" aria-hidden={!mobileOpen}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__mobile-link${activeSection === link.id ? " navbar__mobile-link--active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://github.com/zakariaennaqui"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-cta"
          >
            View GitHub →
          </a>
        </div>
      )}
    </nav>
  );
}

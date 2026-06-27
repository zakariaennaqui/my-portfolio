import { useState, useEffect } from "react";
import "./Hero.css";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const TYPED_STRINGS = [
  "Computer Engineering Student",
  "Full-Stack Developer",
  "AI & Data Enthusiast",
  "Cloud & DevOps Explorer",
];

export function Hero({ onScrollTo }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [typedIndex, setTypedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[typedIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setTypedText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setTypedIndex((i) => (i + 1) % TYPED_STRINGS.length);
        }
      }
    }, deleting ? 45 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, typedIndex]);

  return (
    <section id="home" className="hero">
      {/* Decorative Background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        {/* Left — Content */}
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            4th-year Engineering Student · ENSA Berrechid
          </div>

          {/* Heading */}
          <h1 className="hero__heading">
            Hi, I'm{" "}
            <span className="hero__name">Zakaria Ennaqui</span>
          </h1>

          {/* Typed */}
          <p className="hero__typed" aria-label="Role description">
            <span>{typedText}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>

          {/* Description */}
          <p className="hero__description">
            Passionate about building impactful software — from AI-powered mobile apps
            to microservices architectures, from cloud infrastructure to Business Intelligence dashboards.
            Always chasing the next challenge.
          </p>

          {/* Stats */}
          <div className="hero__stats">
            {[
              { value: "10+", label: "Projects Built" },
              { value: "89%", label: "ML Accuracy" },
              { value: "9",   label: "Microservices" },
              { value: "3",   label: "Languages" },
            ].map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button
              id="hero-view-projects"
              className="btn btn--primary"
              onClick={() => onScrollTo("projects")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              View Projects
            </button>
            <a
              id="hero-download-cv"
              className="btn btn--secondary"
              href="/Cv_ENNAQUI_Zakaria.pdf"
              download="CV_Zakaria_Ennaqui.pdf"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
              </svg>
              Download CV
            </a>
            <button
              id="hero-contact"
              className="btn btn--ghost"
              onClick={() => onScrollTo("contact")}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hero__social">
            {[
              {
                href: "https://github.com/zakariaennaqui",
                label: "GitHub",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                ),
              },
              {
                href: "https://www.linkedin.com/in/zakaria-ennaqui-990883362",
                label: "LinkedIn",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                href: "mailto:zakariaennaqui.pro@gmail.com",
                label: "Email",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Profile Card */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            {/* Profile photo */}
            <div className="hero__avatar-wrap">
              <div className="hero__avatar-ring" />
              <div className="hero__avatar-ring hero__avatar-ring--2" />
              <div className="hero__avatar">
                <img
                  src="/assets/zakaria.jpg"
                  alt="Zakaria Ennaqui"
                  className="hero__avatar-img"
                  loading="eager"
                />
              </div>
              {/* Status */}
              <div className="hero__status">
                <span className="hero__status-dot" />
                Available for internship
              </div>
            </div>

            {/* Info */}
            <div className="hero__card-info">
              <h2 className="hero__card-name">Zakaria Ennaqui</h2>
              <p className="hero__card-role">Computer Engineering · ENSAB</p>
              <p className="hero__card-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Berrechid, Morocco
              </p>
            </div>

            {/* School logo */}
            <div className="hero__card-school">
              <img src="/assets/logo-ensa-berrechid.png" alt="ENSA Berrechid" className="hero__school-logo" />
              <span className="hero__school-name">ENSA Berrechid</span>
            </div>

            {/* Skills Preview */}
            <div className="hero__card-skills">
              {["React", "Spring Boot", "Python", "OpenStack", "Docker", "Oracle DB"].map((skill) => (
                <span key={skill} className="hero__card-skill">{skill}</span>
              ))}
            </div>

            {/* Mini Stats */}
            <div className="hero__card-stats">
              <div className="hero__card-stat">
                <span className="hero__card-stat-n">10+</span>
                <span className="hero__card-stat-l">Projects</span>
              </div>
              <div className="hero__card-stat">
                <span className="hero__card-stat-n">2026</span>
                <span className="hero__card-stat-l">Seeking PFA</span>
              </div>
              <div className="hero__card-stat">
                <span className="hero__card-stat-n">4th</span>
                <span className="hero__card-stat-l">Year</span>
              </div>
            </div>
          </div>

          {/* Floating tech labels */}
          <div className="hero__float hero__float--1">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            Spring Boot
          </div>
          <div className="hero__float hero__float--2">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </svg>
            OpenStack
          </div>
          <div className="hero__float hero__float--3">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>
            GitHub CI/CD
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll" onClick={() => onScrollTo("about")} role="button" tabIndex={0} aria-label="Scroll to about section">
        <span>Scroll</span>
        <div className="hero__scroll-wheel" />
      </div>
    </section>
  );
}

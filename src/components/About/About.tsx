import React from "react";
import "./About.css";

/* SVG icons for timeline (no emojis) */
const TimelineBook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);
const TimelineCap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const TimelineBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
  </svg>
);
const TimelineRocket = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const InterestIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactElement> = {
    web: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>,
    ml:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z"/><path d="M12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2zM4 9a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2zM14 9a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2z"/><path d="M12 8v2M12 14v2M8 12H6M18 12h-2"/></svg>,
    cloud: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>,
    mobile: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    micro: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    sport: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20A14.5 14.5 0 0012 2"/><path d="M2 12h20"/></svg>,
  };
  return icons[type] || null;
};

const timeline = [
  {
    year: "2022 – 2024",
    title: "Classes Préparatoires Intégrées",
    org: "ENSA Berrechid",
    desc: "Intensive preparation in mathematics, physics, and computer science fundamentals.",
    IconComp: TimelineBook,
    color: "blue",
  },
  {
    year: "2024 – Present",
    title: "Cycle Ingénieur — Génie Informatique",
    org: "ENSA Berrechid · Hassan I University",
    desc: "Engineering cycle focused on software engineering, AI, cloud computing, systems & networks.",
    IconComp: TimelineCap,
    color: "purple",
  },
  {
    year: "2025",
    title: "Stage d'Initiation — Xperlik",
    org: "Xperlik (formerly Experlik)",
    desc: "Built a full-stack Calendly-clone with React, Node.js, MongoDB, multi-payment gateways (Stripe, Razorpay), and Cloudinary.",
    IconComp: TimelineBriefcase,
    color: "green",
  },
  {
    year: "2026",
    title: "Seeking PFA Internship",
    org: "July – September 2026",
    desc: "Looking for a final-year engineering internship (PFA) to apply skills in real-world innovative projects.",
    IconComp: TimelineRocket,
    color: "amber",
  },
];

const interests = [
  { type: "web",    label: "Web Development" },
  { type: "ml",     label: "Machine Learning" },
  { type: "cloud",  label: "Cloud Computing" },
  { type: "mobile", label: "Mobile Dev" },
  { type: "micro",  label: "Microservices" },
  { type: "sport",  label: "Football" },
];

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__header">
          <div className="section__eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/>
            </svg>
            About Me
          </div>
          <h2 className="section__title">
            The person <span>behind the code</span>
          </h2>
          <p className="section__subtitle">
            A Computer Engineering student at ENSA Berrechid, Morocco — passionate about building
            software that matters. I thrive at the intersection of engineering depth and product thinking.
          </p>
        </div>

        <div className="about__grid">
          {/* Left — Story */}
          <div className="about__left">
            <div className="about__story card">

              {/* Profile photo */}
              <div className="about__photo-wrap">
                <img
                  src="/assets/zakaria.jpg"
                  alt="Zakaria Ennaqui"
                  className="about__photo"
                  loading="lazy"
                />
                <div className="about__photo-ring" />
              </div>

              <h3 className="about__story-title">My Story</h3>
              <p className="about__story-text">
                I'm a 4th-year Computer Engineering student at{" "}
                <strong>École Nationale des Sciences Appliquées de Berrechid (ENSAB)</strong>,
                part of Hassan I University. My journey started with the integrated
                preparatory classes where I built solid foundations in mathematics and algorithms.
              </p>
              <p className="about__story-text">
                Today, I'm passionate about <strong>emerging technologies</strong> spanning
                Data Mining & ML, Cloud Infrastructure, Full-Stack Web, Mobile Development, and Business Intelligence.
                I believe great engineers are T-shaped: deeply skilled in one area, broadly curious in all others.
              </p>
              <p className="about__story-text">
                I'm currently seeking a <strong>PFA internship (Projet de Fin d'Année)</strong> for
                July–September 2026, where I want to put theory into practice within a dynamic team.
              </p>

              {/* Language badges */}
              <div className="about__languages">
                <h4 className="about__languages-title">Languages</h4>
                <div className="about__lang-list">
                  {[
                    { lang: "Arabic",  level: "Native", color: "green" },
                    { lang: "French",  level: "Fluent",  color: "blue" },
                    { lang: "English", level: "Fluent",  color: "purple" },
                  ].map((l) => (
                    <div key={l.lang} className={`about__lang tag--${l.color} tag`}>
                      <span className="about__lang-name">{l.lang}</span>
                      <span className="about__lang-level">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="about__interests">
                <h4 className="about__interests-title">Interests</h4>
                <div className="about__interest-list">
                  {interests.map((i) => (
                    <span key={i.label} className="about__interest">
                      <InterestIcon type={i.type} />
                      {i.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* School logos */}
              <div className="about__schools">
                <h4 className="about__interests-title">Institution</h4>
                <div className="about__school-logos">
                  <img src="/assets/logo-ensa-berrechid.png" alt="ENSA Berrechid" className="about__school-logo" />
                  <img src="/assets/logo-uh1.png"            alt="Hassan I University" className="about__school-logo" />
                  <img src="/assets/logo-ensa-maroc.png"     alt="ENSA Maroc" className="about__school-logo" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="about__right">
            <h3 className="about__timeline-title">Journey & Experience</h3>
            <div className="about__timeline">
              {timeline.map((item, i) => (
                <div key={i} className={`about__timeline-item about__timeline-item--${item.color}`}>
                  <div className="about__timeline-icon">
                    <item.IconComp />
                  </div>
                  <div className="about__timeline-content">
                    <div className="about__timeline-year">{item.year}</div>
                    <div className="about__timeline-heading">{item.title}</div>
                    <div className="about__timeline-org">{item.org}</div>
                    <p className="about__timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact quick info */}
            <div className="about__contact-card card">
              <h4 className="about__contact-title">Quick Contact</h4>
              <div className="about__contact-links">
                <a href="mailto:zakariaennaqui.pro@gmail.com" className="about__contact-link" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  zakariaennaqui.pro@gmail.com
                </a>
                <a href="tel:+212642588624" className="about__contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 7.18 19.79 19.79 0 016.16 8.5a2 2 0 002.01-.18l3-3.61A2 2 0 009 2.93V2A2 2 0 007 .07 20.64 20.64 0 00.11 7a2 2 0 00.08 2.56l3.49 3.49a2 2 0 002.72.18l1.52-1.27A19.44 19.44 0 0015 19.52l-1.27 1.52a2 2 0 00.18 2.72z"/>
                  </svg>
                  +212 642 588 624
                </a>
                <a href="https://www.linkedin.com/in/zakaria-ennaqui-990883362" target="_blank" rel="noopener noreferrer" className="about__contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
                <a href="/Cv_ENNAQUI_Zakaria.pdf" download="CV_Zakaria_Ennaqui.pdf" className="about__contact-link about__contact-link--download">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                  </svg>
                  Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

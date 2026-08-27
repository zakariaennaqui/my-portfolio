import type { JSX } from "react";
import "./Skills.css";

const CategoryIcon = ({ id }: { id: string }) => {
  const map: Record<string, JSX.Element> = {
    languages: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    databases: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    cloud: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
      </svg>
    ),
    ai: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2z"/>
        <path d="M12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2zM4 9a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2zM14 9a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        <path d="M12 8v2M12 14v2M8 12H6M18 12h-2"/>
      </svg>
    ),
  };
  return map[id] ?? null;
};

const skillCategories = [
  {
    id: "languages",
    label: "Languages & Frameworks",
    color: "blue",
    skills: [
      { name: "Java / Spring Boot",      level: 85 },
      { name: "Python (ML / Data)",       level: 80 },
      { name: "JavaScript / TypeScript",  level: 82 },
      { name: "React.js",                 level: 83 },
      { name: "Node.js / Express",        level: 80 },
      { name: "Java Android (MVVM)",      level: 75 },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "purple",
    skills: [
      { name: "MySQL",                    level: 85 },
      { name: "Oracle DB / PL·SQL",       level: 80 },
      { name: "MongoDB",                  level: 82 },
      { name: "PostgreSQL / NeonDB",      level: 78 },
      { name: "SQL Server / SSIS (ETL)",  level: 75 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    color: "cyan",
    skills: [
      { name: "Docker",                   level: 80 },
      { name: "OpenStack / DevStack",     level: 75 },
      { name: "GitHub Actions (CI/CD)",   level: 78 },
      { name: "HuggingFace Spaces",       level: 72 },
      { name: "Vercel",                   level: 85 },
      { name: "FortiGate / ESXi",         level: 65 },
    ],
  },
  {
    id: "ai",
    label: "AI & Data Science",
    color: "amber",
    skills: [
      { name: "TensorFlow / Keras (CNN)", level: 75 },
      { name: "PyTorch (NLP, MLP)",       level: 72 },
      { name: "scikit-learn",             level: 78 },
      { name: "NLTK / NLP",              level: 73 },
      { name: "Power BI / DAX",          level: 76 },
    ],
  },
];

const techLogos = [
  { name: "React",       src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Spring Boot", src: "https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=springboot&logoColor=white&style=flat" },
  { name: "Python",      src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Docker",      src: "https://images.seeklogo.com/logo-png/64/1/docker-icon-logo-png_seeklogo-643955.png" },
  { name: "MongoDB",     src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
  { name: "Oracle DB",   src: "https://www.oracle.com/asset/web/favicons/favicon-192.png" },
  { name: "TypeScript",  src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Node.js",     src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "OpenStack",   src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/OpenStack%C2%AE_Logo_2016.svg" },
  { name: "Power BI",    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "PostgreSQL",  src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "Git",         src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__header">
          <div className="section__eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Technical Skills
          </div>
          <h2 className="section__title">
            Tools & <span>Technologies</span>
          </h2>
          <p className="section__subtitle">
            A broad and growing toolkit — from backend microservices to AI models, from cloud infrastructure to BI dashboards.
          </p>
        </div>

        {/* Logo Scroll Strip */}
        <div className="skills__scroll-wrap" aria-hidden="true">
          <div className="skills__scroll-track">
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="skills__scroll-pill">
                <img src={tech.src} alt={tech.name} className="skills__scroll-logo" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className={`skills__card card skills__card--${cat.color}`}>
              <div className="skills__card-header">
                <div className="skills__card-icon-wrap">
                  <CategoryIcon id={cat.id} />
                </div>
                <h3 className="skills__card-title">{cat.label}</h3>
              </div>
              <div className="skills__bars">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skills__bar-wrap">
                    <div className="skills__bar-info">
                      <span className="skills__bar-name">{skill.name}</span>
                      {/* <span className="skills__bar-pct">{skill.level}%</span> */}
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className={`skills__bar-fill skills__bar-fill--${cat.color}`}
                        style={{ "--width": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tools */}
        <div className="skills__bottom">
          <p className="skills__bottom-label">Additional tools I work with</p>
          <div className="skills__extras">
            {[
              "Git / GitHub", "Android Studio", "Postman", "VS Code", "IntelliJ IDEA",
              "SQL Developer", "Streamlit", "Retrofit 2", "JWT Auth", "WebSocket / STOMP",
              "Spring Security", "Eureka Service Discovery",
            ].map((tool) => (
              <span key={tool} className="tag tag--slate">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

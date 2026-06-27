import { useState } from "react";
import "./Projects.css";

type Category = "all" | "web" | "mobile" | "ai" | "cloud" | "bi" | "db";

interface TechLogo {
  name: string;
  src: string; // URL or local path
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  year: string;
  category: Category;
  image: string;
  techLogos: TechLogo[];
  tags: string[];
  links: { label: string; url: string; icon: "github" | "globe" }[];
  highlights: string[];
  accentColor: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "calendly",
    title: "CalendlyClone (Xperlik)",
    subtitle: "Internship · Xperlik",
    description:
      "Full-stack online booking platform with multi-gateway payments, OTP verification, calendar slot generation, and promo codes.",
    longDesc:
      "Three independently-deployed apps (client, admin, backend) on Vercel. Supports Stripe, Razorpay, and Payzone. Built during my 2025 internship at Xperlik.",
    year: "2025",
    category: "web",
    image: "/assets/projects/calendlyClone/overview.png",
    techLogos: [
      { name: "React",     src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Node.js",   src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "MongoDB",   src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
      { name: "Stripe",    src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
      { name: "Docker",    src: "https://images.seeklogo.com/logo-png/64/1/docker-icon-logo-png_seeklogo-643955.png" },
    ],
    tags: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "Razorpay", "Cloudinary", "OTP Email"],
    links: [
      { label: "Client App", url: "https://calendlyclone-chi.vercel.app", icon: "globe" },
      { label: "Admin App",  url: "https://calendlyclone-high.vercel.app", icon: "globe" },
      { label: "GitHub",     url: "https://github.com/zakariaennaqui/calendlyClone", icon: "github" },
    ],
    highlights: [
      "3 independently deployed apps (client, admin, API)",
      "Multi-payment: Stripe, Razorpay, Payzone",
      "OTP email verification for sign-up",
      "Dynamic calendar slot generation by provider",
      "Promo codes with fixed & percentage discounts",
    ],
    accentColor: "#2563eb",
    featured: true,
  },
  {
    id: "logistics",
    title: "Livrago — Logistics Tracking",
    subtitle: "JEE Project · ENSA Berrechid",
    description:
      "Full logistics platform with 9 Spring Boot microservices, Spring Cloud Eureka, real-time GPS via WebSocket, and 4 user roles.",
    longDesc:
      "Deployed on HuggingFace Spaces via Docker multi-stage builds. API Gateway handles routing, JWT secures all services. 8 independent PostgreSQL databases on NeonDB.",
    year: "2025",
    category: "web",
    image: "/assets/projects/Logistics-Tracking-Application/architecture_diagram_1782055800736.png",
    techLogos: [
      { name: "Spring Boot", src: "https://img.shields.io/badge/-6DB33F?logo=springboot&logoColor=white&style=flat" },
      { name: "React",       src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Docker",      src: "https://images.seeklogo.com/logo-png/64/1/docker-icon-logo-png_seeklogo-643955.png" },
      { name: "PostgreSQL",  src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    ],
    tags: ["Spring Boot", "Spring Cloud", "Eureka", "React", "WebSocket STOMP", "Docker", "PostgreSQL", "JWT"],
    links: [
      { label: "Live Demo", url: "https://logistics-tracking-application.vercel.app", icon: "globe" },
      { label: "GitHub",    url: "https://github.com/zakariaennaqui/Logistics-Tracking-Application", icon: "github" },
    ],
    highlights: [
      "9 independent Spring Boot microservices",
      "Spring Cloud Eureka service discovery",
      "Real-time GPS tracking via WebSocket STOMP",
      "4 user roles: Admin, Client, Livreur, Manager",
      "HuggingFace Spaces Docker deployment",
    ],
    accentColor: "#059669",
    featured: true,
  },
  {
    id: "android-ai",
    title: "StudyFlow — AI Study Assistant",
    subtitle: "Mobile Dev Project",
    description:
      "Android app that converts study material into AI-generated summaries, quizzes, and flashcards using Google Gemini 2.0 Flash.",
    longDesc:
      "ML Kit OCR scans printed text via camera. CI/CD pipeline via GitHub Actions publishes APK to GitHub Releases on every push. Backend deployed on HuggingFace Spaces.",
    year: "2026",
    category: "mobile",
    image: "/assets/projects/Android-AI-Study-Assistant/h7544.jpg",
    techLogos: [
      { name: "Android",    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg" },
      { name: "Spring Boot",src: "https://img.shields.io/badge/-6DB33F?logo=springboot&logoColor=white&style=flat" },
      { name: "Gemini AI",  src: "https://img.shields.io/badge/-4285F4?logo=google&logoColor=white&style=flat" },
      { name: "Docker",     src: "https://images.seeklogo.com/logo-png/64/1/docker-icon-logo-png_seeklogo-643955.png" },
    ],
    tags: ["Java Android", "Spring Boot 4", "Gemini 2.0 Flash", "ML Kit OCR", "JWT", "PostgreSQL", "Docker", "GitHub Actions"],
    links: [
      { label: "Download APK", url: "https://github.com/zakariaennaqui/Android-AI-Study-Assistant/releases", icon: "globe" },
      { label: "GitHub",       url: "https://github.com/zakariaennaqui/Android-AI-Study-Assistant", icon: "github" },
    ],
    highlights: [
      "Gemini 2.0 Flash: summaries, quizzes & flashcards",
      "ML Kit OCR — scan printed text via camera",
      "Spaced repetition review system",
      "CI/CD: GitHub Actions → auto APK release",
      "Spring Boot 4 + NeonDB PostgreSQL backend",
    ],
    accentColor: "#f59e0b",
    featured: true,
  },
  {
    id: "customer-analysis",
    title: "Amazon Sentiment Analysis",
    subtitle: "Data Mining Project",
    description:
      "ML pipeline trained on 3.6M Amazon reviews achieving 89.05% accuracy with Logistic Regression + TF-IDF. Deployed on Streamlit Cloud.",
    longDesc:
      "Full pipeline: NLTK preprocessing, Porter stemming, TF-IDF (50k features), comparison of Naive Bayes, Decision Tree, and Logistic Regression. Best model publicly deployed.",
    year: "2026",
    category: "ai",
    image: "/assets/projects/Costumer_Analysis/b5c88b240d9ec7b71cf679e224242de9.jpg",
    techLogos: [
      { name: "Python",     src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "scikit",     src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Streamlit",  src: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
    ],
    tags: ["Python", "scikit-learn", "NLTK", "TF-IDF", "Logistic Regression", "Streamlit", "Pandas"],
    links: [
      { label: "Live App", url: "https://amazon-trained-model-v1.streamlit.app", icon: "globe" },
      { label: "GitHub",   url: "https://github.com/zakariaennaqui/amazonTrainedModel_v1", icon: "github" },
    ],
    highlights: [
      "89.05% accuracy on 400,000 test reviews",
      "Trained on 3.6M Amazon reviews",
      "TF-IDF (50,000 features) + Porter stemmer",
      "3 models compared: Naive Bayes, Decision Tree, Logistic Regression",
      "Live Streamlit Cloud deployment",
    ],
    accentColor: "#7c3aed",
    featured: true,
  },
  {
    id: "openstack",
    title: "OpenStack Private Cloud",
    subtitle: "Systems & Networks Project",
    description:
      "Full private cloud infrastructure with OpenStack DevStack on Ubuntu 24.04 — Keystone, Nova, Neutron, Glance, Cinder, Horizon.",
    longDesc:
      "All-in-One deployment in VirtualBox with SDN networking (provider + private 10.0.0.0/24), floating IPs, SSH key-pair auth, and validated inter-VM connectivity.",
    year: "2026",
    category: "cloud",
    image: "/assets/projects/OpenStack_Cloud_Privé/1_3lkRxLi9DK0RQXh1aZOx0A.png",
    techLogos: [
      { name: "OpenStack", src: "https://img.shields.io/badge/-ED1944?logo=openstack&logoColor=white&style=flat" },
      { name: "Ubuntu",    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg" },
      { name: "VirtualBox",src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" },
    ],
    tags: ["OpenStack", "DevStack", "Ubuntu 24.04", "KVM/QEMU", "Neutron SDN", "SSH", "VirtualBox"],
    links: [
      { label: "GitHub", url: "https://github.com/zakariaennaqui/OpenStack-CloudPrive", icon: "github" },
    ],
    highlights: [
      "6 OpenStack services: Keystone, Nova, Neutron, Glance, Cinder, Horizon",
      "Software Defined Networking (SDN) via Neutron",
      "Floating IP assignment + SSH key authentication",
      "Inter-VM and Internet connectivity validated",
      "Full quota, flavor & security group management",
    ],
    accentColor: "#ef4444",
  },
  {
    id: "rent-cars",
    title: "RENT-CARS",
    subtitle: "Web Dev Project · P2P Car Rental",
    description:
      "Peer-to-peer car rental platform with React + TypeScript frontend, Node.js/Express REST API, JWT auth, and MongoDB Atlas.",
    longDesc:
      "Includes Cloudinary image upload for vehicles, Nodemailer email verification, and role-based access: user, renter, admin. Built as a group project of 3.",
    year: "2025",
    category: "web",
    image: "/assets/projects/RENT_CARS/rental_car.png",
    techLogos: [
      { name: "React",       src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "TypeScript",  src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
      { name: "Node.js",     src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "MongoDB",     src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "JWT", "Cloudinary", "Nodemailer"],
    links: [
      { label: "Live Demo", url: "https://nimo-mu.vercel.app", icon: "globe" },
      { label: "GitHub",    url: "https://github.com/zakariaennaqui/nimo", icon: "github" },
    ],
    highlights: [
      "P2P car rental between individuals",
      "JWT auth with 3 roles: user, renter, admin",
      "Cloudinary image upload for vehicle listings",
      "Email verification via Nodemailer",
      "Agile group project — team of 3",
    ],
    accentColor: "#06b6d4",
  },
  {
    id: "emploi-bi",
    title: "EmploiIT — BI Observatory",
    subtitle: "Business Intelligence Project",
    description:
      "End-to-end BI solution: OLTP source → SSIS ETL pipeline → Star Schema DW → interactive Power BI dashboard for Morocco's IT job market.",
    longDesc:
      "SQL Server OLTP with 7 normalized tables. Two SSIS packages (Pkg_LoadDimensions + Pkg_LoadFact) translate natural keys to surrogate keys. 3-page Power BI report with DAX measures.",
    year: "2026",
    category: "bi",
    image: "/assets/projects/EmploiIT-BI/ssms.jpg",
    techLogos: [
      { name: "SSIS",     src: "/assets/projects/EmploiIT-BI/ssis-logo.png.webp" },
      { name: "SSMS",     src: "/assets/projects/EmploiIT-BI/ssms.jpg" },
      { name: "Power BI", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    ],
    tags: ["SQL Server", "SSIS ETL", "Power BI", "DAX", "Star Schema", "Data Warehouse", "Visual Studio 2022"],
    links: [
      { label: "GitHub", url: "https://github.com/zakariaennaqui/EmploiIT-BI", icon: "github" },
    ],
    highlights: [
      "Full OLTP → DW ETL pipeline via SSIS",
      "Star Schema: 2 fact tables + 7 dimensions",
      "Power BI dashboard: 3 pages, advanced DAX measures",
      "Morocco IT market: salary, hiring rate, skills demand",
      "Real companies: CIH Bank, OCP Group, Capgemini…",
    ],
    accentColor: "#f59e0b",
  },
  {
    id: "oracle-erp",
    title: "Oracle ERP — DB Administration",
    subtitle: "Database Administration Project",
    description:
      "Oracle Database 21c ERP with full PL/SQL: stored procedures, triggers, packages, RBAC roles, performance indexing, and RMAN backup.",
    longDesc:
      "Two complementary implementations covering HR, commercial, logistics, and finance modules. 7-day RMAN retention window, composite index strategy, and granular C## role access control.",
    year: "2025",
    category: "db",
    image: "/assets/projects/Oracle-ERP-DB-Administration/hero-banner.png",
    techLogos: [
      { name: "Oracle DB", src: "https://www.schneider.im/media/2022/03/SCHNEIDER-IT-MANAGEMENT-2023-11-01-Website-Oracle-Database.jpg" },
      { name: "PL/SQL",    src: "https://oralytics.com/wp-content/uploads/2022/10/pl-sql_icon-1.png" },
      { name: "Docker",    src: "https://images.seeklogo.com/logo-png/64/1/docker-icon-logo-png_seeklogo-643955.png" },
    ],
    tags: ["Oracle DB 21c", "PL/SQL", "RMAN", "DDL/DML", "RBAC", "Triggers", "Packages", "SQL*Plus"],
    links: [
      { label: "GitHub", url: "https://github.com/zakariaennaqui/Oracle-ERP-DB-Administration", icon: "github" },
    ],
    highlights: [
      "ERP modules: HR, Sales, Logistics, Finance",
      "PL/SQL: Procedures, Functions, Triggers, Package",
      "RBAC: C##ADMIN, C##GESTIONNAIRE, C##COMPTABLE roles",
      "Performance indexing: FK, composite & search columns",
      "RMAN: full + incremental backups, 7-day retention",
    ],
    accentColor: "#ef4444",
  },
  {
    id: "chatbot-mnist",
    title: "AI Triple Project",
    subtitle: "Python AI Project",
    description:
      "Three AI modules from scratch: NLP Chatbot (PyTorch MLP + MySQL + Tkinter), MNIST digit recognition (CNN), Sign Language classification (CNN).",
    longDesc:
      "NLP pipeline with NLTK tokenization, lemmatization, bag-of-words, and hybrid intent detection. MNIST CNN on 70k images. Sign Language CNN on 10-class hand gesture dataset.",
    year: "2025",
    category: "ai",
    image: "/assets/projects/Chatbot-MNIST-Sign_language/project_architecture_overview.png",
    techLogos: [
      { name: "PyTorch",     src: "https://images.seeklogo.com/logo-png/37/1/pytorch-logo-png_seeklogo-372199.png" },
      { name: "TensorFlow",  src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg" },
      { name: "Python",      src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    ],
    tags: ["PyTorch", "TensorFlow", "Keras", "CNN", "NLTK", "MySQL", "Tkinter", "OpenCV"],
    links: [
      { label: "GitHub", url: "https://github.com/zakariaennaqui/Chatbot-MNIST-Sign_language", icon: "github" },
    ],
    highlights: [
      "NLP Chatbot: PyTorch MLP + MySQL + Tkinter GUI",
      "MNIST CNN: 70k digit images, >99% accuracy",
      "Sign Language CNN: 10-class gesture recognition",
      "Hybrid intent detection: DB match + neural network",
      "Full training pipeline built from scratch",
    ],
    accentColor: "#10b981",
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all",    label: "All Projects" },
  { id: "web",    label: "Web Full-Stack" },
  { id: "mobile", label: "Mobile" },
  { id: "ai",     label: "AI & ML" },
  { id: "cloud",  label: "Cloud" },
  { id: "bi",     label: "BI & Data" },
  { id: "db",     label: "Database" },
];

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
    </svg>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section--alt projects">
      <div className="container">
        <div className="projects__header">
          <div className="section__eyebrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            Portfolio
          </div>
          <h2 className="section__title">
            Projects & <span>Work</span>
          </h2>
          <p className="section__subtitle">
            {projects.length} projects spanning full-stack web, mobile, AI/ML, cloud infrastructure, Business Intelligence, and database administration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filters" role="tablist" aria-label="Project categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              role="tab"
              aria-selected={active === cat.id}
              className={`projects__filter${active === cat.id ? " projects__filter--active" : ""}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
              <span className="projects__filter-count">
                {cat.id === "all" ? projects.length : projects.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects__grid">
          {filtered.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`projects__card card${project.featured ? " projects__card--featured" : ""}`}
              style={{ "--accent": project.accentColor } as React.CSSProperties}
            >
              {/* Card image */}
              <div className="projects__card-img-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="projects__card-img"
                  loading="lazy"
                />
                <div className="projects__card-img-overlay" />
                <div className="projects__card-badges">
                  <span className="projects__card-year">{project.year}</span>
                  {project.featured && <span className="projects__card-featured">Featured</span>}
                </div>
              </div>

              {/* Card Body */}
              <div className="projects__card-body">
                <div className="projects__card-subtitle">{project.subtitle}</div>
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                {/* Expanded content */}
                {expanded === project.id && (
                  <>
                    <p className="projects__card-longdesc">{project.longDesc}</p>
                    <ul className="projects__highlights">
                      {project.highlights.map((h) => (
                        <li key={h} className="projects__highlight">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Tech logos */}
                <div className="projects__tech-logos">
                  {project.techLogos.map((logo) => (
                    <div key={logo.name} className="projects__tech-logo" title={logo.name}>
                      <img src={logo.src} alt={logo.name} loading="lazy" />
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="projects__tags">
                  {project.tags.slice(0, expanded === project.id ? undefined : 4).map((tag) => (
                    <span key={tag} className="tag tag--blue">{tag}</span>
                  ))}
                  {expanded !== project.id && project.tags.length > 4 && (
                    <span className="tag tag--slate">+{project.tags.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="projects__card-footer">
                <div className="projects__links">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                      aria-label={`${link.label} for ${project.title}`}
                    >
                      {link.icon === "github" ? <GithubIcon /> : <GlobeIcon />}
                      {link.label}
                    </a>
                  ))}
                </div>
                <button
                  className="projects__expand"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  aria-expanded={expanded === project.id}
                  aria-label={expanded === project.id ? "Collapse details" : "Expand details"}
                >
                  {expanded === project.id ? "Less" : "Details"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    style={{ transform: expanded === project.id ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects__github-cta">
          <div className="projects__github-cta-inner">
            <div className="projects__github-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <h3 className="projects__github-cta-title">Explore All Repositories</h3>
              <p className="projects__github-cta-text">More projects, experiments, and contributions on GitHub</p>
            </div>
            <a
              href="https://github.com/zakariaennaqui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              id="github-profile-cta"
            >
              @zakariaennaqui
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

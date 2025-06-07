import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Globe } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React', level: 90, color: '#3B82F6' },
    { name: 'TypeScript', level: 85, color: '#2563EB' },
    { name: 'Node.js', level: 80, color: '#10B981' },
    { name: 'Python', level: 75, color: '#EAB308' },
    { name: 'MongoDB', level: 70, color: '#059669' },
    { name: 'AWS', level: 65, color: '#F97316' }
  ];

  const projects = [
    {
      title: 'Projet Site E-commerce - UML & Génie Logiciel',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'public/images/projects/ecommerce-seamless-scaled.jpg', // Add your image here
      tech: ['HTML', 'CSS', 'JS', 'Node.js', 'UML'],
      github: 'https://github.com/zakariaennaqui/site-ecommerce-uml',
      live: 'https://project.com'
    },
    {
      title: 'Plateforme de Gestion de Parking – React',
      description: 'Plateforme web de gestion de parkings avec réservation, visualisation en temps réel et interface d’administration.',
      image: 'public/images/projects/1746236260346.jpg', // Add your image here
      tech: ['React.js', 'Node.js'],
      github: 'https://github.com/zakariaennaqui/parking-platform',
      live: 'https://parking-platform-two.vercel.app/'
    },
    {
      title: 'Jeu de Paires - Mini Projet Java',
      description: 'Projet académique réalisé dans le cadre du module Java (GI S6 - 2024/2025).Ce jeu de mémoire consiste à retrouver toutes les paires images en un temps limité avec 3 essais',
      image: 'public/images/projects/make-desktop-apps-in-java.jpg', // Add your image here
      tech: ['Java Swing (interface)', 'JDBC + MySQL (base de données, connexion MySQL)', 'Modèle MVC (architecture)'],
      github: 'https://github.com/zakariaennaqui/JeuDePaires',
      live: 'https://jeudepaires.my.canva.site/v3'
    },
    {
      title: 'other projects ...',
      description: 'Explore more of my projects on GitHub, showcasing my skills in web development, software engineering, and more.',
      image: 'public/images/projects/portfolio.png', // Add your image here
      tech: [''],
      github: 'https://github.com/zakariaennaqui',
      live: 'https://mon-portfolio-brown.vercel.app/'
    }
  ];

  const styles = {
    // Navigation
    nav: {
      position: 'fixed' as const,
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      backdropFilter: 'blur(8px)',
      zIndex: 50,
      borderBottom: '1px solid #374151'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #60A5FA, #A855F7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none'
    },
    navLink: {
      color: '#D1D5DB',
      textDecoration: 'none',
      textTransform: 'capitalize' as const,
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '16px'
    },
    navLinkActive: {
      color: '#60A5FA'
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column' as const,
      padding: '20px',
      borderTop: '1px solid #374151'
    },
    mobileMenuLink: {
      color: '#D1D5DB',
      textDecoration: 'none',
      padding: '10px 0',
      textTransform: 'capitalize' as const,
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '16px',
      textAlign: 'left' as const
    },

    // Hero Section
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
      overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
    },
    heroContent: {
      textAlign: 'center' as const,
      zIndex: 10,
      padding: '0 20px'
    },
    heroAvatar: {
      width: '128px',
      height: '128px',
      margin: '0 auto 24px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroAvatarInner: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 5rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #60A5FA, #A855F7, #3B82F6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
      color: '#D1D5DB',
      marginBottom: '32px'
    },
    heroDescription: {
      fontSize: '18px',
      color: '#9CA3AF',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px'
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const
    },
    btnPrimary: {
      padding: '12px 32px',
      background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    btnSecondary: {
      padding: '12px 32px',
      border: '2px solid #3B82F6',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
      backgroundColor: 'transparent'
    },
    chevronDown: {
      position: 'absolute' as const,
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      color: '#9CA3AF'
    },

    // Section
    section: {
      padding: '80px 20px'
    },
    sectionAlt: {
      padding: '80px 20px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center' as const,
      marginBottom: '64px',
      background: 'linear-gradient(135deg, #60A5FA, #A855F7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },

    // About Section
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    },
    aboutImage: {
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column' as const
    },
    aboutText: {
      fontSize: '18px',
      color: '#D1D5DB',
      lineHeight: '1.8',
      marginBottom: '24px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px',
      marginTop: '32px'
    },
    statCard: {
      textAlign: 'center' as const,
      padding: '24px',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      borderRadius: '8px'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#60A5FA',
      marginBottom: '8px'
    },
    statLabel: {
      color: '#9CA3AF'
    },

    // Skills Section
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px'
    },
    skillCard: {
      backgroundColor: '#1F2937',
      padding: '24px',
      borderRadius: '8px'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    skillName: {
      fontSize: '18px',
      fontWeight: '600'
    },
    skillPercent: {
      fontSize: '14px',
      color: '#9CA3AF'
    },
    skillBarBg: {
      width: '100%',
      height: '12px',
      backgroundColor: '#374151',
      borderRadius: '6px',
      overflow: 'hidden'
    },
    skillBar: {
      height: '100%',
      borderRadius: '6px',
      transition: 'width 1s ease-out'
    },

    // Projects Section
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px'
    },
    projectCard: {
      backgroundColor: '#1F2937',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease'
    },
    projectImage: {
      height: '200px',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    projectContent: {
      padding: '24px'
    },
    projectTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '12px'
    },
    projectDescription: {
      color: '#9CA3AF',
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '16px'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '8px',
      marginBottom: '16px'
    },
    techTag: {
      padding: '4px 12px',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      color: '#93C5FD',
      borderRadius: '16px',
      fontSize: '12px'
    },
    projectLinks: {
      display: 'flex',
      gap: '16px'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#9CA3AF',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease'
    },

    // Contact Section
    contactContent: {
      textAlign: 'center' as const
    },
    contactDescription: {
      fontSize: '20px',
      color: '#D1D5DB',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px'
    },
    contactLinks: {
      display: 'flex',
      gap: '24px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      marginBottom: '48px'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 24px',
      backgroundColor: '#3B82F6',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease'
    },
    contactLinkSecondary: {
      backgroundColor: '#374151'
    },
    footer: {
      borderTop: '1px solid #374151',
      paddingTop: '32px',
      color: '#9CA3AF',
      textAlign: 'center' as const
    }
  };

  // Add CSS animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          transform: translateX(-50%) translateY(0);
        }
        40%, 43% {
          transform: translateX(-50%) translateY(-10px);
        }
        70% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
      
      @media (max-width: 768px) {
        .mobile-menu-btn { display: block !important; }
        .nav-links { display: none !important; }
        .mobile-menu.open { display: flex !important; }
        .project-card:hover { transform: none !important; }
        .btn-primary:hover { transform: none !important; }
      }
      
      .nav-links a:hover, .nav-links button:hover { color: #60A5FA; }
      .mobile-menu a:hover, .mobile-menu button:hover { color: #60A5FA; }
      .btn-primary:hover { transform: scale(1.05); }
      .btn-secondary:hover { background-color: rgba(59, 130, 246, 0.1); }
      .project-card:hover { transform: scale(1.05); }
      .project-link:hover { color: white; }
      .contact-link:hover { background-color: #2563EB; }
      .contact-link-secondary:hover { background-color: #4B5563; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="nav-links" style={styles.navLinks}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item ? styles.navLinkActive : {})
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            style={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} style={styles.mobileMenu}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              style={styles.mobileMenuLink}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroAvatar}>
            <div style={styles.heroAvatarInner}>
              <Code size={48} color="#60A5FA" />
            </div>
          </div>
          <h1 style={styles.heroTitle}>Zakaria Ennaqui</h1>
          <p style={styles.heroSubtitle}>Étudiant en Génie Informatique à l'ENSA de Berrechid</p>
          <p style={styles.heroDescription}>
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          <div style={styles.heroButtons}>
            <button
              onClick={() => scrollToSection('projects')}
              style={styles.btnPrimary}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              style={styles.btnSecondary}
              className="btn-secondary"
            >
              Get In Touch
            </button>
            <a
    href="/Cv_ENNAQUI-Zakaria.pdf"
    target="_blank"
    rel="noopener noreferrer"
    style={styles.btnPrimary}
  >
    Voir CV
  </a>
  <a
    href="/Cv_ENNAQUI-Zakaria.pdf"
    download
    style={styles.btnSecondary}
  >
    Télécharger CV
  </a>
          </div>
        </div>
        <div style={styles.chevronDown}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutImage}>
              <img 
                src="public/images/Screenshot_20250604_224438_Gallery.jpg" 
                alt="Your Name"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px'
                }}
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `
                      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                        <svg width="80" height="80" fill="#60A5FA" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                        <p style="color: #9CA3AF; margin-top: 16px;">Your Photo Here</p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <div>
              <p style={styles.aboutText}>
                Étudiant en première année du cycle ingénieur en Génie Informatique à l’École Nationale des Sciences Appliquées de Berrechid (ENSAB), je suis passionné par le développement logiciel, l’architecture des systèmes et les réseaux informatiques.
Grâce à une formation polyvalente alliant programmation (Java, C, Web, Python), bases de données, génie logiciel et systèmes d’exploitation, je développe une solide culture d’ingénieur.
              </p>
              <p style={styles.aboutText}>
                Je suis actuellement à la recherche d’un stage d’initiation pour découvrir le milieu professionnel, consolider mes compétences techniques et contribuer à des projets concrets.
N’hésitez pas à me contacter !
              </p>
              <div style={styles.statsGrid}>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>4+</div>
                  <div style={styles.statLabel}>Projects Completed</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statNumber}>0+</div>
                  <div style={styles.statLabel}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
          <div style={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} style={styles.skillCard}>
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div style={styles.skillBarBg}>
                  <div
                    style={{
                      ...styles.skillBar,
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard} className="project-card">
                <div style={styles.projectImage}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = `
                            <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                              <svg width="48" height="48" fill="#60A5FA" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                          `;
                        }
                      }}
                    />
                  ) : (
                    <Globe size={48} color="#60A5FA" />
                  )}
                </div>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.techTags}>
                    {project.tech.map((tech) => (
                      <span key={tech} style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={styles.projectLinks}>
                    <a
                      href={project.github}
                      style={styles.projectLink}
                      className="project-link"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      style={{ ...styles.projectLink, color: '#60A5FA' }}
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={styles.contactContent}>
            <h2 style={styles.sectionTitle}>Let's Work Together</h2>
            <p style={styles.contactDescription}>
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            
            <div style={styles.contactLinks}>
              <a
                href="mailto:zakariaennaqui.pro@gmail.com"
                style={styles.contactLink}
                className="contact-link"
              >
                <Mail size={20} />
                zakariaennaqui.pro@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-ennaqui-990883362"
                style={{ ...styles.contactLink, ...styles.contactLinkSecondary }}
                className="contact-link contact-link-secondary"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/zakariaennaqui"
                style={{ ...styles.contactLink, ...styles.contactLinkSecondary }}
                className="contact-link contact-link-secondary"
              >
                <Github size={20} />
                GitHub Profile
              </a>
            </div>

            <div style={styles.footer}>
              <p>© 2024 Zakaria Ennaqui. Built with React, TypeScript & CSS.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
import { Github, ExternalLink, Globe } from "lucide-react";
import { projects } from "../../data/projects";
import "./Projects.css";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="projects__card">
              <div className="projects__image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <Globe size={48} color="#60A5FA" />
                )}
              </div>

              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                <div className="projects__tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="projects__tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="projects__links">
                  <a href={project.github} className="projects__link" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a href={project.live} className="projects__link projects__link--live" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

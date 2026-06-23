import { Mail, Linkedin, Github } from "lucide-react";
import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact__content">
          <h2 className="section__title">Let's Work Together</h2>
          <p className="contact__description">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>

          <div className="contact__links">
            <a
              href="mailto:zakariaennaqui.pro@gmail.com"
              className="contact__link contact__link--primary"
            >
              <Mail size={20} />
              zakariaennaqui.pro@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/zakaria-ennaqui-990883362"
              className="contact__link contact__link--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/zakariaennaqui"
              className="contact__link contact__link--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>

          <div className="contact__footer">
            <p>© 2024 Zakaria Ennaqui. Built with React, TypeScript & CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

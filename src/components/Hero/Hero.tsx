import { Code, ChevronDown } from "lucide-react";
import "./Hero.css";

interface HeroProps {
  onScrollTo: (section: string) => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__avatar">
          <div className="hero__avatar-inner">
            <Code size={48} color="#60A5FA" />
          </div>
        </div>

        <h1 className="hero__title">Zakaria Ennaqui</h1>
        <p className="hero__subtitle">4th-year Computer Engineering student at ENSA Berrechid</p>
        <p className="hero__description">
          Crafting digital experiences with modern technologies and creative solutions
        </p>

        <div className="hero__buttons">
          <button className="btn btn--primary" onClick={() => onScrollTo("projects")}>
            View My Work
          </button>
          <button className="btn btn--secondary" onClick={() => onScrollTo("contact")}>
            Get In Touch
          </button>
          <a
            href="/Cv_ENNAQUI_Zakaria.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Voir CV
          </a>
          <a href="/Cv_ENNAQUI_Zakaria.pdf" download className="btn btn--secondary">
            Télécharger CV
          </a>
        </div>
      </div>

      <div className="hero__chevron">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

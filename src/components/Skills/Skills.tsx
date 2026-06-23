import { skills } from "../../data/skills";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Skills & Technologies</h2>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skills__card">
              <div className="skills__header">
                <span className="skills__name">{skill.name}</span>
              </div>
              <div className="skills__bar-bg">
                <div
                  className="skills__bar"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import skills from "../data/skills";
import Reveal from "../components/Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">~/skills</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            The tools and technologies I use to design, build and ship complete web
            applications.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 70} className="skills__card">
              <span className="skills__card-path">{group.path}</span>
              <h3 className="skills__card-title">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__list-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

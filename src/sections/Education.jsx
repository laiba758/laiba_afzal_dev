import { GraduationCap } from "lucide-react";
import education from "../data/education";
import Reveal from "../components/Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section className="section education">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">~/education</div>
          <h2 className="section-title">Education</h2>
        </Reveal>

        <Reveal className="education__card">
          <div className="education__icon">
            <GraduationCap size={22} />
          </div>
          <div className="education__info">
            <h3 className="education__degree">{education.degree}</h3>
            <p className="education__uni">{education.university}</p>
            <p className="education__college">{education.college}</p>

            <div className="education__learning">
              {education.learning.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

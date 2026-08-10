import { Code2, Layers, Rocket } from "lucide-react";
import Reveal from "../components/Reveal";
import "./About.css";

const CORE_AREAS = [
  "React.js",
  "JavaScript",
  "Laravel",
  "PHP",
  "MySQL",
  "REST APIs",
  "Responsive Web Design",
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__text">
          <div className="eyebrow">~/about</div>
          <h2 className="section-title">Building Digital Solutions With Code &amp; Creativity</h2>
          <p className="about__para">
            I&rsquo;m a BS Computer Science graduate and Full-Stack Developer with hands-on
            experience building complete web applications. I work across both frontend and
            backend, turning ideas and requirements into functional, responsive and
            user-friendly products.
          </p>
          <p className="about__para">
            My core stack is React.js on the frontend and Laravel, PHP and MySQL on the
            backend, connected through clean REST APIs. I care as much about how an interface
            feels to use as I do about how reliably the system behind it runs.
          </p>

          <div className="about__stack">
            {CORE_AREAS.map((area) => (
              <span key={area} className="tag">
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="about__card">
          <div className="about__card-row">
            <div className="about__card-icon">
              <Layers size={20} />
            </div>
            <div>
              <h3 className="about__card-title">End-to-End Ownership</h3>
              <p className="about__card-text">
                From database schema to the last pixel in the browser.
              </p>
            </div>
          </div>
          <div className="about__card-row">
            <div className="about__card-icon">
              <Code2 size={20} />
            </div>
            <div>
              <h3 className="about__card-title">Readable, Maintainable Code</h3>
              <p className="about__card-text">
                Structured for the next developer, including future me.
              </p>
            </div>
          </div>
          <div className="about__card-row">
            <div className="about__card-icon">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="about__card-title">Built to Ship</h3>
              <p className="about__card-text">
                Practical decisions that move a project toward production.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

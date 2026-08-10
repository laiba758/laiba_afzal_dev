import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">~/projects</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A closer look at what I&rsquo;ve built end-to-end — from database design to the
            interface a user actually touches.
          </p>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

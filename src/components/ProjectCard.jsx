
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import "./ProjectCard.css";

export default function ProjectCard({ project, reverse = false }) {
  return (
    <article
      className={`project-card ${
        reverse ? "project-card--reverse" : ""
      }`}
    >
      {/* Project Images */}
      <div className="project-card__visual">
        {/* Main Screenshot */}
        <div className="project-card__main-image">
          <img
            src={project.image}
            alt={project.name}
            className="project-card__image"
          />
        </div>

        {/* Screenshot Thumbnails */}
        <div className="project-card__thumbs">
          {project.screenshots?.slice(1, 4).map((screenshot, index) => (
            <div
              key={index}
              className="project-card__thumb"
              title={screenshot.title}
            >
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="project-card__thumb-image"
              />

              <span>{screenshot.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="project-card__content">
        <span className="project-card__eyebrow">
          {project.tagline}
        </span>

        <h3 className="project-card__title">
          {project.name}
        </h3>

        <p className="project-card__desc">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="project-card__tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="project-card__features">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="project-card__feature"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Project Actions */}
        {/* 
        <div className="project-card__actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--sm"
          >
            View Live Project
            <ArrowUpRight size={15} />
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost btn--sm"
          >
            View Code
            <GithubIcon size={15} />
          </a>
        </div>
        */}
      </div>
    </article>
  );
}


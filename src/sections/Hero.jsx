import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import socialLinks from "../data/socialLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__label">
            <span className="hero__label-dot" />
            FULL-STACK DEVELOPER
          </div>

          <h1 className="hero__heading">
            I Build Modern Web Experiences That Turn Ideas Into
            <span className="hero__heading-accent"> Working Products.</span>
          </h1>

          <p className="hero__sub">
            Full-Stack Developer specializing in React.js, Laravel, PHP and MySQL. I build
            responsive websites, dashboards, APIs and complete web applications.
          </p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&rsquo;s Work Together
            </a>
          </div>

          <div className="hero__socials">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hero__social-link">
              <GithubIcon size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hero__social-link">
              <LinkedinIcon size={18} />
            </a>
            <a href={socialLinks.fiverr} target="_blank" rel="noreferrer" aria-label="Fiverr profile" className="hero__social-link hero__social-link--text">
              Fiverr <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-topbar">
              <span /><span /><span />
              <span className="hero__card-path">developer.jsx</span>
            </div>
            <pre className="hero__card-code">
<code>{`const developer = {
  name: 'Laiba Afzal',
  role: 'Full-Stack Developer',
  stack: ['React', 'Laravel',
          'PHP', 'MySQL'],
  focus: 'clean UI + reliable
          backend systems',
  status: 'available for work'
};`}</code>
            </pre>
          </div>
          <div className="hero__badge hero__badge--top">
            <span className="hero__badge-dot" />
            Available for freelance work
          </div>
          <div className="hero__badge hero__badge--bottom">React.js &middot; Laravel &middot; MySQL</div>
        </div>
      </div>
    </section>
  );
}

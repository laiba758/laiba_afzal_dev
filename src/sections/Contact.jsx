import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import socialLinks from "../data/socialLinks";
import Reveal from "../components/Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__panel">
          <div className="contact__glow" aria-hidden="true" />
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            ~/contact
          </div>
          <h2 className="contact__heading">Have a Project in Mind? Let&rsquo;s Build It.</h2>
          <p className="contact__sub">
            Whether you need a responsive website, custom web application, dashboard or
            complete full-stack solution, let&rsquo;s discuss your idea.
          </p>

         <div className="contact__ctas">
  <a
    href={socialLinks.fiverr}
    target="_blank"
    rel="noreferrer"
    className="btn btn--primary"
  >
    Start a Project
  </a>

  {/* <a
    href={`mailto:${socialLinks.email}`}
    className="btn btn--ghost"
  >
    Contact Me
  </a> */}
</div>

          <div className="contact__links">
            <a href={socialLinks.fiverr} target="_blank" rel="noreferrer" className="contact__link">
              Fiverr <ArrowUpRight size={13} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="contact__link">
              <LinkedinIcon size={15} /> LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="contact__link">
              <GithubIcon size={15} /> GitHub
            </a>
            <a href={`mailto:${socialLinks.email}`} className="contact__link">
              <Mail size={15} /> {socialLinks.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

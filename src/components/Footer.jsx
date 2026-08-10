import socialLinks from "../data/socialLinks";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">
          Laiba<span className="footer__logo-dot">.</span>Afzal
        </span>
        <p className="footer__copy">
          &copy; {year} Laiba Afzal. Full-Stack Developer &mdash; React.js &amp; Laravel.
        </p>
        <div className="footer__links">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.fiverr} target="_blank" rel="noreferrer">
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}

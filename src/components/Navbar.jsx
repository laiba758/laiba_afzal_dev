import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          Laiba<span className="navbar__logo-dot">.</span>Afzal
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
            Hire Me
          </a>
          <button
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--primary btn--full" onClick={() => setOpen(false)}>
          Hire Me
        </a>
      </div>
    </header>
  );
}

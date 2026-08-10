import { Check } from "lucide-react";
import whyWorkWithMe from "../data/whyWorkWithMe";
import Reveal from "../components/Reveal";
import "./WhyWorkWithMe.css";

export default function WhyWorkWithMe() {
  return (
    <section className="section why">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            ~/why-me
          </div>
          <h2 className="section-title">Why Clients Choose a Full-Stack Approach</h2>
        </Reveal>

        <div className="why__grid">
          {whyWorkWithMe.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="why__card">
              <div className="why__icon">
                <Check size={16} />
              </div>
              <div>
                <h3 className="why__title">{item.title}</h3>
                <p className="why__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

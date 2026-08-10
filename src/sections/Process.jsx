import processSteps from "../data/process";
import Reveal from "../components/Reveal";
import "./Process.css";

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">~/process</div>
          <h2 className="section-title">My Development Process</h2>
          <p className="section-subtitle">
            A straightforward sequence I follow on every project, from first conversation to
            final delivery.
          </p>
        </Reveal>

        <div className="process__timeline">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 70} className="process__item">
              <span className="process__step">{step.step}</span>
              <div className="process__body">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__desc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

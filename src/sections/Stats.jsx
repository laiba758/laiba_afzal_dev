import stats from "../data/stats";
import Reveal from "../components/Reveal";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="stats__item">
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

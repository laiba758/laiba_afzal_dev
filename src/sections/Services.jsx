import {
  Layers3,
  Atom,
  Server,
  Plug,
  MonitorSmartphone,
  LayoutDashboard,
  Database,
  Code2,
  Smartphone,
  Radio,
  Map,
  Bot,
} from "lucide-react";

import services from "../data/services";
import Reveal from "../components/Reveal";
import "./Services.css";

const ICONS = {
  fullstack: Layers3,
  react: Atom,
  reactnative: Smartphone,
  bootstrap: Code2,
  laravel: Server,
  api: Plug,
  responsive: MonitorSmartphone,
  dashboard: LayoutDashboard,
  websockets: Radio,
  googlemaps: Map,
  aiintegration: Bot,
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">

        <Reveal>
          <div className="services__header">
            <span className="services__eyebrow">
              ~ /services
            </span>

            <h2 className="services__heading">
              How I Can Help Your Business
            </h2>

            <p className="services__subtitle">
              Focused services covering the full lifecycle of a web
              application, from the first interface to the backend that
              runs it.
            </p>
          </div>
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = ICONS[service.id];

            return (
              <Reveal
                key={service.id}
                delay={i * 60}
                className="services__card"
              >
                <div className="services__icon">
                  {Icon && <Icon size={22} />}
                </div>

                <h3 className="services__title">
                  {service.name}
                </h3>

                <p className="services__desc">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
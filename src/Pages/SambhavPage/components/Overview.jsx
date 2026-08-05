import {
  BarChart3,
  BellRing,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  Eye,
  FileText,
  Flag,
  HeartPulse,
  Home,
  MessageSquareText,
  Target,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Link } from "../lib/router.jsx";
import { aboutCards, modules } from "../data/siteData.js";

const aboutIconMap = {
  Mission: Target,
  Vision: Eye,
  Objectives: Flag,
  Overview: FileText,
};

const moduleIconMap = {
  heart: HeartPulse,
  message: MessageSquareText,
  clipboard: ClipboardCheck,
  thumbs: ThumbsUp,
  bar: BarChart3,
  users: Users,
  file: FileText,
  bell: BellRing,
  home: Home,
  help: CircleHelp,
};

export default function Overview() {
  const featuredModules = modules.slice(0, 8);

  return (
    <section className="section overview-section" id="about">
      <div className="container overview-layout">
        <article className="overview-card about-overview" data-reveal>
          <div className="compact-heading">
            <h2>
              About <span>SAMBHAV</span>
            </h2>
          </div>
          <p className="overview-card__intro">
            SAMBHAV is a holistic HR & Welfare platform developed for CRPF. It ensures efficient service delivery,
            transparency, and real-time monitoring of welfare initiatives.
          </p>

          <div className="mini-feature-grid">
            {aboutCards.map((card) => {
              const Icon = aboutIconMap[card.title] ?? CheckCircle2;
              return (
                <div className="mini-feature" key={card.title}>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <h3>{card.title === "Overview" ? "Key Focus" : card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link className="button button--primary button--panel" to="/about">
            <span>Know More About SAMBHAV</span>
            <span className="button-panel__arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </article>

        <article className="overview-card modules-overview" id="modules" data-reveal>
          <div className="overview-anchor" id="technology" aria-hidden="true" />
          <div className="compact-heading">
            <h2>
              Our Platform <span>Modules</span>
            </h2>
          </div>
          <div className="compact-module-grid">
            {featuredModules.map((module) => {
              const Icon = moduleIconMap[module.icon] || CheckCircle2;
              return (
                <Link className="module-card home-module-card" to="/modules" key={module.title}>
                  <div className={`module-card__icon accent-${module.color}`}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                  <span className="module-card__link">
                    Explore
                    <span className="module-card__arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

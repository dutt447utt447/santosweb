import { BarChart3, Eye, HeartPulse, Radio, ShieldCheck, ThumbsUp, TimerReset, Users } from "lucide-react";
import { impactItems } from "../data/siteData.js";

const impactIconMap = {
  heart: HeartPulse,
  timer: TimerReset,
  shield: ShieldCheck,
  eye: Eye,
  broadcast: Radio,
  chart: BarChart3,
  thumb: ThumbsUp,
  users: Users,
};

export default function Impact() {
  return (
    <section className="section impact-section" id="impact">
      <div className="container">
        <div className="section-heading" data-reveal>
          <h2>
            Impact at a <span>Glance</span>
          </h2>
        </div>

        <div className="impact-grid">
          {impactItems.map((item, index) => {
            const Icon = impactIconMap[item.icon];
            return (
              <article className="impact-card" data-reveal key={`${item.value}-${item.label}`}>
                <div className="impact-card__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="impact-card__icon">
                  <Icon size={34} aria-hidden="true" />
                </div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

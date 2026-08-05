import { Eye, Lock, Server, Star, TimerReset, TrendingUp, Trophy, Users } from "lucide-react";
import { achievementItems } from "../data/siteData.js";

const achievementIconMap = {
  users: Users,
  lock: Lock,
  trending: TrendingUp,
  server: Server,
  timer: TimerReset,
  eye: Eye,
};

export default function Achievements() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Recognition</span>
          <h2>Achievements & Recognition</h2>
          <p>
            SAMBHAV is positioned as a high-impact digital initiative focused on speed, security, transparency, and
            welfare outcomes.
          </p>
        </div>

        <div className="achievements-layout">
          <article className="award-card" data-reveal>
            <div className="award-card__shine" aria-hidden="true" />
            <div className="award-card__icon">
              <Trophy size={72} aria-hidden="true" />
            </div>
            <h3>Champion IT Project</h3>
            <strong>Recognised for Digital Innovation</strong>
            <div className="award-card__stars" aria-label="Five gold stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={22} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p>
              A modern public-service technology effort designed to improve welfare access, accelerate service delivery,
              and strengthen transparency for CRPF personnel and families.
            </p>
          </article>

          <div className="achievement-grid">
            {achievementItems.map((item) => {
              const Icon = achievementIconMap[item.icon];
              return (
                <article className="achievement-card" data-reveal key={item.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{item.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

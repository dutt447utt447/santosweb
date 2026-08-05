import { CheckCircle2 } from "lucide-react";
import crpfLeadershipImage from "../../../assets/sambhav/images/CRPF.jpeg";
import sambhavLogo from "../../../assets/sambhav/images/logo.png";
import sunilDuttImage from "../../../assets/sambhav/images/SunilDuttImage.webp";
import vitulKumarImage from "../../../assets/sambhav/images/VitulKumar.webp";
import { leadership, teamMembers } from "../data/siteData.js";

const memberPhotoMap = {
  "Vitul Kumar": vitulKumarImage,
  "Sunil Dutt": sunilDuttImage,
};

export default function Leadership() {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">People Behind the Platform</span>
          <h2>Leadership & Core Development Team</h2>
          <p>
            A coordinated leadership and engineering structure keeps the platform aligned with official needs, security
            expectations, and user experience quality.
          </p>
        </div>

        <article className="leadership-card" data-reveal>
          <div className="officer-placeholder">
            <img src={crpfLeadershipImage} alt="CRPF leadership team" />
          </div>
          <div className="leadership-card__content">
            {/* <span className="badge">
              <BadgeCheck size={16} aria-hidden="true" />
              CRPF IT Team
            </span> */}
            <h3>{leadership.name}</h3>
            <p className="leadership-card__designation">{leadership.designation}</p>
            <blockquote>{leadership.quote}</blockquote>
          </div>
        </article>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" data-reveal key={member.role}>
              <div className="team-card__avatar team-card__avatar--photo">
                <img
                  src={memberPhotoMap[member.name] || sambhavLogo}
                  alt={`${member.name} profile`}
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <span className="badge badge--green">
                  <CheckCircle2 size={15} aria-hidden="true" />
                  Core Development Team
                </span>
                <h3>{member.name}</h3>
                <strong>{member.role}</strong>
                {/* <p>
                  <Building2 size={15} aria-hidden="true" />
                  {member.department}
                </p>
                <ul>
                  {member.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

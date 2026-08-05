import {
  BarChart3,
  BellRing,
  BookOpen,
  BusFront,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Download,
  FileText,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  IdCard,
  MailCheck,
  Network,
  Phone,
  Route,
  ScanLine,
  ShieldCheck,
  Smartphone,
  UserCheck,
  UsersRound,
  Wallet,
} from "lucide-react";

const iconMap = {
  bell: BellRing,
  "book-open": BookOpen,
  bus: BusFront,
  calendar: CalendarCheck,
  chart: BarChart3,
  clipboard: ClipboardCheck,
  database: Database,
  download: Download,
  file: FileText,
  graduation: GraduationCap,
  "hand-heart": HandHeart,
  heart: HeartPulse,
  home: Home,
  "id-card": IdCard,
  "mail-check": MailCheck,
  network: Network,
  phone: Phone,
  route: Route,
  scan: ScanLine,
  shield: ShieldCheck,
  smartphone: Smartphone,
  "user-check": UserCheck,
  users: UsersRound,
  wallet: Wallet,
};

function RichIcon({ name }) {
  const Icon = iconMap[name] || CheckCircle2;

  return (
    <span className="rich-card__icon">
      <Icon size={26} aria-hidden="true" />
    </span>
  );
}

export function ContentGrid({ eyebrow, title, description, items, columns = "three", variant = "default" }) {
  return (
    <section className={`section rich-section rich-section--${variant}`}>
      <div className="container">
        <div className="section-heading" data-reveal>
          {eyebrow && <span className="section-kicker">{eyebrow}</span>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className={`rich-grid rich-grid--${columns}`}>
          {items.map((item) => (
            <article className="rich-card" data-reveal key={item.title}>
              <RichIcon name={item.icon} />
              {item.meta && <span className="rich-card__meta">{item.meta}</span>}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailRows({ eyebrow, title, description, items, variant = "default" }) {
  return (
    <section className={`section detail-section detail-section--${variant}`}>
      <div className="container">
        <div className="section-heading" data-reveal>
          {eyebrow && <span className="section-kicker">{eyebrow}</span>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div className="detail-row-list">
          {items.map((item, index) => (
            <article className="detail-row" data-reveal key={item.title}>
              <span className="detail-row__number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.points && (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import HeroBG from "../../../assets/sambhav/images/HeroBG.png";
import sambhavLogo from "../../../assets/sambhav/images/logo.png";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="page-hero">
      <img className="page-hero__background" src={HeroBG} alt="" aria-hidden="true" />
      <div className="container page-hero__inner" data-reveal>
        <div className="page-hero__copy">
          {eyebrow && <span className="section-kicker">{eyebrow}</span>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
        <div className="page-hero__brand" aria-hidden="true">
          <img src={sambhavLogo} alt="" />
          <strong>SAMBHAV</strong>
          <span>Integrated HR & Welfare Platform</span>
        </div>
      </div>
    </section>
  );
}

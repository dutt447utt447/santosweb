import { useEffect, useRef, useState } from "react";
import { Code2, Database, HandHeart, MonitorUp, Trophy, UserRoundCheck } from "lucide-react";
import { statistics } from "../data/siteData.js";

const statIconMap = {
  trophy: Trophy,
  family: UserRoundCheck,
  code: Code2,
  database: Database,
  service: HandHeart,
  monitor: MonitorUp,
};

function StatValue({ item, shouldAnimate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || typeof item.value !== "number") return undefined;

    const duration = 1100;
    const start = performance.now();
    let frame;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(item.value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [item.value, shouldAnimate]);

  if (item.displayValue) {
    return (
      <>
        {item.prefix && <em>{item.prefix}</em>}
        <strong>{item.displayValue}</strong>
      </>
    );
  }

  return (
    <>
      {item.prefix && <em>{item.prefix}</em>}
      <strong>
        {count}
        {item.suffix}
      </strong>
    </>
  );
}

export default function Statistics() {
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section section section--compact" id="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-card glass-card">
          {statistics.map((item) => {
            const Icon = statIconMap[item.icon];
            return (
              <article className="stat-item" key={item.label}>
                <div className={`stat-item__icon accent-${item.accent}`}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <StatValue item={item} shouldAnimate={shouldAnimate} />
                <span>{item.label}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

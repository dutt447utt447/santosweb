import "./About.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBalanceScale,
  FaCheckCircle,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Secure Platform",
    desc: "Enterprise-grade security with reliable transfer workflows.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Policy Driven",
    desc: "Every transfer follows predefined CRPF policies.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Transparent Process",
    desc: "Improves visibility and reduces manual intervention.",
  },
  {
    icon: <FaServer />,
    title: "Scalable Architecture",
    desc: "Built to support large-scale organizational operations.",
  },
];

const checklist = [
  "Transparent Transfer Process",
  "Policy-Based Automation",
  "Secure Workflow",
  "Enterprise Architecture",
  "High Availability",
  "Scalable Platform",
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-badge">About SANTOS</span>

          <h2 className="about-title">
            Transforming Annual Transfers
            <span> Through Digital Innovation.</span>
          </h2>

          <p className="about-text">
            SANTOS (System for Annual Transfer Operating System) is an
            enterprise platform developed for CRPF to modernize, automate and
            simplify the annual transfer process through secure, transparent and
            policy-based digital workflows.
          </p>

          <p className="about-text">
            The platform minimizes manual effort, improves operational
            efficiency and enables a scalable, technology-driven ecosystem for
            organization-wide transfer management.
          </p>

          <div className="about-list">
            {checklist.map((item) => (
              <div className="list-item" key={item}>
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a className="about-btn" href="/about-us">
            Learn More
            <FaArrowRight />
          </a>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mission-card">
            <div className="mission-header">
              <span className="mission-badge">Our Mission</span>

              <h3>
                Building a Fair, Secure & Digital Transfer Ecosystem
              </h3>
            </div>

            <div className="mission-grid">
              {features.map((item) => (
                <div className="mission-item" key={item.title}>
                  <div className="mission-icon">{item.icon}</div>

                  <div className="mission-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mission-footer">
              <span>Built for CRPF</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

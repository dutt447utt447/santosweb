import "./About.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaBalanceScale,
  FaProjectDiagram,
  FaServer,
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

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="about-badge">
            ABOUT SANTOS
          </span>

          <h2 className="about-title">
            Transforming Annual Transfers
            <span> Through Digital Innovation.</span>
          </h2>

          <p className="about-text">
            SANTOS (System for Annual Transfer Operating System)
            is an enterprise platform developed for CRPF to
            modernize, automate and simplify the annual transfer
            process through secure, transparent and policy-based
            digital workflows.
          </p>

          <p className="about-text">
            The platform minimizes manual effort, improves
            operational efficiency and enables a scalable,
            technology-driven ecosystem for organization-wide
            transfer management.
          </p>

          <div className="about-list">

            <div className="list-item">
              <FaCheckCircle />
              <span>Transparent Transfer Process</span>
            </div>

            <div className="list-item">
              <FaCheckCircle />
              <span>Policy-Based Automation</span>
            </div>

            <div className="list-item">
              <FaCheckCircle />
              <span>Secure Workflow</span>
            </div>

            <div className="list-item">
              <FaCheckCircle />
              <span>Enterprise Architecture</span>
            </div>

            <div className="list-item">
              <FaCheckCircle />
              <span>High Availability</span>
            </div>

            <div className="list-item">
              <FaCheckCircle />
              <span>Scalable Platform</span>
            </div>

          </div>

          <button className="about-btn">
            Learn More
            <FaArrowRight />
          </button>

        </motion.div>

        {/* RIGHT PANEL */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mission-card">

            <div className="mission-header">

              <span className="mission-badge">
                OUR MISSION
              </span>

              <h3>
                Building a Fair,
                Secure & Digital
                Transfer Ecosystem
              </h3>

            </div>

            <div className="mission-grid">

              {features.map((item, index) => (
                <div className="mission-item" key={index}>

                  <div className="mission-icon">
                    {item.icon}
                  </div>

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
};

export default About;
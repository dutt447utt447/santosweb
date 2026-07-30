import React from "react";
import { motion } from "framer-motion";

import {
  FaClipboardList,
  FaCode,
  FaAward,
  FaRocket,
} from "react-icons/fa";

import "./DevelopmentJourney.css";

const journeyData = [
  {
    year: "2022",
    title: "Planning & Requirement Analysis",
    icon: <FaClipboardList />,
    description:
      "The foundation of SANTOS was established by understanding CRPF transfer policies, analysing operational challenges and designing a secure enterprise architecture.",

    points: [
      {
        title: "Requirement Analysis",
        description:
          "Studied existing transfer workflows and identified opportunities for automation.",
      },
      {
        title: "Architecture Design",
        description:
          "Designed a scalable and secure enterprise architecture for long-term growth.",
      },
      {
        title: "Project Planning",
        description:
          "Prepared implementation roadmap, module planning and execution strategy.",
      },
    ],
  },

  {
    year: "2023",
    title: "Core Development",
    icon: <FaCode />,
    description:
      "Focused on building the core platform with secure modules, optimized workflows and seamless integration across the entire ecosystem.",

    points: [
      {
        title: "Module Development",
        description:
          "Developed secure business modules with optimized backend workflows.",
      },
      {
        title: "System Integration",
        description:
          "Integrated multiple services into one unified enterprise platform.",
      },
      {
        title: "Quality Assurance",
        description:
          "Performed testing and validation to ensure system reliability.",
      },
    ],
  },

  {
    year: "2024",
    title: "Champion IT Project",
    icon: <FaAward />,
    description:
      "SANTOS achieved enterprise readiness and received recognition for innovation, digital transformation and operational excellence.",

    points: [
      {
        title: "Innovation Recognition",
        description:
          "Recognized for delivering an impactful digital transformation solution.",
      },
      {
        title: "Enterprise Deployment",
        description:
          "Successfully deployed across organizational operations.",
      },
      {
        title: "Performance Optimization",
        description:
          "Enhanced speed, security and scalability across the platform.",
      },
    ],
  },

  {
    year: "Present",
    title: "Enterprise Platform",
    icon: <FaRocket />,
    description:
      "Today, SANTOS continues to evolve with enterprise-grade security, continuous innovation and scalable digital infrastructure.",

    points: [
      {
        title: "Scalable Platform",
        description:
          "Built to support large-scale organizational operations efficiently.",
      },
      {
        title: "Continuous Enhancement",
        description:
          "Regular improvements based on operational requirements and feedback.",
      },
      {
        title: "Future Ready",
        description:
          "Designed for long-term sustainability with modern technologies.",
      },
    ],
  },
];

function DevelopmentJourney() {
  return (
    <section className="development-journey" id="journey">

      <div className="journey-container">

        <motion.div
          className="journey-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="journey-tag">
            DEVELOPMENT JOURNEY
          </span>

          <h2>
            Building Excellence Through
            <span> Continuous Innovation</span>
          </h2>

          <p>
            Every milestone reflects our commitment to building
            a secure, transparent and enterprise-grade transfer
            ecosystem for CRPF. From planning and architecture
            to nationwide deployment, SANTOS continues to evolve
            with innovation at its core.
          </p>

        </motion.div>

        <div className="journey-timeline">

          <div className="timeline-line" aria-hidden="true"></div>

          {journeyData.map((item, index) => (

            <motion.div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="timeline-connector" aria-hidden="true"></div>
              <span className="timeline-center-dot" aria-hidden="true"></span>

              <div className="timeline-node" aria-hidden="true">
                {item.icon}
              </div>

              <div className="journey-card">

                <div className="journey-meta">
                  <span className="journey-step">Step {index + 1}</span>
                  <span className="journey-year">{item.year}</span>
                </div>

                <h3 className="journey-title">
                  {item.title}
                </h3>

                <p className="journey-description">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default DevelopmentJourney;

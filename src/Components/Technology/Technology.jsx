import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCloud,
  FaCubes,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";

import "./Technology.css";

const technologies = [
  {
    icon: <FaGlobe />,
    title: "Modern UI Framework",
    category: "Frontend",
    badge: "High Performance",
    description:
      "Delivers a fast, responsive and interactive user experience with modern component-based architecture.",

    features: [
      "Component Based",
      "Responsive Design",
      "Dynamic UI",
      "Optimized Rendering",
    ],
  },

  {
    icon: <FaServer />,
    title: "Enterprise Backend",
    category: "Backend Services",
    badge: "Enterprise Grade",
    description:
      "Manages business logic, APIs and enterprise workflows with robust scalability and reliability.",

    features: [
      "RESTful APIs",
      "Service Oriented",
      "Business Logic",
      "Scalable Architecture",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "Relational Database",
    category: "Data Management",
    badge: "Reliable Storage",
    description:
      "Manages enterprise data securely with structured storage, high integrity and transactional compliance.",

    features: [
      "Data Integrity",
      "Optimized Queries",
      "Secure Storage",
      "High Reliability",
    ],
  },

  {
    icon: <FaShieldAlt />,
    title: "Secure Authentication",
    category: "Security Layer",
    badge: "Protected Access",
    description:
      "Provides secure authentication and authorization ensuring trusted access across the platform.",

    features: [
      "Token Based Auth",
      "Authorization",
      "Role Based Access",
      "Secure Login",
    ],
  },

  {
    icon: <FaCloud />,
    title: "Cloud Infrastructure",
    category: "Hosting & Infra",
    badge: "Cloud Native",
    description:
      "Offers scalable cloud infrastructure with high availability and enterprise deployment capabilities.",

    features: [
      "Cloud Hosting",
      "Auto Scaling",
      "High Availability",
      "Disaster Recovery",
    ],
  },

  {
    icon: <FaCubes />,
    title: "Container Platform",
    category: "Deployment",
    badge: "Production Ready",
    description:
      "Enables consistent deployments across development, testing and production environments.",

    features: [
      "Containerized Apps",
      "Automated Deployment",
      "Environment Isolation",
      "Scalable Infra",
    ],
  },

  {
    icon: <FaChartLine />,
    title: "System Monitoring",
    category: "Observability",
    badge: "Live Monitoring",
    description:
      "Tracks infrastructure and services using real-time dashboards and intelligent alerting systems.",

    features: [
      "Live Metrics",
      "Alerts",
      "Dashboards",
      "Performance Tracking",
    ],
  },

  {
    icon: <FaChartBar />,
    title: "Analytics Platform",
    category: "Business Intelligence",
    badge: "Data Driven",
    description:
      "Transforms operational data into executive dashboards, reports and actionable business insights.",

    features: [
      "Analytics",
      "Executive Reports",
      "KPIs",
      "Visualization",
    ],
  },
];
function Technology() {
  return (
    <section className="technology-stack" id="technology">

      <div className="technology-container">

        {/* ==========================
            SECTION HEADER
        ========================== */}

        <motion.div
          className="technology-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="technology-tag">
            TECHNOLOGY STACK
          </span>

          <h2>
            Powered by
            <span> Modern Enterprise Technologies</span>
          </h2>

          <p>
            SANTOS is built using a modern enterprise technology stack
            designed to deliver high performance, security, scalability
            and reliability. Every technology plays a vital role in
            building a secure and future-ready digital ecosystem.
          </p>

        </motion.div>

        {/* ==========================
            TECHNOLOGY GRID
        ========================== */}

        <div className="technology-grid">

          {technologies.map((tech, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
                              <div className="technology-card">

                {/* Badge */}

                <span className="technology-badge">
                  {tech.badge}
                </span>

                {/* Icon */}

                <div className="technology-icon">
                  {tech.icon}
                </div>

                {/* Category */}

                <span className="technology-category">
                  {tech.category}
                </span>

                {/* Title */}

                <h3 className="technology-title">
                  {tech.title}
                </h3>

                {/* Description */}

                <p className="technology-description">
                  {tech.description}
                </p>

                {/* Features */}

                <div className="technology-features">

                  {tech.features.map((feature, i) => (

                    <div
                      className="technology-feature"
                      key={i}
                    >
                      <span className="feature-dot"></span>

                      <span>{feature}</span>

                    </div>

                  ))}

                </div>

              </div>

                   </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Technology;
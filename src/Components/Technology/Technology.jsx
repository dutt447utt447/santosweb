import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaDocker,
  FaAws,
  FaChartBar,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiGrafana,
  
} from "react-icons/si";

import "./Technology.css";

const technologies = [
  {
    icon: <FaReact />,
    title: "React",
    category: "Frontend Framework",
    badge: "High Performance",
    description:
      "Provides a fast, responsive and interactive user interface using reusable components and Virtual DOM.",

    features: [
      "Component Based",
      "Virtual DOM",
      "Responsive UI",
      "High Performance",
    ],
  },

  {
    icon: <SiSpringboot />,
    title: "Spring Boot",
    category: "Backend Framework",
    badge: "Enterprise Secure",
    description:
      "Handles business logic, REST APIs and enterprise workflows with scalability and reliability.",

    features: [
      "REST APIs",
      "Secure Services",
      "Business Logic",
      "Scalable Architecture",
    ],
  },

  {
    icon: <SiPostgresql />,
    title: "PostgreSQL",
    category: "Database",
    badge: "Reliable Storage",
    description:
      "Stores enterprise data securely with optimized queries, high integrity and ACID compliance.",

    features: [
      "ACID Compliance",
      "Optimized Queries",
      "Secure Storage",
      "High Reliability",
    ],
  },

  {
    icon: <FaJava />,
    title: "JWT Security",
    category: "Authentication",
    badge: "Protected Access",
    description:
      "Implements secure authentication and authorization ensuring trusted access across the platform.",

    features: [
      "JWT Tokens",
      "Authorization",
      "Role Based Access",
      "Secure Login",
    ],
  },

  {
    icon: <FaAws />,
    title: "AWS Cloud",
    category: "Infrastructure",
    badge: "Cloud Native",
    description:
      "Provides scalable cloud infrastructure with high availability and enterprise deployment capabilities.",

    features: [
      "Cloud Hosting",
      "Auto Scaling",
      "High Availability",
      "Disaster Recovery",
    ],
  },

  {
    icon: <FaDocker />,
    title: "Docker",
    category: "Containerization",
    badge: "Production Ready",
    description:
      "Ensures consistent deployments across development, testing and production environments.",

    features: [
      "Containers",
      "Easy Deployment",
      "Isolation",
      "Scalable",
    ],
  },

  {
    icon: <SiGrafana />,
    title: "Grafana",
    category: "Monitoring",
    badge: "Live Monitoring",
    description:
      "Tracks infrastructure, servers and services using real-time dashboards and intelligent alerts.",

    features: [
      "Live Metrics",
      "Alerts",
      "Dashboards",
      "Performance Tracking",
    ],
  },

 {
  icon: <FaChartBar />,
  title: "Power BI",
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
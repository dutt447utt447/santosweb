import React from "react";
import { motion } from "framer-motion";

import {
  FaTrophy,
  FaUsers,
  FaClipboardCheck,
  FaGlobe,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

import "./QuickStats.css";
function QuickStats() {

  const quickStats = [
    {
      icon: <FaTrophy />,
      value: "Champion IT Project 2024",
      title: "National Recognition",
      description:
        "Awarded Champion IT Project 2024 for delivering an innovative and transparent transfer management platform for CRPF.",
    },
    {
      icon: <FaUsers />,
      value: "59,557+",
      title: "Transfers Processed",
      description:
        "Successfully processed over 59,557 transfer requests through a fully digital and automated workflow.",
    },
    {
      icon: <FaClipboardCheck />,
      value: "59,482+",
      title: "Choices Submitted",
      description:
        "Employees submitted their transfer preferences online, ensuring transparency and eliminating manual paperwork.",
    },
    {
      icon: <FaGlobe />,
      value: "25,000+",
      title: "Concurrent Users",
      description:
        "The platform efficiently handled more than 25,000 users simultaneously without performance degradation.",
    },
    {
      icon: <FaDatabase />,
      value: "281",
      title: "Database Tables",
      description:
        "Built on a robust database architecture with 281 optimized tables to manage enterprise-scale operations.",
    },
    {
      icon: <FaCogs />,
      value: "505",
      title: "Stored Procedures",
      description:
        "Implemented 505 optimized stored procedures to automate complex business rules and ensure high-performance processing.",
    },
  ];
    return (
    <section className="quickstats-section" id="quick-stats">
      <div className="quickstats-container">

        <motion.div
          className="quickstats-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="quickstats-badge">
            SANTOS HIGHLIGHTS
          </span>

          <h2 className="quickstats-title">
            SANTOS Impact <span>at a Glance</span>
          </h2>

          <p className="quickstats-description">
            SANTOS has transformed the CRPF transfer process through
            automation, transparency and enterprise-grade engineering.
            These key achievements reflect the platform's scale,
            reliability and measurable impact across the organization.
          </p>
        </motion.div>

        <div className="quickstats-grid">
                    {quickStats.map((item, index) => (
            <motion.div
              key={index}
              className="quickstats-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="quickstats-icon">
                {item.icon}
              </div>

              <h3 className="quickstats-value">
                {item.value}
              </h3>

              <h4 className="quickstats-card-title">
                {item.title}
              </h4>

              <p className="quickstats-card-description">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
              </div>
    </section>
  );
}

export default QuickStats;

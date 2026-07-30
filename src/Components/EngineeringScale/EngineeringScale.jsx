import React from "react";
import { motion } from "framer-motion";

import {
  FaServer,
  FaShieldAlt,
  FaUsers,
  FaCloud,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";

import "./EngineeringScale.css";

const scaleData = [
  {
    icon: <FaServer />,
    value: "99.9%",
    title: "System Uptime",
    description:
      "Reliable enterprise infrastructure ensuring uninterrupted availability for mission-critical operations.",
  },

  {
    icon: <FaUsers />,
    value: "1M+",
    title: "Users Supported",
    description:
      "Designed to serve millions of users with consistent speed and performance.",
  },

  {
    icon: <FaShieldAlt />,
    value: "100%",
    title: "Enterprise Security",
    description:
      "Role-based access control, encrypted communication and secure authentication.",
  },

  {
    icon: <FaCloud />,
    value: "24×7",
    title: "Cloud Availability",
    description:
      "Always available cloud infrastructure with automated monitoring and recovery.",
  },

  {
    icon: <FaBolt />,
    value: "<1 Sec",
    title: "Fast Response",
    description:
      "Optimized backend architecture delivers lightning-fast response times.",
  },

  {
    icon: <FaChartLine />,
    value: "500+",
    title: "Institutions Connected",
    description:
      "Scalable platform supporting schools, universities and enterprise organizations.",
  },
];

function EngineeringScale() {
  return (    <section className="engineering-scale" id="engineering-scale">

      <div className="engineering-container">

        {/* ==========================
            SECTION HEADER
        ========================== */}

        <motion.div
          className="engineering-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="engineering-tag">
            ENGINEERING SCALE
          </span>

          <h2>
            Built for
            <span> Enterprise Scale & Reliability</span>
          </h2>

          <p>
            SANTOS is engineered to handle enterprise-grade workloads with
            exceptional reliability, high availability, robust security and
            seamless scalability. Every component is optimized to deliver
            consistent performance across organizations of every size.
          </p>

        </motion.div>

        {/* ==========================
            SCALE GRID
        ========================== */}

        <div className="engineering-grid">

          {scaleData.map((item, index) => (

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
                              <div className="engineering-card">

                {/* Icon */}

                <div className="engineering-icon">
                  {item.icon}
                </div>

                {/* Value */}

                <h3 className="engineering-value">
                  {item.value}
                </h3>

                {/* Title */}

                <h4 className="engineering-title">
                  {item.title}
                </h4>

                {/* Description */}

                <p className="engineering-description">
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

export default EngineeringScale;

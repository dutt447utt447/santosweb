import React from "react";
import { motion } from "framer-motion";

import {
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import leader from "../../assets/santos/images/vitul.png";

import "./Leadership.css";

const leadershipValues = [
  {
    icon: <FaLightbulb />,
    title: "Visionary Leadership",
    tag: "Strategic Vision",
    description:
      "Guiding SANTOS Software with a long-term vision focused on innovation, digital transformation and sustainable enterprise growth for institutions across India.",
  },

  {
    icon: <FaRocket />,
    title: "Innovation First",
    tag: "Future Ready",
    description:
      "Continuously adopting modern technologies and engineering best practices to build secure, scalable and future-ready enterprise software solutions.",
  },

  {
    icon: <FaUsers />,
    title: "People Centric",
    tag: "Customer Success",
    description:
      "Every product is designed around user experience, collaboration and measurable value, ensuring organizations achieve operational excellence.",
  },

  {
    icon: <FaHandshake />,
    title: "Trusted Partnership",
    tag: "Long-Term Trust",
    description:
      "Building lasting relationships through transparency, accountability, reliable support and an unwavering commitment to customer success.",
  },
];

function Leadership() {
  return (
          <section className="leadership" id="leadership">
        <div className="leadership-container">

          <motion.div
            className="leadership-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="leadership-tag">
              Leadership & Vision
            </span>

            <h2>
              Meet the Vision Behind <span>SANTOS Software</span>
            </h2>

            <p>
              Strong leadership drives innovation, inspires teams and builds
              technology that creates lasting value. At SANTOS Software, every
              solution is guided by a commitment to excellence, customer success
              and continuous digital transformation.
            </p>
          </motion.div>

          <div className="leadership-content">

            {/* Left Side */}
            <motion.div
              className="leader-showcase"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="leader-image-wrapper">
                <div className="leader-glow"></div>

                <img
                  src={leader}
                  alt="Vitul Kumar"
                  className="leader-image"
                />

                <div className="leader-badge">
                  Founder & CEO
                </div>
              </div>

              <div className="leader-info">

                <h3>Vitul Kumar</h3>

                <h4>
                  Founder & Chief Executive Officer
                </h4>

                <p>
                  Vitul Kumar founded SANTOS Software with a vision to create
                  intelligent, scalable and secure digital solutions that help
                  businesses and institutions embrace the future with confidence.
                </p>

                <p>
                  His leadership is driven by innovation, engineering
                  excellence, customer satisfaction and the belief that
                  technology should simplify complexity while delivering
                  measurable business value.
                </p>

                <blockquote className="leader-quote">
                  "Great technology is not just about writing code - it's about
                  creating solutions that empower people, transform organizations
                  and shape a better future."
                </blockquote>

                <div className="leader-highlights">

                  <div className="leader-highlight">
                    <FaCheckCircle />
                    <span>Innovation-Driven Leadership</span>
                  </div>

                  <div className="leader-highlight">
                    <FaCheckCircle />
                    <span>Enterprise Technology Focus</span>
                  </div>

                  <div className="leader-highlight">
                    <FaCheckCircle />
                    <span>Customer-Centric Approach</span>
                  </div>

                  <div className="leader-highlight">
                    <FaCheckCircle />
                    <span>Commitment to Excellence</span>
                  </div>

                </div>

              </div>
            </motion.div>

            {/* Right Side */}
            <div className="leadership-grid">

              {leadershipValues.map((item, index) => (

                <motion.div
                  className="leadership-card"
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                >

                  <div className="leadership-card-icon">
                    {item.icon}
                  </div>

                  <div className="leadership-card-content">

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <span className="leadership-badge">
                      {item.tag}
                    </span>

                  </div>
                                 </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>
  );
}

export default Leadership; 

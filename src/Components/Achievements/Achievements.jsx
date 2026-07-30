import React from "react";
import { motion } from "framer-motion";

import {
  FaTrophy,
  FaMedal,
  FaUsers,
  FaAward,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
} from "react-icons/fa";

import trophy1 from "../../assets/images/trophy1.png";
import trophy2 from "../../assets/images/trophy2.png";
import trophy3 from "../../assets/images/trophy3.png";
import trophy4 from "../../assets/images/trophy4.png";

import "./Achievements.css";
function Achievements() {

  const achievementStory = {
    badge: "OFFICIAL RECOGNITION",

    title: "Champion IT Project 2024",

    description:
      "SANTOS, the CRPF Online Transfer Software, was recognized as the Champion IT Project during the 67th All India Police Duty Meet (AIPDM), held in Lucknow from 12-16 February 2024. Developed by the CRPF IT Team under the leadership of IPS ADG Vitul Kumar, the platform has been successfully transforming the transfer management process since 2022 through automation, transparency, and enterprise-grade digital innovation. The prestigious Champion IT Project Trophy was received by DIG/IT Vijay Kumar on behalf of the CRPF.",

    bronze:
      "Representing CRPF in the Programming Event during the 67th All India Police Duty Meet (AIPDM) 2024, ASI/Tech Sunil Dutt and ASI/Tech Ashok Yadav were honored with the Bronze Medal for their outstanding technical performance.",
  };

  const achievementHighlights = [
    {
      icon: <FaTrophy />,
      title: "Champion IT Project",
      value: "National Recognition",
    },
    {
      icon: <FaMedal />,
      title: "Bronze Medal",
      value: "Programming Event",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Venue",
      value: "Lucknow, Uttar Pradesh",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Event",
      value: "12-16 February 2024",
    },
  ];

  const leadership = [
    {
      role: "Project Leadership",
      name: "IPS ADG Vitul Kumar",
    },
    {
      role: "DIG/IT",
      name: "Vijay Kumar",
    },
    {
      role: "DC/IT",
      name: "Vivek Kumar",
    },
    {
      role: "AC/IT",
      name: "Ashish Rawat",
    },
    {
      role: "ASI/Tech",
      name: "Sunil Dutt",
    },
  ];

  const medalRecipients = [
    "ASI/Tech Sunil Dutt",
    "ASI/Tech Ashok Yadav",
  ];

  const gallery = [
    trophy4,
    trophy3,
    trophy2,
    trophy1,
  ];
    return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">

        {/* Section Heading */}

        <motion.div
          className="achievements-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="achievements-badge">
            {achievementStory.badge}
          </span>

          <h2 className="achievements-title">
            Celebrating <span>Excellence & Recognition</span>
          </h2>

          <p className="achievements-description">
            The journey of SANTOS is marked by innovation, dedication, and
            national-level recognition. These achievements reflect the
            commitment of the CRPF IT Team in delivering a secure,
            transparent, and enterprise-grade digital platform that has
            transformed the transfer management process.
          </p>
        </motion.div>

        {/* Featured Recognition */}

        <motion.div
          className="featured-achievement"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="featured-image">
            <img
              src={trophy4}
              alt="Champion IT Project Trophy"
            />
          </div>

          <div className="featured-content">

            <span className="featured-tag">
              {achievementStory.title}
            </span>

            <h3>
              CRPF Online Transfer Software - SANTOS
            </h3>

            <p>
              {achievementStory.description}
            </p>

            <div className="featured-bronze">

              <FaMedal className="bronze-icon" />

              <p>
                {achievementStory.bronze}
              </p>

            </div>

          </div>

        </motion.div>
                {/* Achievement Highlights */}

        <div className="highlights-grid">

          {achievementHighlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="highlight-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.value}</p>

            </motion.div>
          ))}

        </div>

        {/* Leadership & Core Team */}

        <motion.div
          className="leadership-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="achievement-leadership-header">

            <FaUserTie className="leader-icon" />

            <h3>Project Leadership & Core Development Team</h3>

          </div>

          <div className="achievement-leadership-grid">

            {leadership.map((member, index) => (
              <div
                key={index}
                className="leader-card"
              >

                <span>{member.role}</span>

                <h4>{member.name}</h4>

              </div>
            ))}

          </div>

        </motion.div>

        {/* Bronze Medal Recognition */}

        <motion.div
          className="bronze-recognition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="bronze-header">

            <FaAward className="bronze-award-icon" />

            <h3>Programming Event - Bronze Medal</h3>

          </div>

          <p>
            Representing CRPF in the Programming Event during the
            <strong> 67th All India Police Duty Meet (AIPDM) 2024</strong>,
            the following officers were honored with the
            <strong> Bronze Medal</strong> for their outstanding technical
            performance.
          </p>

          <div className="bronze-members">

            {medalRecipients.map((member, index) => (
              <span className="bronze-member" key={index}>
                <FaMedal />
                {member}
              </span>
            ))}

          </div>

        </motion.div>

        {/* Photo Gallery */}

        <div className="achievement-gallery">
                    {gallery.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={`Achievement ${index + 1}`}
            />
          </motion.div>
        ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;

import React from "react";
import { motion } from "framer-motion";
import {
  FaNewspaper,
  FaArrowRight,
} from "react-icons/fa";
import "./FeaturedIn.css";
const references = [
  {
    title: "Champion IT Project at 67th AIPDM",
    source: "Tech View Team",
    description:
      "Official coverage highlighting SANTOS receiving the Champion IT Project award during the 67th All India Police Duty Meet.",
    link: "https://techviewteam.blogspot.com/2024/02/santos-software-champion-it-project-at.html",
  },
  {
    title: "CRPF's Innovative Transfer Software",
    source: "Tech View Team",
    description:
      "An article explaining the development and transparent transfer process powered by the SANTOS platform.",
    link: "https://techviewteam.blogspot.com/2023/04/crpfs-innovative-transfer-software.html",
  },
  {
    title: "Transparent Transfer System Initiative",
    source: "Tech View Team",
    description:
      "Coverage describing the implementation and impact of SANTOS for CRPF personnel transfers.",
    link: "https://techviewteam.blogspot.com/2023/04/crpf-49.html",
  },
  {
    title: "60,000+ Jawans Benefited by SANTOS",
    source: "Amar Ujala",
    description:
      "National news coverage explaining how SANTOS enabled transparent postings and preferred transfer choices.",
    link: "https://www.amarujala.com/india-news/crpf-more-than-60-000-jawans-transferred-75-percent-staff-get-their-preferred-posting-2023-04-14",
  },
  {
    title: "Software for Transparent Postings",
    source: "Times of India",
    description:
      "Coverage on the software-driven posting system introduced for paramilitary forces to improve transparency.",
    link: "https://timesofindia.indiatimes.com/india/software-to-help-paramilitary-forces-in-transparent-postings/articleshow/86105698.cms",
  },
  {
    title: "Software-Based Transfer Policy",
    source: "The Statesman",
    description:
      "Article highlighting the adoption of a software-based transfer policy for India's paramilitary forces.",
    link: "https://www.thestatesman.com/india/software-based-transfer-policy-paramilitary-forces-soon-1503005495.html",
  },
];
function FeaturedIn() {
  return (
    <section className="featured-section" id="featured-in">
      <div className="featured-container">

        <motion.div
          className="featured-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="featured-badge">
            TRUSTED MEDIA COVERAGE
          </span>

          <h2 className="featured-title">
            Featured In &
            <span> Official References</span>
          </h2>

          <p className="featured-description">
            SANTOS has been featured across trusted publications and official
            media platforms for its innovation in transparent personnel
            transfers and its national recognition as the Champion IT Project
            during the 67th All India Police Duty Meet.
          </p>
        </motion.div>

        <div className="references-grid">
                    {references.map((item, index) => (
          <motion.div
            key={index}
            className="reference-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
          >
            <div className="reference-icon">
              <FaNewspaper />
            </div>

            <span className="reference-source">
              {item.source}
            </span>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reference-btn"
            >
              Read Article
              <FaArrowRight />
            </a>
          </motion.div>
        ))}
                </div>

        <motion.div
          className="references-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            These references highlight the national recognition, innovation,
            and real-world impact of the SANTOS platform through trusted media
            coverage and publicly accessible publications.
          </p>
        </motion.div>

           </div>
    </section>
  );
}

export default FeaturedIn;
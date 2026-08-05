import "./Hero.css";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import { HiOutlineServerStack } from "react-icons/hi2";
import { BsCodeSlash } from "react-icons/bs";

import santosLogo from "../../assets/santos/logos/Santos_logo.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-overlay"></div>

      {/* Watermark */}
    

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="hero-title">
            Transforming
            <br />
            <span>Transfers.</span>
            <br />
            Empowering CRPF.
          </h1>

          <p className="hero-description">
            SANTOS is an intelligent transfer management platform
            developed to automate, simplify and optimize the annual
            transfer process with transparency, speed and accuracy.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-btn"
              href="https://crpf.gov.in/SANTOS"
              target="_blank"
              rel="noreferrer"
            >
              Explore SANTOS
              <FaArrowRight />
            </a>

            <a className="secondary-btn" href="/development-team">
              <FaPlay />
              Development Journey
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="dashboard-card">

            <div className="dashboard-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboard-content">

              <div className="dashboard-logo">
                <img src={santosLogo} alt="SANTOS Logo" />
              </div>

              <h3>SANTOS Platform</h3>

              <p>Smart • Transparent • Efficient</p>

              <div className="dashboard-grid">

                <div className="mini-card">
                  <FaGlobe />
                  <h4>Enterprise</h4>
                  <span>Scale Platform</span>
                </div>

                <div className="mini-card">
                  <FaShieldAlt />
                  <h4>Secure</h4>
                  <span>Architecture</span>
                </div>

                <div className="mini-card">
                  <HiOutlineServerStack />
                  <h4>Robust</h4>
                  <span>Backend Services</span>
                </div>

                <div className="mini-card">
                  <BsCodeSlash />
                  <h4>Modern</h4>
                  <span>Tech Stack</span>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>



    </section>
  );
};

export default Hero;

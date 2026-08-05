import "./Hero.css";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaDatabase,
  FaUsers,
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

            <a className="secondary-btn" href="#journey">
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
                  <FaUsers />
                  <h4>25K+</h4>
                  <span>Concurrent Users</span>
                </div>

                <div className="mini-card">
                  <FaDatabase />
                  <h4>281</h4>
                  <span>Database Tables</span>
                </div>

                <div className="mini-card">
                  <HiOutlineServerStack />
                  <h4>505</h4>
                  <span>Stored Procedures</span>
                </div>

                <div className="mini-card">
                  <BsCodeSlash />
                  <h4>1.99M</h4>
                  <span>Lines of Code</span>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Stats */}
      <div className="hero-stats">

        <div className="stat-box">
          <h2>25K+</h2>
          <p>Concurrent Users</p>
        </div>

        <div className="stat-box">
          <h2>281</h2>
          <p>Database Tables</p>
        </div>

        <div className="stat-box">
          <h2>505</h2>
          <p>Stored Procedures</p>
        </div>

        <div className="stat-box">
          <h2>2022</h2>
          <p>Official Launch</p>
        </div>

      </div>

    </section>
  );
};

export default Hero;

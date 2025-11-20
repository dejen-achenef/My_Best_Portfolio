import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profileImage from "../../assets/img//portfolio/gechPhoto.jpg";
import "./About.css";

const About = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleDownloadCV = () => {
    // Direct download approach - works best for PDFs
    const link = document.createElement("a");
    link.href = "/Dejen_CV.pdf";
    link.download = "Dejen_CV.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const animateCounters = () => {
    const counters = document.querySelectorAll(".about-stat-number");
    const speed = 1.005;

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 90,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="about-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="about-particles">
        <Particles
          id="tsparticles-about"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { quantity: 4 },
              },
            },
            particles: {
              color: { value: "#6c63ff" },
              links: {
                color: "#6c63ff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: "bounce",
              },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: { min: 0.1, max: 0.3 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="about-glass-bg"></div>

      <div className="about-container">
        <motion.div
          className="about-header"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h4 className="about-subtitle" variants={itemVariants}>
            Professional Profile
          </motion.h4>
          <motion.h2 className="about-title" variants={itemVariants}>
            <span className="gradient-text">About</span> Me
          </motion.h2>
        </motion.div>

        <div className="about-grid">
          {/* Image Column */}
          <motion.div
            className="about-image-column"
            initial="hidden"
            animate={controls}
            variants={itemVariants}
          >
            <motion.div
              className="about-profile-inner"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={profileImage}
                alt="Dejen Achenef"
                className="about-profile-img"
                variants={imageVariants}
              />
              <div className="about-profile-glow"></div>
              <div className="about-profile-border"></div>
              <div className="about-profile-dots"></div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="about-content-column"
            initial="hidden"
            animate={controls}
            variants={itemVariants}
          >
            <h3 className="about-content-title">
              Full Stack <span className="text-accent">Developer</span>
            </h3>

            <p className="about-description">
              Crafting digital solutions with precision and innovation. With
              <span className="highlight"> 1+ years</span> experience delivering
              <span className="highlight"> 10+ projects</span> across
              cutting-edge technologies.
            </p>

            <div className="about-info-grid">
              {[
                { icon: <FaUser />, title: "Name", value: "Dejen Achenef" },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "Addis Ababa, Ethiopia",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "dejenacheneffentedese@gmail.com",
                },
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: "+251965920359",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="about-info-card"
                  initial="hidden"
                  animate={controls}
                  variants={itemVariants}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="about-info-icon">{item.icon}</div>
                  <div>
                    <h4 className="about-info-title">{item.title}</h4>
                    <p className="about-info-value">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-stats-grid">
              {[
                { value: 15, label: "Projects" },
                { value: 500, label: "Problem Solved" },
                { value: 1, label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="about-stat-card"
                  initial="hidden"
                  animate={controls}
                  variants={itemVariants}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {console.log(stat.value)}
                  <div className="about-stat-number" data-count={stat.value}>
                    2
                  </div>
                  <div className="about-stat-label">{stat.label}</div>
                  <div className="about-stat-bar">
                    <div className="about-stat-progress"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={handleDownloadCV}
              className="about-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(108, 99, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="about-cta-icon">
                <FaDownload />
              </span>
              <span className="about-cta-text">Download CV</span>
              <div className="about-cta-hover"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

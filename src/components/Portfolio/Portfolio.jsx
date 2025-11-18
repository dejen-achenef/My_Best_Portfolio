import React from "react";
import { motion } from "framer-motion";
import garageImg from "../../assets/img/portfolio/abegarage.png";
// Placeholder images - replace with house-rent-app.png and chat-app.png when files are added
import houseRentImg from "../../assets/img/portfolio/houseRent.jpg";
import chatAppImg from "../../assets/img/portfolio/chat.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Abe Garage Pro",
      description:
        "A revolutionary garage management ecosystem with real-time operational insights.",
      image: garageImg,
      badges: ["Full Stack", "Featured"],
      tags: ["React", "Node.js", "MySQL", "Redux"],
      stats: [
        { value: "98%", label: "Efficiency" },
        { value: "24/7", label: "Uptime" },
      ],
      links: [
        {
          url: "https://abegaragebygizachew.netlify.app",
          text: "Live Experience",
          icon: "rocket",
        },
        { url: "#", text: "Case Study", icon: "journal-code" },
      ],
      categories: ["web", "fullstack", "featured"],
    },
    {
      id: 2,
      title: "House Rent App",
      description:
        "A modern real estate mobile application featuring advanced property search with filters for price range, bedrooms, and bathrooms. Browse featured properties with detailed listings including property images, pricing, square footage, and location information for seamless home finding experience.",
      image: houseRentImg,
      badges: ["Mobile App", "Real Estate"],
      tags: ["Flutter", "Firebase", "Google Maps", "Supabase"],
      stats: [{ value: "100+", label: "Properties" }],
      links: [
        {
          url: "#",
          text: "Live Experience",
          icon: "rocket",
          isApp: true,
        },
      ],
      categories: ["mobile", "fullstack"],
    },
    {
      id: 3,
      title: "Chat App",
      description:
        "A feature-rich real-time messaging application with individual and group chat capabilities. Includes online status indicators, unread message counters, contact management, search functionality, and instant message delivery for seamless communication experience.",
      image: chatAppImg,
      badges: ["Mobile App", "Real-time"],
      tags: ["Flutter", "Firebase", "WebSocket", "Supabase"],
      stats: [{ value: "Real-time", label: "Messaging" }],
      links: [
        {
          url: "#",
          text: "Live Experience",
          icon: "rocket",
          isApp: true,
        },
      ],
      categories: ["mobile", "fullstack"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="cosmic-particle-layer" />

      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h4
            className="section-subtitle shimmer-text"
            variants={itemVariants}
          >
            Crafting Digital Excellence
          </motion.h4>
          <motion.h2 className="section-title" variants={itemVariants}>
            <span className="title-gradient">Masterpiece</span> Projects
          </motion.h2>
          <motion.p className="section-description" variants={itemVariants}>
            Each project is a unique journey where innovation meets execution.
          </motion.p>
        </motion.div>

        <motion.div
          className="portfolio-grid"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`portfolio-item ${project.categories.join(" ")}`}
              variants={itemVariants}
              custom={i}
              whileHover="hover"
            >
              <motion.div className="portfolio-card" variants={hoverVariants}>
                <div className="portfolio-image">
                  <div className="image-overlay" />
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-badge-group">
                    {project.badges.map((badge, idx) => (
                      <div
                        key={`${project.id}-badge-${idx}`}
                        className={`portfolio-badge ${
                          idx === 0 ? "badge-primary" : "badge-accent"
                        }`}
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                  <div className="portfolio-hover-content">
                    <div className="tech-cloud">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={`${project.id}-tag-${idx}`}
                          className="tech-tag floating-tag"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              delay: idx * 0.1,
                              duration: 0.5,
                            },
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>

                  {project.stats && project.stats.length > 0 && (
                    <div className="portfolio-stats">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={`${project.id}-stat-${idx}`}
                          className="stat-item"
                        >
                          <span className="stat-value">{stat.value}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="portfolio-cta">
                    {project.links.map((link, idx) => (
                      <motion.a
                        key={`${project.id}-link-${idx}`}
                        href={link.url}
                        target={link.isApp ? undefined : "_blank"}
                        rel={link.isApp ? undefined : "noopener noreferrer"}
                        className={`btn ${
                          idx === 0
                            ? "btn-magnetic"
                            : "btn-outline btn-magnetic"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          if (link.isApp) {
                            e.preventDefault();
                            alert(
                              "This app is not available in the Play Store yet."
                            );
                          }
                        }}
                      >
                        <span className="btn-hover" />
                        <i className={`bi bi-${link.icon}`} />
                        {link.text}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="cta-text">
            Ready to create something extraordinary together?
          </p>
          <motion.a
            href="#contact"
            className="btn btn-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="glow" />
            {"Let's Build The Future"}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

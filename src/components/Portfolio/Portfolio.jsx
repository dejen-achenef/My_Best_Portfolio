import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import garageImg from "../../assets/img/portfolio/abegarage.png";
// Placeholder images - replace with house-rent-app.png and chat-app.png when files are added
import houseRentImg from "../../assets/img/portfolio/houseRent.jpg";
import chatAppImg from "../../assets/img/portfolio/chat.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const portfolioGridRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Agazh (Startup)",
      description:
        "A digital platform that connects buyers with experts to provide personalized advice on product selection, budgeting, and marketplace recommendations. Built to streamline purchasing decisions and create a revenue-generating consultation model.",
      image: garageImg,
      images: [garageImg, garageImg, garageImg, garageImg],
      badges: ["Backend"],
      tags: ["Nextjs", "TypeScript", "Express", "zod"],
      stats: [],
      links: [
        {
          url: "#",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Case Study", icon: "file-text" },
        { url: "#", text: "", icon: "box-arrow-up-right" },
      ],
      categories: ["backend", "fullstack"],
      systemDescription: "A comprehensive platform that connects buyers with expert consultants for personalized shopping advice. The system uses real-time matching algorithms and secure payment processing to facilitate consultations.",
      skills: [
        { name: "Nextjs", explanation: "Chose Next.js for this project because I needed server-side rendering for SEO optimization and fast page loads, along with API routes for seamless backend integration." },
        { name: "TypeScript", explanation: "Selected TypeScript to ensure type safety across the complex matching algorithms and payment processing logic, reducing bugs in production." },
        { name: "Express", explanation: "Used Express to build a robust REST API that handles user matching, consultation scheduling, and payment processing with high reliability." },
        { name: "zod", explanation: "Implemented Zod for runtime validation of user inputs and API responses, ensuring data integrity throughout the application." },
      ],
    },
    {
      id: 2,
      title: "Document Management System (Freelance)",
      description:
        "Document management system built with Next.js, Express, and Prisma. Features file upload, version control, and user permissions.",
      image: houseRentImg,
      badges: ["Backend"],
      tags: ["Next.js", "Express", "Prisma", "TypeScript", "zod", "Firebase"],
      stats: [],
      links: [
        {
          url: "#",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Case Study", icon: "file-text" },
        { url: "#", text: "", icon: "box-arrow-up-right" },
      ],
      categories: ["backend", "fullstack"],
      images: [houseRentImg, houseRentImg, houseRentImg, houseRentImg],
      systemDescription: "A secure document management system with role-based access control, version tracking, and cloud storage integration. Supports multiple file formats and provides audit trails for compliance.",
      skills: [
        { name: "Next.js", explanation: "Chose Next.js for the frontend because it provides excellent file upload handling and real-time document preview capabilities." },
        { name: "Express", explanation: "Selected Express to build a secure API that handles file uploads, version control, and permission management with proper authentication." },
        { name: "Prisma", explanation: "Used Prisma as the ORM because document management requires complex relational queries for versioning, permissions, and metadata tracking." },
        { name: "TypeScript", explanation: "Implemented TypeScript to ensure type safety across file operations and permission checks, critical for security-sensitive document handling." },
        { name: "zod", explanation: "Used Zod for validating file uploads, user permissions, and API requests to prevent security vulnerabilities." },
        { name: "Firebase", explanation: "Integrated Firebase Storage for scalable file storage and CDN delivery, ensuring fast document access globally." },
      ],
    },
    {
      id: 3,
      title: "Student Consultancy App (Freelance)",
      description:
        "Full-stack consultancy application built with Next.js, Tailwind CSS, Prisma, and TypeScript. Features user management, project tracking, and real-time updates.",
      image: chatAppImg,
      badges: ["Full Stack"],
      tags: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS"],
      stats: [],
      links: [
        {
          url: "#",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Case Study", icon: "file-text" },
        { url: "#", text: "", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "frontend", "backend"],
      images: [chatAppImg, chatAppImg, chatAppImg, chatAppImg],
      systemDescription: "A comprehensive consultancy platform that enables students to connect with educational advisors, track application progress, and receive real-time updates on opportunities worldwide.",
      skills: [
        { name: "Next.js", explanation: "Chose Next.js for this project because it provides excellent performance for displaying educational content and real-time updates, with built-in API routes for backend functionality." },
        { name: "Prisma", explanation: "Selected Prisma because the application requires complex relational data for student profiles, applications, and consultant relationships with efficient querying." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across user management, project tracking, and real-time update systems, reducing errors in critical workflows." },
        { name: "Tailwind CSS", explanation: "Implemented Tailwind CSS for rapid UI development with consistent design system, essential for building a professional consultancy interface." },
      ],
    },
  ];

  // Get filtered projects based on selected category
  const getFilteredProjects = () => {
    if (selectedCategory === null) {
      return projects;
    }
    return projects.filter((project) =>
      project.categories.includes(selectedCategory)
    );
  };

  const filteredProjects = getFilteredProjects();

  // Scroll to portfolio grid when category changes
  useEffect(() => {
    if (selectedCategory !== null && portfolioGridRef.current) {
      setTimeout(() => {
        portfolioGridRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedCategory]);

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

        {/* Category Filter Buttons */}
        <div className="portfolio-categories">
          <motion.button
            className={`portfolio-category-btn ${
              selectedCategory === null ? "category-active" : ""
            }`}
            onClick={() => setSelectedCategory(null)}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button
            className={`portfolio-category-btn ${
              selectedCategory === "fullstack" ? "category-active" : ""
            }`}
            onClick={() => setSelectedCategory("fullstack")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Stack
          </motion.button>
          <motion.button
            className={`portfolio-category-btn ${
              selectedCategory === "backend" ? "category-active" : ""
            }`}
            onClick={() => setSelectedCategory("backend")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </motion.button>
          <motion.button
            className={`portfolio-category-btn ${
              selectedCategory === "frontend" ? "category-active" : ""
            }`}
            onClick={() => setSelectedCategory("frontend")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </motion.button>
        </div>

        <motion.div
          ref={portfolioGridRef}
          className="portfolio-grid"
          key={selectedCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className={`portfolio-item ${project.categories.join(" ")}`}
              variants={itemVariants}
              custom={i}
              whileHover="hover"
            >
              <motion.div className="portfolio-card" variants={hoverVariants}>
                {/* Left Side: Image */}
                <div className="portfolio-image-container">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="portfolio-content">
                  {/* Badges above title */}
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
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="portfolio-tags">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={`${project.id}-tag-${idx}`}
                          className="portfolio-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
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

                  {/* CTA Buttons */}
                  <div className="portfolio-cta">
                    {project.links.map((link, idx) => (
                      <motion.a
                        key={`${project.id}-link-${idx}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link-small"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
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

        {/* Full-Screen Detail Modal */}
        {selectedProject && (() => {
          const project = projects.find((p) => p.id === selectedProject);
          if (!project) return null;
          
          const projectImages = project.images || [project.image];
          const totalImages = projectImages.length;

          const nextImage = () => {
            setCurrentImageIndex((prev) => (prev + 1) % totalImages);
          };

          const prevImage = () => {
            setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
          };

          return (
            <motion.div
              className="fullscreen-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
            >
              <motion.div
                className="fullscreen-modal-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close-button"
                  onClick={() => {
                    setSelectedProject(null);
                    setCurrentImageIndex(0);
                  }}
                  aria-label="Close modal"
                >
                  <i className="bi bi-x-lg" />
                </button>
                
                <div className="modal-content-wrapper">
                  {/* Left: Project Image Slider */}
                  <div className="modal-image-container">
                    <div className="image-slider">
                      {projectImages.map((img, idx) => (
                        <motion.img
                          key={idx}
                          src={img}
                          alt={`${project.title} - Image ${idx + 1}`}
                          className={idx === currentImageIndex ? "active" : ""}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{
                            opacity: idx === currentImageIndex ? 1 : 0,
                            x: idx === currentImageIndex ? 0 : 20,
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      ))}
                      
                      {/* Navigation Arrows */}
                      {totalImages > 1 && (
                        <>
                          <button
                            className="slider-arrow slider-arrow-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              prevImage();
                            }}
                            aria-label="Previous image"
                          >
                            <i className="bi bi-chevron-left" />
                          </button>
                          <button
                            className="slider-arrow slider-arrow-right"
                            onClick={(e) => {
                              e.stopPropagation();
                              nextImage();
                            }}
                            aria-label="Next image"
                          >
                            <i className="bi bi-chevron-right" />
                          </button>
                        </>
                      )}
                      
                      {/* Image Indicators */}
                      {totalImages > 1 && (
                        <div className="image-indicators">
                          {projectImages.map((_, idx) => (
                            <button
                              key={idx}
                              className={`indicator ${idx === currentImageIndex ? "active" : ""}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                              aria-label={`Go to image ${idx + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Project Details */}
                  <div className="modal-details-container">
                    <h2 className="modal-title">{project.title}</h2>

                    {project.systemDescription && (
                      <div className="modal-description-section">
                        <h3 className="section-heading">How It Works</h3>
                        <p className="system-description">{project.systemDescription}</p>
                      </div>
                    )}

                    {project.skills && project.skills.length > 0 && (
                      <div className="modal-skills-section">
                        <h3 className="section-heading">Skills & Technologies</h3>
                        <div className="skills-list">
                          {project.skills.map((skill, idx) => (
                            <div key={idx} className="skill-item">
                              <h4 className="skill-name">{skill.name}</h4>
                              <p className="skill-reason">{skill.explanation}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}

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

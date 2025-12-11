import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiShield,
  FiTool,
  FiServer,
  FiCpu,
  FiSmartphone,
} from "react-icons/fi";
import styles from "./Services.module.css";

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      tech: ["React", "Next.js", "Node.js", "Prisma"],
      description:
        "Beautiful, responsive web applications with modern frameworks and best practices",
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile Application Development",
      tech: ["Flutter", "Supabase", "Firebase"],
      description:
        "Cross-platform mobile applications with modern frameworks and backend services",
    },
    {
      icon: <FiCpu />,
      title: "System Architecture",
      tech: ["Microservices", "CI/CD"],
      description:
        "Scalable and maintainable system designs for growing applications",
    },
    {
      icon: <FiDatabase />,
      title: "Database Design",
      tech: ["PostgreSQL", "MySql", "MongoDB"],
      description:
        "Optimized database structures for performance and reliability",
    },
    {
      icon: <FiServer />,
      title: "Cloud Solutions",
      tech: ["AWS", "Docker"],
      description:
        "Cloud-native applications with seamless deployment and scaling",
    },
    {
      icon: <FiShield />,
      title: "Software Maintenance & Security Solutions",
      tech: ["Bug Fixes", "Optimization", "Encryption", "OAuth"],
      description:
        "Ongoing support, improvements, and robust security measures to protect your data and users",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h4 className={styles.sectionSubtitle} variants={itemVariants}>
            What I Offer
          </motion.h4>
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Professional <span className={styles.gradientText}>Services</span>
          </motion.h2>
          <motion.p className={styles.serviceSubtext} variants={itemVariants}>
            Comprehensive solutions for your software development lifecycle
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.servicesGrid}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(74, 144, 226, 0.2)",
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <div className={styles.techStack}>
                  {service.tech.map((tech, techIndex) => (
                    <motion.span key={techIndex} whileHover={{ scale: 1.05 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

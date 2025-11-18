import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.cosmicParticles} />
      <div className="container">
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.footerLogo}>
            <motion.span
              className={styles.logoCircle}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              D
            </motion.span>
            <span>ejen Achenef</span>
          </div>

          <motion.p
            className={styles.footerText}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            Full Stack Developer creating cosmic digital experiences
          </motion.p>

          <div className={styles.footerSocial}>
            <motion.a
              href="https://github.com/dejen-achenef/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="bi bi-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dejen-achenef/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="bi bi-linkedin"></i>
            </motion.a>
            <motion.a
              href="mailto:dejenacheneffentedese@gmail.com"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="bi bi-envelope"></i>
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/1fk8b3XLvR/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <i className="bi bi-code-square"></i>
            </motion.a>
          </div>
        </motion.div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Dejen Achenef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

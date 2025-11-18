import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.cosmicParticles} />

      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className={styles.sectionSubtitle}
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
            Get In Touch
          </motion.h4>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleGradient}>Contact</span> Information
          </h2>
          <div className={styles.sectionDivider} />
          <p className={styles.sectionDescription}>
            Feel free to reach out through any of these channels. I'm available
            for collaborations and new opportunities.
          </p>
        </motion.div>

        <div className={styles.contactInfoContainer}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div className={styles.contactDetails}>
                <h4>Location</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className={styles.contactDetails}>
                <h4>Email</h4>
                <p>
                  <a href="mailto:dejenacheneffentedese@gmail.com">
                    dejenacheneffentedese@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.contactInfoItem}>
              <div className={styles.contactIcon}>
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className={styles.contactDetails}>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+251965920359">+251965920359</a>
                </p>
              </div>
            </div>

            <div className={styles.contactSocial}>
              <h4>Connect With Me</h4>
              <div className={styles.socialLinks}>
                <motion.a
                  href="https://github.com/dejen-achenef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/dejen-achenef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </motion.a>
                <motion.a
                  href="https://leetcode.com/u/1fk8b3XLvR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="LeetCode"
                >
                  <i className="bi bi-code-square"></i>
                </motion.a>
                <motion.a
                  href="https://codeforces.com/profile/dejen-achenef"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="Codeforces"
                >
                  <i className="bi bi-trophy-fill"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

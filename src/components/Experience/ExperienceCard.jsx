import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const ExperienceCard = ({
  date,
  company,
  role,
  achievements,
  techStack = [],
  index = 0,
}) => {
  return (
    <motion.div
      className={styles.experienceCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Timeline Dot and Line inside card */}
      <div className={styles.cardTimeline}>
        <div className={styles.cardTimelineDot}>
          <div className={styles.cardTimelineDotInner}></div>
          <div className={styles.cardTimelineDotGlow}></div>
        </div>
        <div className={styles.cardTimelineLine}></div>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <div className={styles.cardDate}>{date}</div>
        <h3 className={styles.cardCompany}>{company}</h3>
        <h4 className={styles.cardRole}>{role}</h4>
        
        <ul className={styles.cardAchievements}>
          {achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>

        {techStack.length > 0 && (
          <div className={styles.cardTechStack}>
            {techStack.map((tech, idx) => (
              <span key={idx} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;



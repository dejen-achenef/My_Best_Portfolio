import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Skill.module.css";
import cssimg from "../../assets/img/Skills/css.png";
import nodeimg from "../../assets/img/Skills/nodejs.png";
import expressimg from "../../assets/img/Skills/express.png";
import bootstrapimg from "../../assets/img/Skills/bootstrap.png";
import firebaseimg from "../../assets/img/Skills/firebase.png";
import gitimg from "../../assets/img/Skills/newgit.png";
import htmlimg from "../../assets/img/Skills/html.png";
import myseqlimg from "../../assets/img/Skills/mysql.png";
import reactimg from "../../assets/img/Skills/react.png";
import awsimg from "../../assets/img/Skills/aws.svg";

const skillsByCategory = {
  "Programming Languages": [
    {
      title: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      title: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "Dart",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
  ],
  "Frontend Development": [
    { title: "React", img: reactimg },
    {
      title: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Tailwind CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  "Mobile Development": [
    {
      title: "Flutter",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      title: "Supabase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
    { title: "Firebase", img: firebaseimg },
  ],
  "Backend Development": [
    { title: "Express", img: expressimg },
    { title: "Node.js", img: nodeimg },
    {
      title: "Prisma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
    {
      title: "Supabase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
    { title: "Firebase", img: firebaseimg },
  ],
  "DevOps & Cloud": [
    { title: "AWS", img: awsimg },
    {
      title: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      title: "Kubernetes",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ],
  "Tools & Version Control": [
    { title: "Git", img: gitimg },
    {
      title: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      title: "Prisma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    },
    {
      title: "Supabase",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
    { title: "Firebase", img: firebaseimg },
  ],
  Methodologies: [
    {
      title: "Agile",
      img: null, // Will use placeholder
    },
    {
      title: "Scrum",
      img: null, // Will use placeholder
    },
  ],
  Databases: [
    {
      title: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { title: "MySQL", img: myseqlimg },
    {
      title: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const skillsContainerRef = useRef(null);

  // Get filtered skills based on selected category
  const getFilteredSkills = () => {
    if (selectedCategory === null) {
      // Show all skills
      return Object.entries(skillsByCategory).flatMap(([category, skills]) =>
        skills.map((skill) => ({ ...skill, category }))
      );
    }
    // Show skills from selected category
    return skillsByCategory[selectedCategory].map((skill) => ({
      ...skill,
      category: selectedCategory,
    }));
  };

  const filteredSkills = getFilteredSkills();

  // Calculate global index for animations
  const getGlobalIndex = (skillIndex) => {
    return skillIndex;
  };

  // Scroll to skills container when category changes
  useEffect(() => {
    if (selectedCategory !== null && skillsContainerRef.current) {
      setTimeout(() => {
        const element = skillsContainerRef.current;
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 60; // 60px offset to account for category container
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [selectedCategory]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.cosmicParticles} />

      <motion.div
        className={styles.skillsHeader}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h6
          className={styles.skillsSubtitle}
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
          Expertise
        </motion.h6>
        <h2 className={styles.skillsTitle}>
          Equipped with the knowledge to turn{" "}
          <span className={styles.skillHighlight}>challenges</span> into{" "}
          <span className={styles.skillHighlight}>innovations</span>
        </h2>
      </motion.div>

      <div className={styles.skillsContainerWrapper}>
        {/* Category Headers */}
        <div className={styles.categories}>
          <motion.button
            className={`${styles.cat} ${styles.catAll} ${
              selectedCategory === null ? styles.categoryButtonActive : ""
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
            className={`${styles.cat} ${styles.catProg} ${
              selectedCategory === "Programming Languages" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Programming Languages")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Programming Languages
          </motion.button>
          <motion.button
            className={`${styles.cat} ${styles.catFront} ${
              selectedCategory === "Frontend Development" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Frontend Development")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend Development
          </motion.button>
          <motion.button
            className={`${styles.cat} ${styles.catMobile} ${
              selectedCategory === "Mobile Development" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Mobile Development")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile Development
          </motion.button>
          <motion.button
            className={`${styles.cat} ${styles.catBackend} ${
              selectedCategory === "Backend Development" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Backend Development")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend Development
          </motion.button>
          <div className={styles.emptyCategory}></div>
          <motion.button
            className={`${styles.cat} ${styles.catTools} ${
              selectedCategory === "Tools & Version Control" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Tools & Version Control")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tools & Version Control
          </motion.button>
          <motion.button
            className={`${styles.cat} ${styles.catMethod} ${
              selectedCategory === "Methodologies" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Methodologies")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Methodologies
          </motion.button>
          <motion.button
            className={`${styles.cat} ${styles.catDb} ${
              selectedCategory === "Databases" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("Databases")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Databases
          </motion.button>
          <motion.button
            className={`${styles.cat} ${styles.catDevops} ${
              selectedCategory === "DevOps & Cloud" ? styles.categoryButtonActive : ""
            }`}
            onClick={() => setSelectedCategory("DevOps & Cloud")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DevOps & Cloud
          </motion.button>
        </div>

        {/* Filtered Skills Grid */}
        <motion.div
          ref={skillsContainerRef}
          className={`${styles.allSkillsContainer} ${
            filteredSkills.length <= 6 ? styles.horizontalList : ""
          }`}
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredSkills.map((skill, index) => {
            const currentGlobalIndex = getGlobalIndex(index);
            return (
              <motion.div
                className={styles.skillCard}
                key={`${skill.category}-${skill.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { delay: index * 0.03, duration: 0.5 },
                  y: {
                    duration: 3 + (index % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.05,
                  },
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.skillImage}>
                  {skill.img ? (
                    <img src={skill.img} alt={skill.title} loading="lazy" />
                  ) : (
                    <div className={styles.skillPlaceholder}>
                      {skill.title.charAt(0)}
                    </div>
                  )}
                </div>
                <div className={styles.skillName}>{skill.title}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

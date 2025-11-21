import React from "react";
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

const skills = [
  // Web Development
  { title: "React", img: reactimg },
  {
    title: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  { title: "Node.js", img: nodeimg },
  {
    title: "Prisma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    title: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  // Mobile Development
  {
    title: "Flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    title: "React Native",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Supabase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  { title: "Firebase", img: firebaseimg },
  // Database
  {
    title: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  { title: "MySQL", img: myseqlimg },
  {
    title: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  // Cloud & DevOps
  { title: "AWS", img: awsimg },
  {
    title: "Docker",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    title: "Kubernetes",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  // Additional existing skills
  { title: "Express", img: expressimg },
  { title: "Bootstrap", img: bootstrapimg },
  { title: "Git", img: gitimg },
  {
    title: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  { title: "HTML", img: htmlimg },
  { title: "CSS", img: cssimg },
];

const Skills = () => {
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
        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <motion.div
              className={styles.skillCard}
              key={`${skill.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { delay: index * 0.1, duration: 0.5 },
                y: {
                  duration: 3 + (index % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

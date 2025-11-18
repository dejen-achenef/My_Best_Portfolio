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
import nextjsimg from "../../assets/img/Skills/nextjs.png";
import prismaimg from "../../assets/img/Skills/prisma.png";
import flutterimg from "../../assets/img/Skills/flutter.png";
import reactnativeimg from "../../assets/img/Skills/reactnative.png";
import supabaseimg from "../../assets/img/Skills/supabase.png";
import postgresqlimg from "../../assets/img/Skills/postgresql.png";
import mongodbimg from "../../assets/img/Skills/mongodb.png";
import dockerimg from "../../assets/img/Skills/docker.png";

const skills = [
  // Web Development
  { title: "React", img: reactimg },
  { title: "Next.js", img: nextjsimg },
  { title: "Node.js", img: nodeimg },
  { title: "Prisma", img: prismaimg },
  // Mobile Development
  { title: "Flutter", img: flutterimg },
  { title: "React Native", img: reactnativeimg },
  { title: "Supabase", img: supabaseimg },
  { title: "Firebase", img: firebaseimg },
  // Database
  { title: "PostgreSQL", img: postgresqlimg },
  { title: "MySQL", img: myseqlimg },
  { title: "MongoDB", img: mongodbimg },
  // Cloud & DevOps
  { title: "AWS", img: null }, // AWS icon will use placeholder
  { title: "Docker", img: dockerimg },
  // Additional existing skills
  { title: "Express", img: expressimg },
  { title: "Bootstrap", img: bootstrapimg },
  { title: "Git", img: gitimg },
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
          <div className={styles.skillsTrack}>
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                className={styles.skillCard}
                key={`${skill.title}-${index}`}
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
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      date: "06/2024 – Present",
      company: "Freelance",
      role: "Freelance Software Developer",
      achievements: [
        "Designing, developing, and delivering high-quality software solutions for a variety of clients, focusing on performance, scalability, and maintainable architecture",
        "Translating business requirements into effective technical implementations, building robust backend systems, optimized APIs and databases, and modern front-end interfaces",
        "Ensuring code quality through best practices, testing, and reviews, while introducing automation and process improvements to accelerate delivery and reliability",
        "Combining hands-on development with strategic planning to help clients achieve their goals through tailored, user-focused software products",
      ],
      techStack: ["React", "Next.js", "Node.js", "TypeScript", "Flutter", "Dart", "Firebase", "PostgreSQL", "MongoDB"],
    },
    {
      date: "05/2025 – 12/2025",
      company: "FutureX Technology",
      role: "Senior Software Developer",
      achievements: [
        "Led the design, development, and delivery of complex software solutions, ensuring scalable, high-performance, and maintainable architectures",
        "Guided technical decision-making, mentored junior developers, and collaborated with product managers, designers, and cross-functional teams",
        "Built robust backend systems, optimized APIs and databases, developed modern front-end interfaces, and maintained high code quality through reviews, testing, and best practices",
        "Drove process improvements, introduced automation and tooling enhancements, and supported continuous integration and deployment workflows",
      ],
      techStack: ["React", "Node.js", "TypeScript", "Flutter", "Dart", "Firebase", "PostgreSQL", "AWS", "Docker"],
    },
    {
      date: "10/2025 – 11/2025",
      company: "Mani",
      role: "Automation Developer",
      achievements: [
        "Built and maintained automated tools, scripts, and pipelines that streamline engineering workflows, reduce manual effort, and improve overall operational efficiency",
        "Supported reliable deployments by developing CI/CD pipelines, automated tests, and monitoring systems",
        "Optimized cloud resources such as GCP for performance and cost-effectiveness",
        "Worked closely with cross-functional teams to identify automation opportunities, implement scalable solutions, troubleshoot system issues, and document processes",
      ],
      techStack: ["GCP", "CI/CD", "Automation", "Python"],
    },
    {
      date: "07/2025 – 09/2025",
      company: "Remote Client",
      role: "Backend Engineer",
      achievements: [
        "Worked as a Backend Engineer on a complex e-commerce website, designing and implementing robust, scalable, and secure backend systems",
        "Developed RESTful and GraphQL APIs, managed relational and NoSQL databases, and integrated front-end interfaces, payment gateways, and third-party services",
        "Optimized system performance, implemented authentication and authorization, and maintained high standards of code quality, testing, and security",
        "Used cloud deployment, CI/CD pipelines, and scalable architecture to deliver a reliable solution that supported high traffic, seamless transactions, and excellent user experience",
      ],
      techStack: ["RESTful APIs", "GraphQL", "NoSQL", "CI/CD"],
    },
    {
      date: "03/2025 – 10/2025",
      company: "Habeshacode Software Company",
      role: "Software Developer",
      achievements: [
        "Developed and maintained web and mobile applications with a strong focus on scalable architecture and clean, maintainable code",
        "Implemented both front-end interfaces and back-end functionality using modern technologies to deliver complete end-to-end solutions",
        "Collaborated with cross-functional teams to analyze requirements, design system features, and ensure timely delivery of high-quality software products",
        "Integrated APIs, managed databases, and optimized application performance to enhance usability and reliability",
        "Participated in code reviews, followed Agile development practices, and adhered to industry standards in version control and documentation",
      ],
      techStack: [],
    },
    {
      date: "03/2024 – 09/2025",
      company: "Orizen Technology",
      role: "Full Stack Developer",
      achievements: [
        "Built and maintained web and mobile applications, working across front-end and back-end systems to deliver scalable, high-performance solutions",
        "Developed responsive user interfaces using modern front-end frameworks and implemented robust backend APIs and database solutions",
        "Collaborated with designers and backend engineers to create seamless experiences for users and optimize business processes",
        "Integrated third-party services, implemented authentication systems, and optimized application performance for better user experience",
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    },
    {
      date: "05/2024 – 02/2025",
      company: "Efuye Gela Tech Company",
      role: "Mobile App Developer",
      achievements: [
        "Designed, developed, and deployed cross-platform mobile applications using Flutter that connected users, services, and internal systems",
        "Implemented backend integrations using Firebase for real-time data synchronization, authentication, and cloud storage, while leveraging Supabase for database management",
        "Built responsive user interfaces ensuring consistent experience across Android and iOS platforms with different device sizes",
        "Collaborated with designers and backend engineers to integrate RESTful APIs, optimize performance, and deliver high-quality mobile applications",
      ],
      techStack: ["Flutter", "Firebase", "Supabase", "Android", "iOS"],
    },
    {
      date: "05/2024 – 06/2024",
      company: "Remote Client",
      role: "Frontend Developer",
      achievements: [
        "Worked as a Frontend Developer for a remote client, building a responsive and user-friendly fitness website",
        "Developed interactive interfaces using React, JavaScript, HTML5, and CSS3, ensuring a seamless experience across desktop and mobile devices",
        "Collaborated closely with the client and backend developers to integrate APIs, track user progress, and implement dynamic features such as workout plans, progress dashboards, and interactive forms",
        "Focused on clean, maintainable code, performance optimization, and cross-browser compatibility, delivering a visually appealing and highly functional platform",
      ],
      techStack: ["React", "JavaScript", "HTML5", "CSS3"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="experience" className={styles.experienceSection}>
      <div className={styles.experienceContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h4 className={styles.sectionSubtitle} variants={itemVariants}>
            Career Journey
          </motion.h4>
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            Professional <span className={styles.gradientText}>Experience</span>
          </motion.h2>
          <motion.p className={styles.experienceSubtext} variants={itemVariants}>
            A timeline of my professional growth and achievements
          </motion.p>
        </motion.div>

        <div className={styles.experienceGrid}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}-${index}`}
              date={experience.date}
              company={experience.company}
              role={experience.role}
              achievements={experience.achievements}
              techStack={experience.techStack}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

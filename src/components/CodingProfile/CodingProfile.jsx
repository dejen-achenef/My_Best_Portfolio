import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./style.css";

const CompetitiveCoding = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? 50 : -50,
      rotate: i % 2 === 0 ? 5 : -5,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const platforms = [
    {
      name: "LeetCode",
      logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
      rating: "1500+",
      progress: 85,
      problems: "500+ Problems Solved",
      stats: [
        { value: "76%", label: "Acceptance" },
        { value: "Top 1%", label: "Global Rank" },
      ],
      badges: ["Graph Theory", "System Design"],
      link: "https://leetcode.com/u/1fk8b3XLvR/",
    },
    {
      name: "Codeforces",
      logo: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png",
      rating: "Newbie (1100+)",
      progress: 75,
      problems: "150+ Problems Solved",
      stats: [
        { value: "10+", label: "Contests" },
        { value: "Top 10%", label: "Global Rank" },
      ],
      badges: ["Data Structures", "Greedy Algorithm"],
      link: "https://codeforces.com/profile/dejen-achenef",
    },
    {
      name: "HackerRank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      rating: "2⭐ Gold",
      progress: 90,
      problems: "50+ Problems Solved",
      stats: [
        { value: "30+", label: "Problems" },
        { value: "Top 15%", label: "Global Rank" },
      ],
      badges: ["Python", "Problem Solving"],
      link: "https://www.hackerrank.com/profile/gizachew980",
    },
  ];

  return (
    <motion.section
      className="competitive-coding-section"
      id="coding"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="particle-background">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              background:
                i % 2 === 0
                  ? "var(--cosmic-accent)"
                  : "var(--cosmic-secondary)",
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div className="section-header" variants={containerVariants}>
          <motion.h4 className="section-subtitle" variants={headerVariants}>
            Algorithmic Mastery
          </motion.h4>

          <motion.h2 className="section-title" variants={headerVariants}>
            Competitive Coding <span className="highlight">Achievements</span>
          </motion.h2>

          <motion.p className="section-description" variants={headerVariants}>
            My journey through competitive programming platforms, showcasing
            skills and accomplishments
          </motion.p>
        </motion.div>

        <motion.div className="platforms-grid">
          {platforms.map((platform, i) => (
            <motion.div
              key={`platform-${platform.name}`}
              className="platform-card"
              custom={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(108, 99, 255, 0.25)",
              }}
            >
              <div className="platform-header">
                <div className="platform-logo">
                  <img
                    className="platform-image"
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    loading="lazy"
                  />
                </div>
                <h3 className="platform-title">
                  {platform.name}
                  <span className="rating-badge">{platform.rating}</span>
                </h3>
              </div>

              <div className="platform-content">
                <div className="progress-container">
                  <div className="progress-track">
                    <motion.div
                      className="progress-bar"
                      variants={progressVariants}
                      style={{ width: `${platform.progress}%` }}
                    />
                    <span className="progress-text">{platform.problems}</span>
                  </div>
                </div>

                <div className="stats-grid">
                  {platform.stats.map((stat, statIndex) => (
                    <motion.div
                      className="stat-item"
                      key={`stat-${statIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + statIndex * 0.1 }}
                      whileHover={{
                        y: -5,
                        background: "rgba(108, 99, 255, 0.2)",
                      }}
                    >
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="badge-container">
                  {platform.badges.map((badge, badgeIndex) => (
                    <motion.span
                      key={`badge-${badgeIndex}`}
                      className="badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + badgeIndex * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        background: "var(--cosmic-secondary)",
                      }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  className="platform-button"
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 25px rgba(108, 99, 255, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Profile
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompetitiveCoding;

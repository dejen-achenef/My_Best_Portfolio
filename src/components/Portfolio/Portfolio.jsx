import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import nileodeImg from "../../assets/img/portfolio/nileode_technologies.png";
import nileodeImg1 from "../../assets/img/portfolio/nilode1.png";
import tsedeyDatingImg from "../../assets/img/portfolio/tsedey_dating.png";
import tsedeyDatingImg1 from "../../assets/img/portfolio/tsedey_dating2.png";
import tsedeyDatingImg2 from "../../assets/img/portfolio/tsdey_dating1.png";
import jobPortalImg from "../../assets/img/portfolio/job_portal.png";
import fleetHubImg from "../../assets/img/portfolio/fleethub_car_rent and buy.png";
import myLinksImg from "../../assets/img/portfolio/launch_portfolio.png";
import shalomHmsImg from "../../assets/img/portfolio/shallowm_healthcare_managment_system.png";
import garageMgmtImg from "../../assets/img/portfolio/garage_managment_system.png";
import proScanImg from "../../assets/img/portfolio/proScan.jpg";
import proScanImg1 from "../../assets/img/portfolio/proscan1.jpg";
import proScanImg2 from "../../assets/img/portfolio/proscan2.jpg";
import houseRentImg from "../../assets/img/portfolio/house_rent.png";
import houseRentImg1 from "../../assets/img/portfolio/house_rent1.png";
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState({});
  const portfolioGridRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Nileode Technologies",
      description:
        "A modern technology company website showcasing a dev team that feels like your own. Features a seamless, futuristic design with glassmorphism effects, 3D graphics, and a clean interface. Built to represent a professional development team delivering fast, reliable dev support for solo founders, growing agencies, and ambitious startups. Co-developed as part of the development team.",
      image: nileodeImg,
      badges: ["Full Stack", "Co-Developer"],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen-achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "https://nileode.com/", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "frontend"],
      images: [nileodeImg, nileodeImg1],
      systemDescription: "A comprehensive technology company website that presents Nileode Technologies as a seamless extension of in-house development teams. The system features a modern, futuristic design with glassmorphism effects, 3D abstract graphics, and a clean interface. The website showcases the company's services, works, and team capabilities, designed to attract solo founders, growing agencies, and ambitious startups seeking reliable dev support. Co-developed as part of the development team.",
      skills: [
        { name: "React", explanation: "Chose React for building an interactive and responsive user interface that provides seamless navigation and engaging user experiences across all devices." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, improved SEO, and optimized performance to ensure fast page loads and better search engine visibility." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across the entire application, reducing errors and improving code maintainability for a professional development team." },
        { name: "Tailwind CSS", explanation: "Implemented Tailwind CSS for rapid UI development with a modern, clean design system that creates an engaging and professional user experience with glassmorphism effects." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles dynamic content, user interactions, and ensures optimal performance for the technology company website." },
      ],
    },
    {
      id: 2,
      title: "Tsedey Dating",
      description:
        "A modern dating mobile application that connects people looking for meaningful relationships. Features user profiles, matching algorithms, real-time messaging, and secure authentication. Built with a focus on user safety, privacy, and creating genuine connections in the digital age. Co-developed as part of the development team.",
      image: tsedeyDatingImg,
      badges: ["Mobile", "Co-Developer"],
      tags: ["Flutter", "Dart", "Firebase", "Supabase", "Android", "iOS"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen-achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "https://play.google.com/store/apps/details?id=com.tsedey", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["mobile", "fullstack"],
      images: [tsedeyDatingImg, tsedeyDatingImg1, tsedeyDatingImg2],
      systemDescription: "A comprehensive dating mobile application that enables users to discover and connect with potential matches. The system features user profile creation and management, advanced matching algorithms, real-time messaging, secure authentication, location-based matching, and privacy controls. Built with a focus on user safety, privacy protection, and creating genuine connections in a secure digital environment. Co-developed as part of the development team.",
      skills: [
        { name: "Flutter", explanation: "Chose Flutter for building a cross-platform mobile application that provides native performance on both Android and iOS, with a single codebase for efficient development and maintenance of the dating app." },
        { name: "Dart", explanation: "Used Dart as the programming language for Flutter development, providing strong typing and excellent performance for mobile applications with complex matching and messaging features." },
        { name: "Firebase", explanation: "Integrated Firebase for cloud storage, user authentication, real-time messaging synchronization, and secure data management across multiple devices, ensuring seamless communication and user experience." },
        { name: "Supabase", explanation: "Selected Supabase for database management and backend services, providing secure storage for user profiles, match data, messages, and preferences with real-time capabilities and robust privacy controls." },
        { name: "Android & iOS", explanation: "Developed for both Android and iOS platforms, ensuring wide accessibility and consistent user experience across different mobile devices and operating systems for maximum user reach." },
      ],
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        "A modern job portal platform that connects students and job seekers with their dream careers. Features a clean, intuitive interface with job browsing, application tracking, and user profiles. Built with a focus on user experience and seamless navigation.",
      image: jobPortalImg,
      badges: ["Full Stack"],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen.achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "https://job-portal-whtp.vercel.app/", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "frontend"],
      images: [jobPortalImg, jobPortalImg, jobPortalImg, jobPortalImg],
      systemDescription: "A comprehensive job portal platform that enables students and job seekers to discover opportunities, connect with employers, and track their application progress. The system features advanced search filters, personalized job recommendations, and a streamlined application process.",
      skills: [
        { name: "React", explanation: "Chose React for building interactive and responsive user interfaces that provide seamless job browsing and application experiences across all devices." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, improved SEO for job listings, and optimized performance for fast page loads." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across job listings, user profiles, and application tracking systems, reducing errors and improving code maintainability." },
        { name: "Tailwind CSS", explanation: "Implemented Tailwind CSS for rapid UI development with a modern, clean design system that creates an engaging and professional user experience." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles job postings, user authentication, application submissions, and real-time notifications." },
      ],
    },
    {
      id: 4,
      title: "FleetHub - Car Rental & Sales Platform",
      description:
        "A modern car rental and sales platform that connects customers with verified vehicles. Features AI-powered recommendations, secure payments, and a seamless browsing experience. Built with a focus on user experience and trust.",
      image: fleetHubImg,
      badges: ["Full Stack"],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen.achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "frontend"],
      images: [fleetHubImg, fleetHubImg, fleetHubImg, fleetHubImg],
      systemDescription: "A comprehensive car rental and sales platform that enables users to discover, rent, or buy from thousands of verified vehicles. The system features AI-powered recommendations, secure payment processing, verified listings, and 24/7 customer support to ensure a trusted and seamless experience.",
      skills: [
        { name: "React", explanation: "Chose React for building interactive and responsive user interfaces that provide seamless car browsing, filtering, and booking experiences across all devices." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, improved SEO for car listings, and optimized performance for fast page loads and better search engine visibility." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across car listings, user profiles, booking systems, and payment processing, reducing errors and improving code maintainability." },
        { name: "Tailwind CSS", explanation: "Implemented Tailwind CSS for rapid UI development with a modern, clean design system that creates an engaging and professional user experience with glassmorphism effects." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles car listings, user authentication, booking management, payment processing, and AI-powered recommendations." },
      ],
    },
    {
      id: 5,
      title: "MyLinks - Portfolio Builder Platform",
      description:
        "A no-code portfolio builder platform that enables creators and professionals to launch their portfolios in one click. From template to live site in minutes, showcasing talent without touching a single line of code.",
      image: myLinksImg,
      badges: ["Full Stack"],
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen.achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "frontend"],
      images: [myLinksImg, myLinksImg, myLinksImg, myLinksImg],
      systemDescription: "A comprehensive no-code portfolio builder platform that empowers creators and professionals to create stunning portfolios without any coding knowledge. The system features pre-built templates, drag-and-drop customization, one-click deployment, and real-time preview capabilities to help users showcase their work professionally.",
      skills: [
        { name: "React", explanation: "Chose React for building an interactive and intuitive drag-and-drop interface that allows users to customize their portfolios without coding, providing a seamless user experience." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, fast page loads, and optimized performance to ensure portfolios load quickly and rank well in search engines." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across portfolio templates, user customizations, and deployment systems, reducing errors and improving code maintainability." },
        { name: "Tailwind CSS", explanation: "Implemented Tailwind CSS for rapid UI development with a modern, clean design system that creates beautiful portfolio templates and a professional user interface." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles user authentication, portfolio creation, template management, one-click deployment, and real-time preview generation." },
      ],
    },
    {
      id: 6,
      title: "Shalom HMS - Healthcare Management System",
      description:
        "A comprehensive healthcare management system for Shalom Healthcare Center that seamlessly integrates with diagnostic equipment, pharmacy systems, and electronic health records (EHRs). Delivering world-class medical services with professionalism, empathy, and integrity.",
      image: shalomHmsImg,
      badges: ["Full Stack"],
      tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen.achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "https://healthcaremanagement-dow4.vercel.app/", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "backend"],
      images: [shalomHmsImg, shalomHmsImg, shalomHmsImg, shalomHmsImg],
      systemDescription: "A comprehensive healthcare management system that enables healthcare centers to manage patient records, appointments, departments, services, and FAQs. The system integrates with diagnostic equipment, pharmacy systems, and electronic health records (EHRs) to provide a seamless healthcare experience for both patients and medical staff.",
      skills: [
        { name: "React", explanation: "Chose React for building an intuitive and responsive user interface that provides seamless navigation for patients, doctors, and administrative staff across all departments." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, improved SEO for healthcare services, and optimized performance to ensure fast page loads for critical medical information." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across patient records, medical data, appointment scheduling, and system integrations, critical for healthcare data accuracy and security." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles patient management, appointment scheduling, department services, EHR integration, and secure medical data processing." },
        { name: "PostgreSQL", explanation: "Selected PostgreSQL for secure and reliable storage of sensitive healthcare data, patient records, and medical history with ACID compliance and robust data integrity." },
      ],
    },
    {
      id: 7,
      title: "Autorex - Garage Management System",
      description:
        "A comprehensive car workshop management system for Autorex that handles appointments, order tracking, service management, and customer relations. Working since 1999, helping tune up cars to the next level with professional service management.",
      image: garageMgmtImg,
      badges: ["Full Stack"],
      tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen.achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["fullstack", "backend"],
      images: [garageMgmtImg, garageMgmtImg, garageMgmtImg, garageMgmtImg],
      systemDescription: "A comprehensive garage management system that enables car workshops to manage appointments, track orders, handle service requests, and maintain customer relations. The system features appointment scheduling, order status tracking, service management, and customer communication tools to streamline workshop operations.",
      skills: [
        { name: "React", explanation: "Chose React for building an intuitive and responsive user interface that provides seamless navigation for customers, mechanics, and administrative staff to manage appointments and track orders." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, improved SEO for workshop services, and optimized performance to ensure fast page loads for appointment scheduling and order tracking." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across appointment scheduling, order management, service records, and customer data, critical for accurate workshop operations." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles appointment scheduling, order tracking, service management, customer relations, and workshop operations." },
        { name: "PostgreSQL", explanation: "Selected PostgreSQL for reliable storage of appointment records, order history, service data, and customer information with ACID compliance for data integrity." },
      ],
    },
    {
      id: 8,
      title: "ProScan - Document Scanner & Manager",
      description:
        "A comprehensive mobile document scanner and management app built with Flutter. Features smart scanning, PDF tools, OCR text extraction, ID card scanning, and cloud storage integration. Designed for professionals who need to digitize and manage documents on the go.",
      image: proScanImg,
      badges: ["Mobile"],
      tags: ["Flutter", "Dart", "Firebase", "Supabase", "Android", "iOS"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen-achenef/proscanner",
          text: "GitHub",
          icon: "github",
        },
        { url: "#", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["mobile", "frontend"],
      images: [proScanImg1, proScanImg, proScanImg2],
      systemDescription: "A comprehensive mobile document scanner and management application that enables users to scan, organize, and manage documents efficiently. The app features smart scanning with edge detection, PDF tools for document manipulation, OCR text extraction, ID card scanning, cloud storage integration, and a user-friendly interface for managing recent scans and documents.",
      skills: [
        { name: "Flutter", explanation: "Chose Flutter for building a cross-platform mobile application that provides native performance on both Android and iOS, with a single codebase for efficient development and maintenance." },
        { name: "Dart", explanation: "Used Dart as the programming language for Flutter development, providing strong typing and excellent performance for mobile applications with complex document processing features." },
        { name: "Firebase", explanation: "Integrated Firebase for cloud storage, user authentication, and real-time synchronization of scanned documents across multiple devices, ensuring seamless access to documents anywhere." },
        { name: "Supabase", explanation: "Selected Supabase for database management and backend services, providing secure storage for document metadata, user preferences, and scan history with real-time capabilities." },
        { name: "Android & iOS", explanation: "Developed for both Android and iOS platforms, ensuring wide accessibility and consistent user experience across different mobile devices and operating systems." },
      ],
    },
    {
      id: 9,
      title: "House Rental Platform",
      description:
        "A comprehensive house rental platform that connects property owners with tenants. Features property listings, advanced search filters by city, subcity, price range, and bedrooms, booking management, and secure payment processing. Built to streamline the rental process in Addis Ababa.",
      image: houseRentImg,
      badges: ["Backend"],
      tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      stats: [],
      links: [
        {
          url: "https://github.com/dejen.achenef",
          text: "GitHub",
          icon: "github",
        },
        { url: "https://yba.onrender.com/", text: "Live Demo", icon: "box-arrow-up-right" },
      ],
      categories: ["backend", "fullstack"],
      images: [houseRentImg, houseRentImg1],
      systemDescription: "A comprehensive house rental platform that enables property owners to list their properties and tenants to search, view, and book rental properties. The system features advanced search filters by city, subcity, price range, and number of bedrooms, property management tools, booking calendar, secure payment processing, and user authentication to provide a complete rental marketplace experience.",
      skills: [
        { name: "React", explanation: "Chose React for building an interactive and responsive user interface that provides seamless property browsing, search, and booking experiences across all devices." },
        { name: "Next.js", explanation: "Selected Next.js for server-side rendering capabilities, improved SEO for property listings, and optimized performance to ensure fast page loads for property searches and bookings." },
        { name: "TypeScript", explanation: "Used TypeScript to ensure type safety across property listings, user profiles, booking systems, and payment processing, reducing errors and improving code maintainability." },
        { name: "Node.js", explanation: "Used Node.js to build a robust backend API that handles property listings, user authentication, booking management, payment processing, and advanced search functionality with filters." },
        { name: "PostgreSQL", explanation: "Selected PostgreSQL for reliable storage of property data, user information, booking records, and transaction history with ACID compliance for data integrity." },
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
          <motion.button
            className={`portfolio-category-btn ${
              selectedCategory === "mobile" ? "category-active" : ""
            }`}
            onClick={() => setSelectedCategory("mobile")}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile
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
                  <div className={`portfolio-image ${(project.id === 2 || project.id === 8) ? "portfolio-image-horizontal" : ""}`}>
                    {project.images && project.images.length > 1 && (project.id === 2 || project.id === 8) ? (
                      // Binget Birr and ProScan: Show all images horizontally
                      <div className="portfolio-images-grid">
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} - Image ${idx + 1}`}
                            loading="lazy"
                            className="portfolio-image-item"
                          />
                        ))}
                      </div>
                    ) : project.images && project.images.length > 1 ? (
                      // Other projects with multiple images: Use slider
                      <>
                        {project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} - Image ${idx + 1}`}
                            loading="lazy"
                            className={((cardImageIndices[project.id] ?? 0) === idx || (cardImageIndices[project.id] === undefined && idx === 0)) ? "active" : ""}
                          />
                        ))}
                        <div className="portfolio-image-nav">
                          <button
                            className="portfolio-nav-arrow portfolio-nav-left"
                            onClick={(e) => {
                              e.stopPropagation();
                              const currentIdx = cardImageIndices[project.id] ?? 0;
                              const prevIdx = (currentIdx - 1 + project.images.length) % project.images.length;
                              setCardImageIndices({ ...cardImageIndices, [project.id]: prevIdx });
                            }}
                            aria-label="Previous image"
                          >
                            <i className="bi bi-chevron-left" />
                          </button>
                          <button
                            className="portfolio-nav-arrow portfolio-nav-right"
                            onClick={(e) => {
                              e.stopPropagation();
                              const currentIdx = cardImageIndices[project.id] ?? 0;
                              const nextIdx = (currentIdx + 1) % project.images.length;
                              setCardImageIndices({ ...cardImageIndices, [project.id]: nextIdx });
                            }}
                            aria-label="Next image"
                          >
                            <i className="bi bi-chevron-right" />
                          </button>
                          <div className="portfolio-image-dots">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                className={`portfolio-dot ${((cardImageIndices[project.id] ?? 0) === idx || (cardImageIndices[project.id] === undefined && idx === 0)) ? "active" : ""}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCardImageIndices({ ...cardImageIndices, [project.id]: idx });
                                }}
                                aria-label={`Go to image ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                  <img src={project.image} alt={project.title} loading="lazy" />
                    )}
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
                    {project.links.map((link, idx) => {
                      // Handle GitHub links - use profile if no specific repo
                      if (link.icon === "github" && (link.url === "#" || link.url === "https://github.com/dejen.achenef")) {
                        return (
                          <motion.a
                            key={`${project.id}-link-${idx}`}
                            href="https://github.com/dejen-achenef"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-link-small"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className={`bi bi-${link.icon}`} />
                            {link.text}
                          </motion.a>
                        );
                      }
                      
                      // Handle live demo links without URL - show "Coming Soon" on button
                      if (link.url === "#" && (link.text === "Live Demo" || link.icon === "box-arrow-up-right")) {
                        return (
                          <motion.button
                            key={`${project.id}-link-${idx}`}
                            className="btn btn-link-small"
                            disabled
                            style={{ opacity: 0.7, cursor: "not-allowed" }}
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 1 }}
                          >
                            <i className={`bi bi-${link.icon}`} />
                            Coming Soon
                          </motion.button>
                        );
                      }
                      
                      // Handle other links with "#" - show "Coming Soon" on button
                      if (link.url === "#") {
                        return (
                          <motion.button
                            key={`${project.id}-link-${idx}`}
                            className="btn btn-link-small"
                            disabled
                            style={{ opacity: 0.7, cursor: "not-allowed" }}
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 1 }}
                          >
                            <i className={`bi bi-${link.icon}`} />
                            Coming Soon
                          </motion.button>
                        );
                      }
                      
                      // Handle valid URLs
                      return (
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
                      );
                    })}
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

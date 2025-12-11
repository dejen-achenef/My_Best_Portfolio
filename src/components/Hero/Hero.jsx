import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import "./Hero.css";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [typingText, setTypingText] = useState("");
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const { ref: scrollRef, inView: scrollInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const items = [
    "Software Engineer",
    "Web Architect",
    "Digital Craftsman",
    "Solution Engineer",
    "Cloud Specialist",
    "Tech Innovator",
  ];

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.5,
          scaleMobile: 1.0,
          color: 0x7c413ff,
          backgroundColor: 0x07e13,
          points: 19.0,
          maxDistance: 22.0,
          spacing: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const typeWriter = () => {
      const currentText = items[currentItemIndex];

      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && typingText === currentText) {
        setIsDeleting(true);
        setTypingSpeed(1500);
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, currentItemIndex, isDeleting, typingSpeed]);

  return (
    <section id="hero" className="hero">
      <div ref={vantaRef} className="vanta-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h4 className="hero-subtitle">
              <span className="greeting-text">Hello, I'm</span>
            </h4>
            <h1 className="hero-title">
              <span className="title-gradient">Dejen</span>{" "}
              <span className="title-secondary title-gradient">Achenef</span>
            </h1>
            <div className="typewriter-wrapper">
              <div className="typewriter">
                <span className="typed">{typingText}</span>
                <span className="typewriter-cursor">|</span>
              </div>
            </div>
            <p className="hero-description">
              Transforming visions into exceptional digital experiences through{" "}
              <span className="highlight">innovative engineering</span> and{" "}
              <span className="highlight">elegant design</span>.
            </p>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span className="btn-text">Get In Touch</span>
              <span className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
            </a>
            <a href="#portfolio" className="btn btn-outline">
              <span className="btn-text">View My Work</span>
              <span className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div ref={scrollRef} className="hero-scroll-indicator">
          <div
            className={`scroll-arrow ${scrollInView ? "animate" : ""}`}
          ></div>
          {/* <div className="scroll-hint">Scroll Down</div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

// Components
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import './assets/css/main.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
    window.addEventListener('load', AOS.refresh);
    return () => window.removeEventListener('load', AOS.refresh);
  }, []);

  return (
    <div className="app-container">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <main className="main-content">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary>
          <About />
        </ErrorBoundary>

        <ErrorBoundary>
          <Services />
        </ErrorBoundary>

        <ErrorBoundary>
          <Skills />
        </ErrorBoundary>
        <ErrorBoundary>
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary>
          <Portfolio />
        </ErrorBoundary>

        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;

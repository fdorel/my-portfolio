import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1500);

    // Handle scroll events
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Loading Screen */}
      <div className={`loader ${!loading ? 'hidden' : ''}`}>
        <div className="spinner"></div>
      </div>

      {/* Navigation */}
      <Navbar scrollY={scrollY} />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <Hero />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container about-grid">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-subtitle">What I Know</p>
            <h2 className="section-title gradient-text">Skills & Expertise</h2>
            <div className="section-divider"></div>
          </div>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-subtitle">My Work</p>
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section skills-section">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-subtitle">My Journey</p>
            <h2 className="section-title gradient-text">Experience & Education</h2>
            <div className="section-divider"></div>
          </div>
          <Experience />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header fade-in">
            <p className="section-subtitle">Get In Touch</p>
            <h2 className="section-title gradient-text">Let's Work Together</h2>
            <div className="section-divider"></div>
          </div>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop visible={scrollY > 500} />
    </div>
  );
}

export default App;

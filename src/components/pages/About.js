import React from 'react';
import Hero from '../Hero';
import Content from '../Content'

import { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  // Animate stats when visible
  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger stat animations here if needed
            entry.target.classList.add('animate-stats');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
  ];

  return (
    <div ref={aboutRef} className="about-grid">
      {/* About Image */}
      <div className="about-image-wrapper fade-in">
        <div className="about-image-container">
          <img 
            src="/path-to-your-about-image.jpg" 
            alt="Dinesh Darshan - Developer Portrait"
          />
        </div>
        
        {/* Stats Cards */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card fade-in">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="about-content fade-in">
        <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: 8 }}>About Me</p>
        <h3>A Passionate Developer Based in India 🇮🇳</h3>
        
        <p className="about-text">
          Hi there! I'm Dinesh Darshan, a dedicated Full Stack Developer with a passion for 
          building elegant solutions to complex problems. With expertise in React.js, Node.js, 
          and modern web technologies, I create seamless digital experiences that users love.
        </p>

        <p className="about-text">
          My journey in development started years ago, and since then I've worked on numerous 
          projects ranging from simple websites to complex web applications. I believe in clean 
          code, continuous learning, and pushing boundaries to deliver the best results.
        </p>

        {/* Personal Info Grid */}
        <div className="info-grid">
          <div className="info-item">
            <i className="fas fa-user"></i>
            <span><strong>Name:</strong> Dinesh Darshan</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span><strong>Email:</strong> dineshdarshan@email.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span><strong>Location:</strong> India</span>
          </div>
          <div className="info-item">
            <i className="fas fa-briefcase"></i>
            <span><strong>Status:</strong> Available for Work</span>
          </div>
        </div>

        <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
          Download Resume <i className="fas fa-download"></i>
        </a>
      </div>
    </div>
  );
};

export default About;

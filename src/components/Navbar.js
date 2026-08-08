import { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure this file exists in the same directory

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation links data - update these as needed
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link (mobile only)
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Toggle mobile menu open/close
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    if (newState) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  // Handle link clicks - smooth scroll + close menu on mobile
  const handleLinkClick = (e, href) => {
    if (window.innerWidth <= 968) {
      e.preventDefault();
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }, 100);
    } else {
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span>D</span>inesh<span>D</span>arshan
        </a>

        {/* Navigation Links - Desktop & Mobile */}
        <ul 
          className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`} 
          id="main-navigation"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Overlay - closes menu when clicking outside */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

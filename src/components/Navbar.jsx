import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-logo">MyPortfolio</div>
      
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="hero" smooth={true} duration={500} onClick={closeMobileMenu}>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>About</Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>Projects</Link>
        <Link to="experience" smooth={true} duration={500} onClick={closeMobileMenu}>Experience</Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>Skills</Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>Contact</Link>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Navbar;







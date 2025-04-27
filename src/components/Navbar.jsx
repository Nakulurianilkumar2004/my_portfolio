import { useState, useEffect } from 'react'; // You missed this import!
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-logo">MyPortfolio</div>
      <div className="navbar-links">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="experience" smooth={true} duration={500}>Experience</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;




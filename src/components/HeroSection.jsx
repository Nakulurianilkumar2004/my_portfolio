import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have installed react-router-dom
import './HeroSection.css';
import myImage from '../assets/myImage.jpg'; // Correct the image path to your actual file

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <img src={myImage} alt="Portrait of Nakuluri Anil Kumar" />
        </div>
        <div className="hero-text">
          <h1>
            Hi, I'm <span>NAKULURI ANILKUMAR</span>
          </h1>
          <p>AI Engineer | Full Stack Developer | React Specialist</p>
          <p className="sub-text">Building seamless, interactive web experiences.</p>
          
          {/* Link to Contact Page (Example) */}
          <Link to="/contact">
            <button className="cta-button">Contact Me</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;



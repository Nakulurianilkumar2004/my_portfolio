import React from 'react';
import { FaBrain, FaRobot, FaPython } from 'react-icons/fa';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        
        <div className="experience-item">
          <h3><FaBrain /> AI Intern</h3>
          <p><strong>Company:</strong> Pantech Solutions</p>
          <p><strong>Duration:</strong> 3 Months</p>
          <p><strong>Work:</strong> Completed AI-based projects and hands-on model building.</p>
        </div>

        <div className="experience-item">
          <h3><FaRobot /> Machine Learning Intern</h3>
          <p><strong>Company:</strong> Pantech Solutions</p>
          <p><strong>Duration:</strong> 3 Months</p>
          <p><strong>Work:</strong> Completed projects related to machine learning algorithms and applications.</p>
        </div>

        <div className="experience-item">
          <h3><FaPython /> Python Intern</h3>
          <p><strong>Company:</strong> Pantech Solutions</p>
          <p><strong>Duration:</strong> 3 Months</p>
          <p><strong>Work:</strong> Completed Python development projects focusing on real-world applications.</p>
        </div>

      </div>
    </section>
  );
}

export default Experience;



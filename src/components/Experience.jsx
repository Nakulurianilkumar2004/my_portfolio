import React from 'react';
import './Experience.css'; // You can create this CSS file later if you want styling

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>AI Intern</h3>
          <p><strong>Company:</strong> Pantech Solutions</p>
          <p><strong>Duration:</strong> 2 Months</p>
          <p><strong>Work:</strong> Worked on AI-based projects and hands-on model building.</p>
        </div>

        <div className="experience-item">
          <h3>AI Research Intern</h3>
          <p><strong>Company:</strong> Research Commons</p>
          <p><strong>Duration:</strong> 3 Months</p>
          <p><strong>Work:</strong> Worked on innovative research topics in Machine Learning.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;



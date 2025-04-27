import React from 'react';
import { Code, Database, Server } from 'lucide-react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <p className="skills-description">
        As an aspiring AI Engineer and skilled Frontend Developer, I have expertise in various technologies that span across different layers of development. 
        Here are some of the core areas I'm proficient in:
      </p>
      <div className="skills-grid">
        {/* Frontend Skills */}
        <div className="skill-card frontend">
          <Code size={40} />
          <h3>Frontend Development</h3>
          <p>React.js, HTML, CSS, JavaScript, TypeScript, Responsive Design, UI/UX Principles</p>
        </div>

        {/* Database Skills */}
        <div className="skill-card database">
          <Database size={40} />
          <h3>Database</h3>
          <p>MySQL, MongoDB, Firebase, NoSQL, SQL</p>
        </div>

        {/* Backend Skills */}
        <div className="skill-card backend">
          <Server size={40} />
          <h3>Backend Development</h3>
          <p>Node.js, Express.js, RESTful APIs, GraphQL, Python (Flask)</p>
        </div>
      </div>

      <div className="skills-subsection">
        <h2>AI Engineering Skills</h2>
        <div className="skills-grid">
          {/* AI Skills */}
          <div className="skill-card ai">
            <Code size={40} />
            <h3>Deep Learning</h3>
            <p>TensorFlow, Keras, PyTorch, CNNs, RNNs, Neural Networks</p>
          </div>
          <div className="skill-card ai">
            <Code size={40} />
            <h3>Machine Learning</h3>
            <p>Scikit-Learn, ML Algorithms, Supervised & Unsupervised Learning</p>
          </div>
          <div className="skill-card ai">
            <Code size={40} />
            <h3>NLP</h3>
            <p>Text Processing, Sentiment Analysis, NLTK, Hugging Face</p>
          </div>
          <div className="skill-card ai">
            <Code size={40} />
            <h3>Computer Vision</h3>
            <p>OpenCV, Image Processing, Object Detection, Image Segmentation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

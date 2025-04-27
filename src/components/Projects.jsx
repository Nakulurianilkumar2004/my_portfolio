import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion'; // For animation

const projects = [
  {
    id: 1,
    title: "Agri Assistant",
    description: "A smart agriculture solution offering Crop & Fertilizer Recommendation, AI Chatbot, E-commerce, and E-Agreement System.",
    image: "/assets/images/project1.jpg",
    githubLink: "https://github.com/Nakulurianilkumar2004/kisan_services_portal",
  },
  {
    id: 2,
    title: "Health Assistant",
    description: "AI-driven Health platform with Medicine Generator, Chatbot (English text & Telugu audio), Skin Detection, Emergency Alerts, and Medicine Reminders.",
    image: "/assets/images/project2.jpg",
    githubLink: "https://github.com/Nakulurianilkumar2004/Health_based_chatbot_and_diabeties_prediction",
  },
  // 👉 Add more projects easily here!
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            className="project-card"
            key={project.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={project.image} alt={`${project.title} Image`} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;




import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Background3D from './components/Background3D';
import Experience from './Experience';


function App() {
  return (
    <div>
      <Background3D />
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Experience/>
      <Skills />
      <ContactForm />
    </div>
  );
}

export default App;


import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Certifications from './components/Certifications.jsx';
import TechSkills from './components/Techskills.jsx';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Service />
      <Projects />
      <Experience />
      <Certifications />
      <TechSkills />
      <Contact />
    </div>
  )
}

export default App

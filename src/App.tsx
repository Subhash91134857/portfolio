import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import FloatingSkills from './components/FloatingSkills';

function App() {
  return (
    <>
      {/* <FloatingSkills /> */}
      <div className="relative z-10 bg-primary text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}


export default App;

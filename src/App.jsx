import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Lenis from 'lenis';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative cursor-none font-sans text-brand-dark dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      <CustomCursor />

      <div className="main w-full min-h-screen flex flex-col">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ aboutRef, projectsRef, experienceRef, contactRef }}
        />
        <Hero scrollToAbout={() => scrollToSection(projectsRef)} />
      </div>

      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Experience ref={experienceRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
//import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import { initSmoothScrolling } from './utils/smoothScroll';
import './styles/theme.css';

function App() {
  useEffect(() => {
    // Initialize smooth scrolling after component mounts
    initSmoothScrolling();
  }, []);

  return (
    <Layout>
      <Hero />
      {/*<Experience /> */}
      {/* <Projects /> */}
      <Certifications />
      <Contact />
    </Layout>
  );
}

export default App;

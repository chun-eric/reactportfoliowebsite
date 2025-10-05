import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import all the sections that make up your home page
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact4 from "./sections/contact/Contact4";
import Portfolio from "./sections/portfolio/Portfolio";

const HomePage = ({ theme, setTheme, refs, scrollToSection }) => {
  const location = useLocation();

  // This is the crucial logic that handles scrolling after navigation
  useEffect(() => {
    // Check if we received a "scrollTo" message when we arrived at this page
    const { state } = location;
    if (state && state.scrollTo) {
      const sectionId = state.scrollTo;
      const targetRef = refs[sectionId + 'Ref']; // e.g., refs['portfolioRef']
      
      if (targetRef) {
        // We use a small timeout to ensure the section has had time to render
        // before we try to scroll to it.
        const timer = setTimeout(() => {
          if (targetRef.current) {
            scrollToSection(targetRef);
            // Clear the state from history so it doesn't scroll again on refresh
            window.history.replaceState({}, document.title);
          }
        }, 100);

        return () => clearTimeout(timer); // Cleanup the timer
      }
    }
  }, [location, refs, scrollToSection]); // This effect runs when the page loads

  return (
    <>
      {/* 
        This renders all your home page sections in order and, crucially,
        passes the refs from App.js to the correct components.
      */}
      <Header theme={theme} ref={refs.headerRef} />
      <Skills theme={theme} ref={refs.skillsRef} />
      <About theme={theme} />
      <Portfolio theme={theme} setTheme={setTheme} ref={refs.portfolioRef} />
      <Contact4 />
    </>
  );
};

// Add PropTypes for good practice
HomePage.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  refs: PropTypes.object.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default HomePage;
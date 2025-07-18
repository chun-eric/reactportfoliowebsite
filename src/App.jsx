import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact4 from "./sections/contact/Contact4";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { useRef } from "react";
import { useTheme } from "./sections/customHooks/localStorage";
import GoogleAnalytics from "./GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseStudyDetail from "./sections/portfolio/CaseStudyDetail";


function App() {
  // creating theme usestate
  const [theme, setTheme] = useTheme();

  // utilizing useRef to scroll to a section
  const portfolioRef = useRef(null);
  const headerRef = useRef(null);
  const skillsRef = useRef(null);

  // scroll to a section function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const refs = { headerRef, skillsRef, portfolioRef };


  return (
    <Router>
    <div className={`container  ${theme} `}>
      <Analytics />
      <GoogleAnalytics />
      <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar
                  theme={theme}
                  setTheme={setTheme}
                  scrollToSection={scrollToSection}
                  refs={{ headerRef, skillsRef, portfolioRef }}
                />
                <Header theme={theme} ref={headerRef} />
                <Skills theme={theme} ref={skillsRef} />
                <About theme={theme} />
                <Portfolio theme={theme} setTheme={setTheme} ref={portfolioRef} />
                <Contact4 />
                <Footer theme={theme} />
              </>
            } 
          />
           <Route 
            path="/case-study/:id" 
            element={<CaseStudyDetail theme={theme} />} 
          />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

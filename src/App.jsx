import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact2 from "./sections/contact/Contact2";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import ProjectModal from "./sections/projectModal/ProjectModal";
// import ToggleTheme from "./context/ToggleTheme";
// import { ThemeProvider } from "./context/ThemeContext";
// import { themeChange } from "theme-change";
// import DarkLightMode from "../src/components/DarkLightMode";
// import Contact from "./sections/contact/Contact";
// import Card from "./components/Card";

import "./App.css";
import CustomGradientBackground from "./components/CustomGradientBackground";

function App() {
  // creating theme usestate
  const [theme, setTheme] = useState("light");

  // utilizing useRef to scroll to a section
  const portfolioRef = useRef(null);
  const headerRef = useRef(null);
  const skillsRef = useRef(null);

  // scroll to a section function
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetToTop,
      behavior: "smooth",
    });
  };

  // initializing AOS
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // function to set the dark and light theme on the root id
  useEffect(() => {
    const rootElement = document.getElementById("root");
    const bodyElement = document.body;
    const paragraphElement = document.querySelectorAll("p");
    // matches all element with class attribute that contains substring 'title'
    const titleElement = document.querySelectorAll("[class*='title']");

    const elements = [
      rootElement,
      bodyElement,
      ...paragraphElement,
      ...titleElement,
    ];

    elements.forEach((element) => {
      if (element) {
        element.classList.add(theme);
        element.classList.remove(theme === "light" ? "dark" : "light");
      }
    });
  }, [theme]);

  return (
    <div className={`container  ${theme} `}>
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
      <ProjectModal theme={theme} />
      <Contact2 />
      <Footer theme={theme} />
    </div>
  );
}

export default App;

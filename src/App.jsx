import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact2 from "./sections/contact/Contact2";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { useRef } from "react";
// import "./App.css";
// import ProjectModal from "./sections/projectModal/ProjectModal";
import { useTheme } from "./sections/customHooks/localStorage";
import "./App.css";


function App() {
  // creating theme usestate
  // const [theme, setTheme] = useState("light");
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
      {/* <ProjectModalbeta theme={theme} /> */}
      <Contact2 />
      <Footer theme={theme} />
    </div>
  );
}

export default App;

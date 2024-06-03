// import { Button } from "@/components/ui/button";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact2 from "./sections/contact/Contact2";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectModal from "./sections/projectModal/ProjectModal";
// import ToggleTheme from "./context/ToggleTheme";
// import { ThemeProvider } from "./context/ThemeContext";
// import { themeChange } from "theme-change";
// import DarkLightMode from "../src/components/DarkLightMode";
// import Contact from "./sections/contact/Contact";
// import Card from "./components/Card";

import "./App.css";

function App() {
  // creating theme usestate
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Header />
      <Skills />
      <About />
      <Portfolio />
      <ProjectModal />
      <Contact2 />
      <Footer />
    </div>
  );
}

export default App;

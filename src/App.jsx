// import { Button } from "@/components/ui/button";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact2 from "./sections/contact/Contact2";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";
import "./App.css";

// import DarkLightMode from "../src/components/DarkLightMode";

// import Contact from "./sections/contact/Contact";
// import Card from "./components/Card";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {};

  return (
    <ThemeProvider data-theme={theme}>
      <main>
        <Navbar />
        <Header />
        <Skills />

        <About />
        <Portfolio />
        <Contact2 />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;

// import { Button } from "@/components/ui/button";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";

// import Contact from "./sections/contact/Contact";
import Contact2 from "./sections/contact/Contact2";
import Footer from "./sections/footer/Footer";
// import Card from "./components/Card";

import Skills from "./sections/skills/Skills";
import "./App.css";
import { useRef } from "react";

function App() {
  // refrence for each key section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <main>
      <Navbar
        refs={{ homeRef, aboutRef, skillsRef, portfolioRef, contactRef }}
      />
      <Header style={{ backgroundColor: "background-color: #f9f9f9;" }} />
      <Skills refs={{ skillsRef }} />
      <About refs={{ aboutRef }} />
      {/* <Services /> */}
      <Portfolio refs={{ portfolioRef }} />
      {/* <Testimonials /> */}
      {/* <FAQs /> */}
      {/* <Contact /> */}
      <Contact2 refs={{ contactRef }} />
      <Footer />
    </main>
  );
}

export default App;

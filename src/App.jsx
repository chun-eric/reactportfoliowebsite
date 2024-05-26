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

function App() {
  return (
    <main>
      <Navbar />
      <Header style={{ backgroundColor: "background-color: #f9f9f9;" }} />
      <Skills />
      <About />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <FAQs /> */}
      {/* <Contact /> */}
      <Contact2 />
      <Footer />
    </main>
  );
}

export default App;

// import { Button } from "@/components/ui/button";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact2 from "./sections/contact/Contact2";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";

// import Contact from "./sections/contact/Contact";
// import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Portfolio />
      <Contact2 />
      <Footer />
    </main>
  );
}

export default App;

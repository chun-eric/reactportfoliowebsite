// import { Button } from "@/components/ui/button";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact2 from "./sections/contact/Contact2";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { Routes, Route } from "react-router-dom";

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
      {/* <Routes>
        <Route index path='/' element={<Navbar />} />
        <Route path='header' element={<Header />} />
        <Route path='skills' element={<Skills />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact2 />} />
      </Routes> */}
      <Footer />
    </main>
  );
}

export default App;

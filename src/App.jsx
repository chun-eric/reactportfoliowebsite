import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact4 from "./sections/contact/Contact4";
import Portfolio from "./sections/portfolio/Portfolio";
import Footer from "./sections/footer/Footer";
import { useRef, useEffect } from "react";
import { useTheme } from "./sections/customHooks/localStorage";
import GoogleAnalytics from "./GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CaseStudyDetail from "./sections/portfolio/CaseStudyDetail";
import { Link } from "react-router-dom";
import AustracID from "./Pages/AustracID";
import PhraseCampID from "./Pages/PhraseCampID";
import AustradeID from "./Pages/AustradeID";

// Simple Test Component
const SimpleTest = () => {
  return (
    <div style={{ padding: "2rem", background: "yellow", minHeight: "100vh" }}>
      <h1>🎉 ROUTE TEST WORKS!</h1>
      <p>This proves that React Router is working correctly.</p>
      <p>The case study navigation should work too.</p>
      <a href="/">← Go back to home</a>
    </div>
  );
};

// Home Page Component - defined OUTSIDE of App function
const HomePage = ({
  theme,
  setTheme,
  refs,
  scrollToSection,
  scrollToSectionById,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Debug: Log all available refs
    console.log("Available refs:", refs);
    console.log("headerRef:", refs.headerRef?.current);
    console.log("skillsRef:", refs.skillsRef?.current);
    console.log("portfolioRef:", refs.portfolioRef?.current);

    // Check if we received a "scrollTo" message in the navigation state
    const { state } = location;
    console.log("Location state:", state); // Debug log

    if (state && state.scrollTo) {
      const sectionId = state.scrollTo;
      const targetRef = refs[sectionId + "Ref"]; // e.g., refs['portfolioRef']

      console.log(`Looking for section: ${sectionId}`); // Debug log
      console.log(`Target ref name: ${sectionId + "Ref"}`); // Debug log
      console.log(`Target ref:`, targetRef); // Debug log

      // Function to attempt scrolling with retries
      const attemptScroll = (attempts = 0) => {
        if (targetRef && targetRef.current) {
          console.log(`Scrolling to ${sectionId}, attempt ${attempts + 1}`); // Debug log
          scrollToSection(targetRef);
          // Clear the state after successful scroll
          window.history.replaceState({}, document.title);
        } else {
          // Try alternative method using document.getElementById
          console.log(`Trying alternative scroll method for ${sectionId}`); // Debug log
          const scrollSuccess = scrollToSectionById(sectionId);

          if (scrollSuccess) {
            window.history.replaceState({}, document.title);
          } else if (attempts < 10) {
            console.log(
              `Retry scroll to ${sectionId}, attempt ${attempts + 1}`
            ); // Debug log
            // Retry up to 10 times with increasing delay
            setTimeout(() => attemptScroll(attempts + 1), 100 + attempts * 50);
          } else {
            console.log(
              `Failed to scroll to ${sectionId} - section not found after ${
                attempts + 1
              } attempts`
            ); // Debug log
            // Clear the state even if scroll failed
            window.history.replaceState({}, document.title);
          }
        }
      };

      // Start the scroll attempt
      attemptScroll();
    }
  }, [location, refs, scrollToSection]);

  // Additional effect to handle scrolling after all refs are mounted
  useEffect(() => {
    const { state } = location;
    if (state && state.scrollTo) {
      const sectionId = state.scrollTo;
      const targetRef = refs[sectionId + "Ref"];

      // Wait a bit longer to ensure all components are fully rendered
      const timer = setTimeout(() => {
        if (targetRef && targetRef.current) {
          console.log(`Late scroll attempt to ${sectionId}`); // Debug log
          scrollToSection(targetRef);
          window.history.replaceState({}, document.title);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [refs, location, scrollToSection]);

  // ADD TEST BUTTON
  const testCaseStudyNavigation = () => {
    console.log("🚀 Test button clicked - navigating to case study");
    navigate("/case-study/16");
  };

  return (
    <>
      {/* ADD THIS TEST BUTTON */}
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999,
          background: "red",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={testCaseStudyNavigation}
      >
        🧪 TEST: Go to Case Study
      </div>

      <Header theme={theme} ref={refs.headerRef} />
      <Skills theme={theme} ref={refs.skillsRef} />
      <About theme={theme} />
      <Portfolio theme={theme} setTheme={setTheme} ref={refs.portfolioRef} />
      <Contact4 />
    </>
  );
};

function App() {
  // creating theme usestate
  const [theme, setTheme] = useTheme("light");

  // utilizing useRef to scroll to a section
  const portfolioRef = useRef(null);
  const headerRef = useRef(null);
  const skillsRef = useRef(null);

  // scroll to a section function
  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      // Get the navbar height for offset calculation
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;

      // Calculate the target position
      const targetPosition = elementRef.current.offsetTop - navbarHeight - 20;

      console.log(`Scrolling to position: ${targetPosition}`); // Debug log
      console.log(`Element:`, elementRef.current); // Debug log

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      console.log("Scroll failed - element ref not available"); // Debug log
    }
  };

  // Alternative scroll function using section IDs
  const scrollToSectionById = (sectionId) => {
    console.log(`Attempting to scroll to section with ID: ${sectionId}`); // Debug log

    // Try different possible section IDs
    const possibleIds = [
      `${sectionId}-section`,
      sectionId,
      `${sectionId}Section`,
      `section-${sectionId}`,
    ];

    let targetElement = null;
    for (const id of possibleIds) {
      targetElement = document.getElementById(id);
      if (targetElement) {
        console.log(`Found element with ID: ${id}`); // Debug log
        break;
      }
    }

    if (!targetElement) {
      // Try to find by class or other selectors
      targetElement =
        document.querySelector(`.${sectionId}`) ||
        document.querySelector(`[data-section="${sectionId}"]`);
    }

    if (targetElement) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const targetPosition = targetElement.offsetTop - navbarHeight - 20;

      console.log(`Scrolling to element:`, targetElement); // Debug log
      console.log(`Target position: ${targetPosition}`); // Debug log

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      return true;
    } else {
      console.log(`No element found for section: ${sectionId}`); // Debug log
      return false;
    }
  };

  const refs = { headerRef, skillsRef, portfolioRef };

  return (
    <Router>
      <div className={`container  ${theme} `}>
        <Analytics />
        <GoogleAnalytics />
        <Navbar
          theme={theme}
          setTheme={setTheme}
          scrollToSection={scrollToSection}
          refs={refs}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theme={theme}
                setTheme={setTheme}
                refs={refs}
                scrollToSection={scrollToSection}
                scrollToSectionById={scrollToSectionById}
              />
            }
          />
          {/* ADD TEST ROUTE */}
          <Route path="/test" element={<SimpleTest />} />
          <Route
            path="/case-study/:id"
            element={<CaseStudyDetail theme={theme} />}
          />
          <Route path="/austrac-tranche2" element={<AustracID />} />
          <Route path="/phrasecamp" element={<PhraseCampID />} />
          <Route path="/austrade-japan" element={<AustradeID />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}

export default App;

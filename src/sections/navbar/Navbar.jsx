import data from "./data";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sun, Moon, CircleX, MoveLeft } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";
// import { ThemeContext } from "../../context/ThemeContext";
// import ToggleTheme from "../../context/ToggleTheme";

const Navbar = ({ theme, setTheme, className, scrollToSection, refs }) => {
  const [showModal, setShowModal] = useState(false);
  // const { theme, toggleTheme } = useContext(ThemeContext);

  const { contactRef } = refs;
  console.log(refs);
  // handler function to toggle the modal
  const handleModal = () => {
    setShowModal(!showModal);
  };

  // function to handle scroll to section

  // function to toggle the light dark mode
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  console.log(refs);
  return (
    <nav className={`navbar ${theme}`}>
      <div className='container nav__container'>
        {/* Logo */}
        <a href='#' id='logo' className='nav__logo'>
          <img src='https://i.ibb.co/SfjJhVz/logo.png' alt='logo' />
        </a>
        {/* Nav Headings */}
        <ul className='nav__menu'>
          {data.map((item) => (
            <li key={item.id}>
              <a href={`${item.link}`} className={`nav__item ${theme}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className={`navbar__btns `}>
          <button
            onClick={() => {
              toggle_mode();
            }}
            // style={{ transition: "all 0.3s ease" }}
            className='icon_dark_button no-animation theme-toggle'
          >
            {theme === "light" ? (
              <Sun size={30} className='theme-icon' />
            ) : (
              <Moon size={30} className='theme-icon' />
            )}
          </button>
          {/* <ToggleTheme /> */}

          {/* Had a lot of trouble here. Just separated my contact data. It was the most simplest answer. All I needed to do was add #contact to the a href path. */}
          <button className='btn-contact'>
            <a
              href='#contact'
              style={{ fontSize: "22px", scrollToSection: "smooth" }}
            >
              Contact
            </a>
          </button>

          <GiHamburgerMenu className='btn-hamburger' onClick={handleModal} />
        </div>
      </div>
      {/* Navbar Modal */}
      {showModal && (
        <div className='navbarmodal-container transform-modal'>
          <div className='navbar-modal'>
            <MoveLeft className='back-icon' onClick={handleModal} />
            <CircleX className='close-icon' onClick={handleModal} />
          </div>
          <div className='menu-listModal'>
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link} className='nav__item'>
                  {item.title}
                </a>
              </li>
            ))}
            <div className='navbar-modal-contact' style={{}}>
              <li style={{}}>
                <a href='#contact' style={{ fontSize: "24px" }}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.PropTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.object.isRequired,
};

export default Navbar;

// handler function to scroll to the section
// const handleScroll = ({ ref }) => {
//   window.scrollTo({
//     top: ref.current.offsetTop,
//     behavior: "smooth",
//   });
//   setShowModal(false);
// };

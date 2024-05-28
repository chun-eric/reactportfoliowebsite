import data from "./data";

import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Moon, CircleX, MoveLeft } from "lucide-react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Navbar = ({ refs }) => {
  const [showModal, setShowModal] = useState(false);

  // handler function to toggle the modal
  const handleModal = () => {
    setShowModal(!showModal);
  };

  // handler function to scroll to the section
  // const handleScroll = ({ ref }) => {
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: "smooth",
  //   });
  //   setShowModal(false);
  // };

  return (
    <nav>
      <div className='container nav__container'>
        {/* Logo */}
        <a href='#' id='logo' className='nav__logo'>
          <img src='https://i.ibb.co/SfjJhVz/logo.png' alt='logo' />
        </a>
        {/* Nav Headings */}
        <ul className='nav__menu'>
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link} className='nav__item'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='navbar__btns'>
          <button className='icon_dark_button no-animation'>
            <a href='#' className=''>
              <Moon size={30} />
            </a>
          </button>

          {/* Had a lot of trouble here. Just separated my contact data. It was the most simplest answer. All I needed to do was add #contact to the a href path. */}
          <button className='btn-contact'>
            <a href='#contact' style={{ fontSize: "22px" }}>
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

export default Navbar;

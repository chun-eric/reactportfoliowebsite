import data from "./data";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Moon, CircleX, MoveLeft } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
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
          <button className='btn-contact'>Contact</button>
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
              <li key={item.id} onClick={{}}>
                {item.title}
              </li>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

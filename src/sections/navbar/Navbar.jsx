import data from './data'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Sun, Moon, CircleX, MoveLeft } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ theme, setTheme, scrollToSection, refs }) => {
  const [showModal, setShowModal] = useState(false)

   // GET ROUTER FUNCTIONS
   const location = useLocation(); // Gets the current URL path
   const navigate = useNavigate(); // Lets us navigate programmatically
  
  // handler function to toggle the modal
  const handleModal = () => {
    setShowModal(!showModal)
  }

  // function to toggle the light/dark mode
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // CREATE THE "SMART" NAVIGATION HANDLER
  const handleNavClick = (e, link) => {
    e.preventDefault(); // Prevent default anchor behavior
    const sectionId = link.substring(1); // Turns '#portfolio' into 'portfolio'

    // If we are already on the home page, just scroll
    if (location.pathname === '/') {
      const targetRef = refs[sectionId + 'Ref']; // e.g., refs['portfolioRef']
      if (targetRef && targetRef.current) {
        scrollToSection(targetRef);
      }
    } else {
      // If we are on another page, navigate to home and pass the section to scroll to
      navigate('/', { state: { scrollTo: sectionId } });
    }

    // Close the mobile modal if it's open
    setShowModal(false);
  };

  // useRef to set the navbarModal as the reference
  const navbarModalRef = useRef(null)

  // useEffect to handle modal visibility when clicked outside of the modal
  useEffect(() => {
    const handler = event => {
      // ignore clicks on the component itself
      if (
        navbarModalRef.current &&
        !navbarModalRef.current.contains(event.target)
      ) {
        setShowModal(false)
      }
    }

    // attach the event listener
    document.addEventListener('mousedown', handler)

    // cleanup function
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <nav className={`navbar ${theme}`}>
      <div className='container nav__container'>
        {/* Logo */}
        <a href='/' className={`nav__logo ${theme}`}>
          <img
            src='https://i.ibb.co/SfjJhVz/logo.png'
            alt='logo'
            loading='eager'
          />
        </a>

        {/* Nav Headings */}
        <ul className='nav__menu'>
          {data.map(item => (
            <li key={item.id}>
              <a 
                href={item.link} 
                className={`nav__item ${theme}`}
                onClick={(e) => handleNavClick(e, item.link)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='navbar__btns'>
          {/* <button
            onClick={toggle_mode}
            className='icon_dark_button no-animation theme-toggle'
          >
            {theme === 'dark' ? (
              <Sun size={30} className='theme-icon' />
            ) : (
              <Moon size={30} className='theme-icon' />
            )}
          </button> */}

          {/* Contact Button */}
          <button className='btn-contact'>
            <a
              href='#contact'
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{
                fontSize: '20px',
                padding: '1px 2px'
              }}
            >
              Contact
            </a>
          </button>

          <GiHamburgerMenu className='btn-hamburger' onClick={handleModal} />
        </div>
      </div>

      {/* Navbar Modal */}
      {showModal && (
        <>
          <div
            className={`navbarmodal-overlay ${showModal ? 'show' : ''} ${theme}`}
          ></div>
          <div
            className={`navbarmodal-container ${showModal ? 'show' : ''} ${theme}`}
            ref={navbarModalRef}
          >
            <div className='navbar-modal'>
              <MoveLeft className='back-icon' onClick={handleModal} />
              <CircleX className='close-icon' onClick={handleModal} />
            </div>
            <div className='menu-listModal'>
              {data.map(item => (
                <li key={item.id}>
                  <a 
                    href={item.link} 
                    className={`nav__item ${theme}`}
                    onClick={(e) => handleNavClick(e, item.link)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <div className='navbar-modal-contact'>
                <li className='navbarmodal-contact-item'>
                  <a 
                    href='#contact' 
                    onClick={(e) => handleNavClick(e, '#contact')}
                    style={{ fontSize: '20px' }}
                  >
                    Contact
                  </a>
                </li>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.object.isRequired
}

export default Navbar
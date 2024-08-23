import "./header.css";
import HeaderImage from "../../assets/images/hero-image-transparent-ec6.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { forwardRef } from "react";

// Data for the social icons
const data2 = [
  {
    id: 1,
    link: "https://instagram.com",
    title: "LinkedIn",
    icon: <AiFillLinkedin />,
  },
  {
    id: 2,
    link: "https://github.com/chun-eric",
    title: "GitHub",
    icon: <AiFillGithub />,
  },
];

// Header component using forwardRef
const Header = forwardRef((props, ref) => {
  // Destructure theme from props
  const { theme } = props;

  return (
    <header ref={ref} className={`header ${theme}`}>
      <section id='header-section' className={`${theme}`}>
        <div className='hero-wrapper'>
          <div className={`background-overlay ${theme}`}></div>
          <div className={`container header__container ${theme}`}>
            <div className={`hero ${theme} fade-in`}>
              <div className='content'>
                <div className={`hero__details ${theme}`}>
                  <h1 className={`hello ${theme}`}>
                    Hi, I&apos;m
                    <span
                      className={`firstName highlight ${
                        theme === "dark" ? "changeColor highlight-dark" : ""
                      }`}
                    >
                      Eric.
                    </span>
                  </h1>
                  <h3 className={`job ${theme}`}>
                    A Front-End React and Email Developer who loves building web
                    applications and websites that are user-friendly and
                    user-focused.
                  </h3>

                  <div className='icons'>
                    {data2.map((item) => (
                      <a
                        className={`icon ${
                          theme === "dark" ? "changeColor" : ""
                        }`}
                        key={item.id}
                        href={item.link}
                        title={item.title}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                  <div className='button-container'>
                    <button className='btn portfolio-btn'>
                      <li>
                        <a href='#portfolio' className='portfolio-name'>
                          Portfolio
                        </a>
                      </li>
                    </button>
                  </div>
                </div>
              </div>
              <div className='self-photo'>
                <div className={`conic conic-demo ${theme}`}></div>
                <img
                  loading='eager'
                  src={HeaderImage}
                  alt='self-logo'
                  style={{
                    opacity: 0,
                    animation: "fadeInImage 1s ease-in-out forwards",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
});

Header.displayName = "Header";

export default Header;

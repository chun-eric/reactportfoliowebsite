// import data from "./data";
import "./header.css";
import A0S from "aos";
import "aos/dist/aos.css";
// import HeaderImage from "../../assets/images/hero-image-transparent-ec";
import HeaderImage from "../../assets/images/hero-image-transparent-ec6.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";

// import CustomGradientBackground from "../../components/CustomGradientBackground";

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

const Header = ({ theme }) => {
  useEffect(() => {
    A0S.init({
      duration: 2000,
      once: true,
      mirror: true, // Allows animations to trigger each time element comes into view
    });
  }, []);

  return (
    <section id={`header-section ${theme}`}>
      <div className='hero-wrapper'>
        <div className={`background-overlay ${theme}`}></div>
        <div className={`container header__container ${theme}`}>
          <div className={`hero ${theme}`}>
            <div
              className='content'
              data-aos='fade-in'
              data-aos-delay='150'
              data-aos-offset='200'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
            >
              <div className={`hero__details ${theme}`}>
                <h1 className={`hello ${theme} `}>
                  Hi, I'm
                  <span
                    className={`firstName highlight ${
                      theme === "dark"
                        ? "changeColor" && "highlight-dark"
                        : null
                    }`}
                  >
                    Eric.
                  </span>{" "}
                </h1>
                <h3 className={`job ${theme}`}>
                  A Front-End React and Email Developer who loves building web
                  applications and websites that's user-friendly and
                  user-focused.
                </h3>

                <div className='icons'>
                  {data2.map((item) => (
                    <a
                      className={`icon ${
                        theme === "dark" ? "changeColor" : null
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
                  <button className='btn portfolio-btn '>
                    <li>
                      <a href='#portfolio' className='portfolio-name'>
                        Portfolio
                      </a>
                    </li>
                  </button>
                </div>
              </div>
            </div>
            <div
              className='self-photo'
              data-aos='fade-left'
              data-aos-delay='450'
              data-aos-offset='200'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
            >
              <div className={`conic conic-demo ${theme}`}></div>
              <img loading='lazy' src={HeaderImage} alt='self-logo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

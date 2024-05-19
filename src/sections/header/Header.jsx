// import data from "./data";
import "./header.css";
import A0S from "aos";
import "aos/dist/aos.css";
import HeaderImage from "../../assets/images/hero-image-decoration.png";
import NameImage from "../../assets/images/hero-name.png";
// import data2 from "./data";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

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

const Header = () => {
  return (
    <section id='header-section'>
      <header id='header'>
        <div className='container header__container'>
          <div className='hero'>
            <div
              className='content'
              // data-aos='fade-in'
              data-aos-delay='150'
              data-aos-offset='200'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
            >
              <div className='hero__details'>
                <h1 className='hello'>A Front-End React Developer</h1>
                <h3 className='job'>
                  Hi, I'm <span className='name'>Eric</span> a Front-End
                  Developer and aspiring Cybersecurity consultant based in
                  Osaka, Japan.
                </h3>

                <div className='icons'>
                  {data2.map((item) => (
                    <a
                      className='icon'
                      key={item.id}
                      href={item.link}
                      title={item.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {item.icon}
                    </a>
                  ))}
                  {/* <a href='https://github.com/chun-eric'>
                <i className='fa fa-github' aria-hidden='true'></i>
              </a>

              <a href='https://i.ibb.co/zmp9kV9/black-linkedin.png'>
                <i className='fa fa-linkedin' aria-hidden='true'></i>
              </a> */}
                </div>
                <a href='#portfolio'>
                  <button className='btn portfolio-btn'>Portfolio</button>
                </a>
              </div>
            </div>
            <div
              className='self-photo'
              // data-aos='fade-left'
              // data-aos-delay='450'
              // data-aos-offset='200'
              // data-aos-duration='1500'
              // data-aos-easing='ease-in-out'
            >
              <img src={HeaderImage} alt='self-logo' />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;

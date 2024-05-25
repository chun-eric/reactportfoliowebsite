import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div
          className='main-container'
          // data-aos='fade-in'
          // data-aos-delay='150'
          // data-aos-offset='200'
          // data-aos-duration='1500'
          // data-aos-easing='ease-in-out'
        >
          <div className='main-footer__upper'>
            <div className='main-footer__row main-footer__row-1'>
              <h2 className='social-heading'>Socials</h2>
              <div className='social-icons'>
                {data2.map((item) => (
                  <a
                    className='icon footer__logo'
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
            </div>

            <div className='main-footer__row main-footer__row-2'>
              <div className='footer-name-background'>
                <img
                  className='footer-logo footer-name-image'
                  src='https://i.ibb.co/SfjJhVz/logo.png'
                  alt='hero name'
                />
              </div>
              <p className='short_description'>
                A Front-End Developer focused on delivering beautifully designed
                & user focused web application.
              </p>
            </div>
          </div>
          <div className='visitor-counter'>
            <p> Vistor number:</p>
            <p className='visitor-count'> 25</p>
          </div>

          <div className='main-footer__lower'>
            <p>
              &#169; {new Date().getFullYear()}. Website made by
              <span className='name'> Eric Chun</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

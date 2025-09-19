import './footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
import logoWhite from '@/assets/logos/svg/logo-white.svg'

const data2 = [
  {
    id: 1,
    link: 'https://linkedin.com/in/eric-chun-b536711a',
    title: 'LinkedIn',
    icon: <AiFillLinkedin />
  },
  {
    id: 2,
    link: 'https://github.com/chun-eric',
    title: 'GitHub',
    icon: <AiFillGithub />
  }
]

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className={`footer-container ${theme}`}>
        <div
          className='main-footer-container'
          // data-aos='fade-in'
          // data-aos-delay='100'
          // data-aos-offset='200'
          // data-aos-duration='1000'
          // data-aos-easing='ease-in-out'
        >
          <div className='main-footer__upper'>
            <div className='main-footer__row main-footer__row-1'>
              <h2 className={`social-heading ${theme}`}>Socials</h2>
              <div className='social-icons'>
                {data2.map(item => (
                  <a
                    className={`icon footer__logo ${theme}`}
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
                  className={`footer-logo footer-name-image ${theme}`}
                  src='https://i.ibb.co/SfjJhVz/logo.png'
                  alt='hero name'
                />
              </div>
              <p className='short_description'>
                Content Strategist & Producer • Web & E-Learning Developer • Instructional Design • Learning & Design  
              </p>
            </div>
          </div>
          {/* <div className='visitor-counter'>
          <p> Vistor number:</p>
          <p className='visitor-count'> 25</p>
        </div> */}

          <div className='main-footer__lower'>
            <p className='copyright'>
              &#169; {new Date().getFullYear()}. Website made by
              <span className='name'> Eric Chun</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

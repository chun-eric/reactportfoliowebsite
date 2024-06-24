import "./about.css";
import "./data";

const About = ({ theme }) => {
  return (
    <section id='about'>
      <div className='about-container'>
        <div className={`about-background-overlay ${theme}`}></div>
        <div
          className='about-me'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-offset='100'
          data-aos-duration='800'
          data-aos-easing='ease-in-out'
        >
          <div className='section-title'>
            <h2 className='title'>About Me</h2>
          </div>
          <div className='bio-container'>
            <p className='bio-info'>
              Hi, I'm Eric Chun, an Australian currently based in Osaka, Japan,
              but born in Dubai. My development, design, and overall philosophy
              have been greatly influenced by Western and Eastern cultures. I am
              particulary fascinated by the striking contrast between modern and
              traditional Japanese culture, fashion, art, and design.
            </p>
            <p className='bio-info'>
              When developing digital products, whether it be emails, landing
              pages, websites, or web apps, I strive to make them simple, easy
              to understand, and practical. UX/UI is also very important to me,
              so I'm constantly improving my skills and knowledge to achieve the
              best results for my clients.
            </p>
            <p className='bio-info'>
              I also have interests in cybersecurity especially in the area of
              governance and risk management, developing micro SaaS applications
              in my spare time and going to the beach as much as possible. Feel
              free to get in touch with me.
            </p>
            <p className='bio-info'></p>

            <div className='button-container'>
              <a href='#contact'>
                <button className='btn btn--theme--about'> Get In Touch</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

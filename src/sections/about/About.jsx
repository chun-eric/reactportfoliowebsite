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
              An Australian currently based in Osaka, Japan, but born in Dubai,
              my development, design, and philosophy have been greatly
              influenced by Western and Eastern cultures. I am fascinated by the
              striking contrast between modern and traditional Japanese culture,
              fashion, art, and design. When developing digital products,
              whether they be emails, landing pages, websites, or web apps, I
              strive to make them simple, easy to understand, and practical.
              UX/UI is also very important to me, so I'm constantly improving my
              skills and knowledge to achieve the best results for my clients.
              Feel free to get in touch with me.
            </p>

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

import "./about.css";
import "./data";

const About = ({ theme }) => {
  return (
    <div id='about'>
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
            Currently based in Osaka, Japan for over a decade, but raised in
            Sydney, Australia for even longer yet somehow born in Dubai, U.A.E,
            my development, design and philosophy has been greatly influenced by
            both Western and Eastrn cultures. I am especially influenced by both
            modern and traditional Japanese fashion, culture, art and design.
            When I am developing any digital products whether it be emails,
            landing pages, websites or web apps, I strive to make it simple,
            easy to understand yet practical. UX/UI is also very important to me
            so I'm constantly improving my skills and knowledge to get the best
            results from every project. My attention to detail and ability to
            meet tight deadlines ensure that I deliver projects on time, within
            budget, and to exact specifications.
          </p>

          <div className='button-container'>
            <a href='#contact'>
              <button className='btn btn--theme--about'> Get In Touch</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import "./about.css";
import "./data";

const About = () => {
  return (
    <div id='about'>
      <div
        className='about-me'
        // data-aos='fade-up'
        // data-aos-delay='150'
        // data-aos-offset='200'
        // data-aos-duration='1500'
        // data-aos-easing='ease-in-out'
      >
        <div className='section-title'>
          <h2 className='title'>About Me</h2>
        </div>
        <div className='bio-container'>
          <p className='bio-info'>
            Using my eye for design and my technical creativity, I translate
            design mockups into beautiful websites and user-focused
            applications. UX/UI is also important to me so I'm constantly
            improving my skills and knowledge to get the best results from every
            project. My strong attention to detail and ability to meet tight
            deadlines ensure that I deliver projects on time, within budget, and
            to exact specifications.
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

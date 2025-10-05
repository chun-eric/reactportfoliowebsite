import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './about.css'

const About = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.18 } // Trigger when 35% of the section is visible
    )

    // a local variable
    const aboutElement = aboutRef.current
    if (aboutElement) {
      observer.observe(aboutElement)
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement)
      }
    }
  }, [])

  return (
    <section id='about' ref={aboutRef}>
      <div className='about-container'>
        <div className={`about-background-overlay ${theme}`}></div>
        <div className={`about-me ${isVisible ? 'fade-in' : ''}`}>
          <div className='section-title'>
            <h2 className={`title ${theme}`}>About Me</h2>
          </div>
          <div className='bio-container'>
            <p className={`bio-info ${theme}`}>
               Hi, I'm Eric an educator turned content creator/product builder, learning designer, frontend and e-learning developer who bridges the gap between learning design and technical skills. With 10 years of adult teaching experience across corporate training, vocational schools and online multimedia education, I've witnessed firsthand how can great learning design can transform both individual learners skills and confidence.
            </p>
            
            <p className={`bio-info ${theme}`}>
               From designing curriculums and courses for diverse learning environments to building an ESL multimedia learning YouTube channel for English PhraseCamp thats reached over 80,000 subscribers or developing user-focused web applications, I apply the same user-centered design and outcome-based methodology.
            </p>
            

            <p className={`bio-info ${theme}`}>
              I'm seeking opportunities in edtech, e-learning development, education awareness leadership, corporate training, instructional design, learning & design roles where I can leverage and collaborate my unique combination of visual design, technical development, and educational multimedia content creation skills to build solutions that serve both learners and organization objectives.
            </p>

             <p className={`bio-info ${theme}`}>
When I'm not designing or building user learning experiences, I'm either researching the latest tech innovations or planning my next trip to Okinawa's pristine beaches.           </p>

           
            <div className='button-container'>
              <a href='#contact'>
                <button className='btn btn--theme--about'>Get In Touch</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

About.propTypes = {
  theme: PropTypes.string.isRequired
}

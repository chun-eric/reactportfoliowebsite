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
               Hi, I'm Eric an educator turned product builder, instructional designer and frontend developer who bridges the gap between learning science and business. With 10 years of teaching experience across corporate training and vocational schools, I've witnessed firsthand how great learning design transforms both individual learners skills and confidence.
            </p>
            
            <p className={`bio-info ${theme}`}>
              My unique perspective combines teaching expertise with proven product and business acumen. From designing curriculum for diverse learning environments to building an ESL learning channel at English PhraseCamp that reached nearly 80,000 subscribers or designing developing web applications, I apply the same user-centered design and outcome-based methodology that helped me to also scale a semi-automated rental business to 95% customer satisfaction.
            </p>
            

            <p className={`bio-info ${theme}`}>
              I'm seeking opportunities in edtech product development/leadership, instructional design, or learning experience roles where I can leverage and collaborate my unique combination of educational expertise, technical development skills, and organic marketing insights to build learning solutions that truly serve both learners and business objectives.
            </p>

             <p className={`bio-info ${theme}`}>
When I'm not designing or building learning experiences, I'm either researching the latest edtech innovations or planning my next trip to Okinawa's pristine beaches.           </p>

           
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

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
            <h2 className='title'>About Me</h2>
          </div>
          <div className='bio-container'>
            <p className='bio-info'>
              I am a product-focused leader driven by a simple belief: the best products are born from a deep understanding of real-world user problems. My journey has taken me from the classroom, where I gained firsthand empathy for learners, to founding and scaling from the ground up.
            </p>
            <p className='bio-info'>
              Whether it was building an ESL learning channel to nearly 80,000 users or an automated rental business with 95% customer satisfaction, my approach has always been the same: listen to the customer, understand the commercial realities, and build a solution that delivers genuine value. I thrive on owning the entire process, from initial vision to final execution.
            </p>

            

            <p className='bio-info'>
              I am looking for a product leadership opportunity that allows me to integrate my background in development and my insights from organic marketing to build products that are not only technically sound but also commercially successful.
            </p>

           
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

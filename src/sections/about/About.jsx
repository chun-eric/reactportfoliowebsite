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
              My journey started when I moved from Australia to Japan to teach
              English, where I discovered my passion for creating educational
              and entertaining content. What began as simple video lessons
              evolved into English PhraseCamp - a thriving ESL community I built
              from scratch.
            </p>
            <p className='bio-info'>
              Over the last 4 years, I've:
              <br /> 👉 Produced 190+ educational videos that genuinely help
              people
              <br /> 👉 Helped write 120+ SEO-optimized articles
              <br />
              👉Grown our YouTube channel to nearly 80,000 loyal subscribers
              <br />
              👉 Achieved 300% organic traffic growth with zero ad spend
              <br />
              👉 Built every website, feature, and system myself
            </p>

            <p className='bio-info'>
              But here's what excites me most. I don't just create content or
              write code in isolation. I see the full picture - how a video
              series can drive traffic, how site performance impacts engagement,
              how user feedback shapes product features. How everything works as
              a whole.
            </p>

            <p className='bio-info'>
              Currently, I'm looking for opportunities where this end-to-end
              thinking creates real value. Whether that's as a Digital Marketing
              Manager/Content Strategist who can implement technical solutions
              or as a Frontend Developer who understands user acquisition and
              can build websites. I can bring both perspectives to every
              challenge.
            </p>

            <p className='bio-info'>
              A native Australian based in Osaka, Japan and currently open to
              remote opportunities worldwide.
            </p>
            <p className='bio-info'>
              If you need someone who gets equally excited about video content
              creation and crafting clean user experiences - we should talk.
              Let's turn your content strategy into a digital experience users
              love.
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

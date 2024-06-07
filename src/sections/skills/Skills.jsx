import data from "./data";
import "./skills.css";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

const Skills = ({ theme }) => {
  return (
    <>
      <div id='skills' className={`${theme}`}>
        <section className={`${theme}`}>
          <div className={`skills-wrapper ${theme}`}>
            <div
              className='skills-title'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-offset='200'
              data-aos-duration='1200'
              data-aos-easing='ease-in-out'
            >
              <h3 className='title'>Skills</h3>
            </div>
            <div
              className='skills-container'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-offset='150'
              data-aos-duration='1200'
              data-aos-easing='ease-in-out'
            >
              <div className='skills-image-container'>
                {data.map((item) => (
                  <div key={item.id} className='item'>
                    <img
                      src={item.src}
                      alt=''
                      className={`image ${
                        theme === "dark" &&
                        (item.title === "Wordpress" || "Git")
                          ? "changeToWhite"
                          : null
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className='skills-badge-container'>
                {data.map((item) => (
                  <button
                    className={`btn btn-sm skill-btn ${
                      item.title ? "buttonTitle" : ""
                    } `}
                    key={item.id}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;

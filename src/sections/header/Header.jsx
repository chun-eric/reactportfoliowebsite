// import data from "./data";
import "./header.css";
import A0S from "aos";
import "aos/dist/aos.css";
import HeaderImage from "../../assets/images/hero-image-decoration.png";
import NameImage from "../../assets/images/hero-name.png";
// import data2 from "./data";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { gsap } from "gsap";
// import { useEffect, useRef, useState } from "react";
// import CustomGradientBackground from "../../components/CustomGradientBackground";

const data2 = [
  {
    id: 1,
    link: "https://instagram.com",
    title: "LinkedIn",
    icon: <AiFillLinkedin />,
  },
  {
    id: 2,
    link: "https://github.com/chun-eric",
    title: "GitHub",
    icon: <AiFillGithub />,
  },
];

const Header = ({ theme }) => {
  // ref for the header
  // const headerRef = useRef(null);

  // // creating a state for the svg elements
  // const [svgElements, setSvgElements] = useState([]);

  // // useEffect to animate the header
  // useEffect(() => {
  //   const header = headerRef.current;
  //   if (!header) return;

  //   const headerWidth = header.clientWidth;
  //   const headerHeight = header.clientHeight;
  //   const svgWidth = 56;
  //   const svgHeight = 28;
  //   const svgElements = [];
  //   const totalElements = Math.floor(
  //     (headerWidth / svgWidth) * (headerHeight / svgHeight)
  //   );

  //   const randomIndices = new Set();

  //   // selecting a subset of SVG elements to animate (10%)
  //   while (randomIndices.size < totalElements / 0.1) {
  //     randomIndices.add(Math.floor(Math.random() * totalElements));
  //   }
  //   // loop to create the svg elements
  //   for (let y = 0; y < headerHeight; y += svgHeight) {
  //     for (let x = 0; x < headerWidth; x += svgWidth) {
  //       const index = (y / svgHeight) * (headerWidth / svgWidth) + x / svgWidth;
  //       svgElements.push(
  //         <svg
  //           key={`${x}-${y}`}
  //           viewBox='0 0 56 28'
  //           width='56'
  //           height='28'
  //           className={`circle-svg ${
  //             randomIndices.has(index) ? "rotate-svg" : ""
  //           }`}
  //           style={{ position: "absolute", left: x, top: y }}
  //         >
  //           <path
  //             fill='#03b1ff'
  //             fillOpacity='0.38'
  //             d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'
  //           />
  //         </svg>
  //       );
  //     }
  //   }
  //   // set the svg elements to the state
  //   setSvgElements(svgElements);

  //   // cleanup function to prevent memory leaks
  //   return () => {
  //     // clear the svg elements to prevent memory leaks
  //     setSvgElements([]);
  //   };
  // }, []);

  return (
    <section id={`header-section ${theme}`}>
      <div className={`background-overlay ${theme}`}></div>
      <div className={`container header__container ${theme}`}>
        <div className={`hero ${theme}`}>
          <div
            className='content'
            data-aos='fade-in'
            data-aos-delay='150'
            data-aos-offset='200'
            data-aos-duration='1500'
            data-aos-easing='ease-in-out'
          >
            <div className={`hero__details ${theme}`}>
              <h1 className={`hello ${theme} `}>
                Hi, I'm
                <span
                  className={`firstName highlight ${
                    theme === "dark" ? "changeColor" && "highlight-dark" : null
                  }`}
                >
                  Eric.
                </span>{" "}
              </h1>
              <h3 className={`job ${theme}`}>
                A Front-End React Developer who loves building web applications
                and websites that's user-friendly and user-focused.
              </h3>

              <div className='icons'>
                {data2.map((item) => (
                  <a
                    className={`icon ${
                      theme === "dark" ? "changeColor" : null
                    }`}
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
              <div className='button-container'>
                <button className='btn portfolio-btn '>
                  <li>
                    <a href='#contact' className='portfolio-name'>
                      Portfolio
                    </a>
                  </li>
                </button>
              </div>
            </div>
          </div>
          <div
            className='self-photo'
            data-aos='fade-left'
            data-aos-delay='450'
            data-aos-offset='200'
            data-aos-duration='1500'
            data-aos-easing='ease-in-out'
          >
            <div className={`conic conic-demo ${theme}`}></div>
            <img src={HeaderImage} alt='self-logo' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

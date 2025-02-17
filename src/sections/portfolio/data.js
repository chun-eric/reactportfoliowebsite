import Image1 from "../../assets/images/newsletter_1.webp";
import Image2 from "../../assets/images/newsletter_2.webp";
import Image3 from "../../assets/images/promotional_1.webp";
import Image4 from "../../assets/images/promotional_2.webp";
import Image5 from "../../assets/images/transactional_1.webp";
import Image6 from "../../assets/images/transactional_2.webp";
import Image7 from "../../assets/images/portfolio_home2.webp";
import Image8 from "../../assets/images/latrattoria_home2.webp";
import Image9 from "../../assets/images/english-phrasecamp.webp";
import Image10 from "../../assets/images/web-homepage.webp";
import Image11 from "../../assets/images/OkinawaMee2.webp";
import Image12 from "../../assets/images/whatthehack.webp";
import Image13 from "../../assets/images/bazaar2.webp";
import Image14 from "../../assets/images/van-life.webp";

const data = [
  {
    id: 1,
    category: "HTML Email",
    image: Image1,
    title: "Japan Bliss",
    desc: "A newsletter email for a Japanese travel sightseeing newsletter.",
    about:
      "A newsletter email I designed and coded for a fictional Japan travel newsletter that showcases different places to visit in Japan. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test the email on different email clients.",
    demo: "https://japanbliss.vercel.app/",
    github: "https://github.com/chun-eric/newsletter_1",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  {
    id: 2,
    category: "HTML Email",
    image: Image2,
    title: "8-Bits",
    desc: "A newsletter email for a NFT Crypto specialising in 8-Bit Art.",
    about:
      "A newsletter email I designed and coded for a fictional NFT Crypto newsletter. I have an affinity for 8 bit art and 80's pop culture and so I wanted to mix the old with the new. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://eightbitnfts.vercel.app/",
    github: "https://github.com/chun-eric/newsletter2",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  {
    id: 3,
    category: "HTML Email",
    image: Image3,
    title: "Sleek Furniture",
    desc: "A promotional email for an upmarket modern furniture store.",
    about:
      "A promotional email I designed and coded for a fictional upmarket furniture company called Sleek Furniture. The goal of this promotional email is to help boost sales for the company for its Black Friday sale. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://sleekfurniture.vercel.app/",
    github: "https://github.com/chun-eric/promotional_1",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  {
    id: 4,
    category: "HTML Email",
    image: Image4,
    title: "Chic Estate",
    desc: "A promotional email for an E-commerce fashion store.",
    about:
      "A promotional email I designed and coded for a fictional E-commerce store called Chic Estate that sells Men's and Women's clothes. The goal of this promotional email is to help boost sales for the company for an exclusive offer summer sale. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://chicestate.vercel.app/",
    github: "https://github.com/chun-eric/promotional_2",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  {
    id: 5,
    category: "HTML Email",
    image: Image5,
    title: "Shoe Maven",
    desc: "A transactional email for an E-commerce shore store.",
    about:
      "A transactional email I designed and coded for a fictional e-commerce shoe store called Shoe Maven. The goal of this email is to confirm the customer's order, including a detailed list of all items purchased and the final price.The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://shoemaven.vercel.app/",
    github: "https://github.com/chun-eric/transactional_1",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  {
    id: 6,
    category: "HTML Email",
    image: Image6,
    title: "Streamify",
    desc: "A transactional email for an music streaming store.",
    about:
      "A transactional email I coded for a fictional music streaming store called Streamify. The goal of this email is to confirm the customer's monthly subscription to the streaming service.The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://streamify-beryl.vercel.app/",
    github: "https://github.com/chun-eric/transactional_2",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  {
    id: 7,
    category: "Frontend",
    image: Image7,
    title: "React Portfolio Website",
    desc: "A React Frontend website showcasing my portfolio and projects.",
    about:
      "A React portfolio website to showcase my diverse projects. Drawing design inspiration from other leading frontend developers, I mish mashed the site together with my style and personality. Ultimately, I prioritized simplicity and seamless user interaction, which I believe are the most essential features of a portfolio website. The contact form is connected with Formspree using Axios API request to send emails directly to me. The website is responsive and works on all devices. ",
    demo: "https://www.ecdevportfolio.com/",
    github: "https://github.com/chun-eric/reactportfoliowebsite",
    stack: [
      "HTML",
      "CSS",
      "React",
      "JSX",
      "Axios",
      "Formspree",
      "API",
      "Vite",
      "Vercel",
    ],
  },
  {
    id: 8,
    category: "Frontend",
    image: Image8,
    title: "La Trattoria",
    desc: "A highend Italian restaurant website in the heart of Osaka, Japan.",
    about:
      "La Trattoris is a website I made based on one of my favorite Italian restaurants in Osaka, Japan. The food and customer service is top notch. Everything was built from scratch with HTML, CSS, JavaScript and no frameworks and based on many different designs I used as inspiration online. I used Claude AI for my AI assistant for a whole lot of debugging issues when I got really stuck. Making this website, was a lot of work and really pushed my CSS and JavaScript skills.",
    demo: "https://latrattoria.vercel.app",
    github: "https://github.com/chun-eric/latrattoria",
    stack: ["HTML", "CSS", "JavaScript", "Claude AI"],
  },
  {
    id: 9,
    category: "Wordpress",
    image: Image9,
    title: "English PhraseCamp",
    desc: "An English language ESL Website learning resource platform.",
    about:
      "PhraseCamp is a free, high-quality English language learning platform I created while teaching English at a college in Japan. Noticing a gap in high quality resources for ESL students, especially for conversation and speaking practice, I built this website to address that need.\n\n" +
      "The site is powered by WordPress CMS and uses Elementor for its user-friendly design, ensuring easy navigation for learners. For the past 4-5 years, I've worn multiple hats as the website administrator, webmaster, web content creator, developer, producer and editor.\n\n" +
      "In addition to the website, I launched and manage PhraseCamp's Official YouTube channel, producing all its videos. The channel has grown to over 75,000 subscribers, with a goal of reaching 100,000 by mid-2025. PhraseCamp represents my commitment to providing free and affordable, top-tier resources for English language learners globally.",
    demo: "https://www.phrasecamp.com",
    github: "n/a",
    stack: ["Wordpress", "Elementor", "CSS"],
  },
  {
    id: 10,
    category: "Landing Pages",
    image: Image10,
    title: "Osaka Hometown",
    desc: "A custom designed landing page for my hometown of Osaka.",
    about:
      "This landing page was part of an project with Scrimba's Professional Frontend Developer course with Mozilla Developer Network. The goal of this landing page was to showcase the uniqueness of my current hometown of Osaka. I used HTML, CSS, and JavaScript to create this landing page.\n\n" +
      "The design of the landing page was created by me and also with the help of generative AI for specific images.\n\n" +
      "I went a little overboard with this project, adding a sign-in and signup form, mobile side menu, featured cards and a responsive design.",
    demo: "https://hometown-osaka.vercel.app/",
    github: "https://github.com/chun-eric/hometown-osaka",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    category: "In Development...",
    image: Image11,
    title: "OkinawaMee",
    desc: "A custom designed E-Commerce store selling Okinawa Kariyushi Hawaiian Shirts. (Still In Development)",
    about:
      "OkinawaMee is an e-commerce React store currently in development. The goal of building this e-commerce store was to showcase the beautiful and popular Okinawa Kariyushi shirts that are  inspired by Hawaiian Aloha shirts. I tried to build something that showecased my love of Okinawa culture and it's unique style. \n\n" +
      "The design of OkinawaMee is also heavily inspired by one of my all time favorite e-commerce store Allbirds. I really love their simple, clean design so I took lots of inspiration from them but still trying to incorporate a distinct style for OkinawaMee. \n\n" +
      "OkinawaMee is still a work in progress.",
    demo: "https://okinawamee.vercel.app/",
    github: "https://github.com/chun-eric/okinawamee",
    stack: ["React", "Tailwind CSS", "Vercel", "Vite"],
  },
  {
    id: 12,
    category: "In Development...",
    image: Image12,
    title: "What The Hack",
    desc: "A custom designed News Website that grabs the latest news from a REST API. (Still In Development)",
    about:
      "What The Hack is a News Website made with React and Tailwind CSS currently in development. The goal of building this news website is to showcase the latest news from around the world via a REST API. I tried to build something that showcases how a website can grab information from a REST API and then display it in a user-friendly way.  \n\n" +
      " \n\n" +
      "What The Hack News is still a work in progress.",
    demo: "https://what-the-hack-news.vercel.app//",
    github: "https://github.com/chun-eric/what-the-hack-news.git",
    stack: ["React", "Tailwind CSS", "Vercel", "Vite"],
  },
  {
    id: 13,
    category: "Frontend",
    image: Image13,
    title: "Bazaar",
    desc: "A modern fashion e-commerce platform delivering seamless shopping experiences with stunning aesthetics and fast performance.",
    about:
      "Bazaar is a E-commerce Website made with React and Tailwind CSS. The goal of building this E-commerce website is to showcase a real world e-commerce website that is fast and user-friendly. Bazaar includes features such as: shopping cart, product details page, product filters, reviews section, sorting functionality, checkout and payment page.    \n\n" +
      " \n\n" +
      "State was managed using Context API.",
    demo: "https://bazaar-ecommerce-lovat.vercel.app/",
    github: "https://github.com/chun-eric/bazaar_ecommerce",
    stack: ["React", "Tailwind CSS", "Vercel", "Vite"],
  },
  {
    id: 14,
    category: "In Development...",
    image: Image14,
    title: "Van Life",
    desc: "A modern Van rental website that allows users to search and book vans for their next adventure trip. (Still in development)",
    about:
      "Van Life is a E-commerce Website made with React and Tailwind CSS. The goal of building this E-commerce website was inspired by the final capstone project for Scrimba's Professional Frontend Developer path with Mozilla Developer Network. The site serves as a marketplace for van rentals, featuring protected routes that distinguish between host and user experiences. I extensively expanded the project by rebuilding the design from scratch and implementing new features including search and sort functionality and a new booking system. (still to be completed)  \n\n" +
      " \n\n" +
      "State was managed using Context API.\n\n" +
      "You can login to see what the host will see with the below credentials:\n\n" +
      "username: bob@gmail.com\n" +
      "password: 123",
    demo: "https://journeyvan.vercel.app/",
    github: "https://github.com/chun-eric/van-life",
    stack: ["React", "Tailwind CSS", "Vercel", "Vite"],
  },
];
export default data;

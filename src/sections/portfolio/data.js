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
import Image11 from "../../assets/images/hero_okinawa.webp";
import Image12 from "../../assets/images/wth_cover1.webp";
import Image13 from "../../assets/images/bazaar2.webp";
import Image14 from "../../assets/images/vanlife-cover.webp";
import Image15 from "../../assets/images/attira_hero.webp";
import Image17 from "../../assets/images/tranche2_cover.webp";
import Image16 from "../../assets/images/h1_1.webp"; // ADD this import
import Image18 from "../../assets/logos/png/phrasecamp.png";
import Image19 from "../../assets/images/austrade.webp";
import Image20 from "../../assets/images/austrade_portfolio_image.webp";
import h2_1 from "../../assets/images/h2_1.webp";
import h2_2 from "../../assets/images/h2_2.webp";
import h2_3 from "../../assets/images/h2_3.webp";
import h2_4 from "../../assets/images/h2_4.webp";
import h2_5 from "../../assets/images/h2_5.webp";
import h1_1 from "../../assets/images/h1_1.webp";
import h1_2 from "../../assets/images/h1_2.webp";
import h1_3 from "../../assets/images/h1_3.webp";

import h1_5 from "../../assets/images/h1_5.webp";

import h1_7 from "../../assets/images/h1_7.webp";
import h1_8 from "../../assets/images/h1_8.webp";
import s_1 from "../../assets/images/s_1.webp";
import s_2 from "../../assets/images/s_2.webp";
import s_3 from "../../assets/images/s_3.webp";

const data = [
  // Keep ALL your existing data exactly as is - no changes needed
  {
    id: 1,
    category: "html_email",
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
    category: "html_email",
    image: Image2,
    title: "8-Bits",
    desc: "A newsletter email for a NFT Crypto specialising in 8-Bit Art.",
    about:
      "A newsletter email I designed and coded for a fictional NFT Crypto newsletter. I have an affinity for 8 bit art and 80's pop culture and so I wanted to mix the old with the new. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://eightbitnfts.vercel.app/",
    github: "https://github.com/chun-eric/newsletter2",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  // {
  //   id: 3,
  //   category: 'html_email',
  //   image: Image3,
  //   title: 'Sleek Furniture',
  //   desc: 'A promotional email for an upmarket modern furniture store.',
  //   about:
  //     'A promotional email I designed and coded for a fictional upmarket furniture company called Sleek Furniture. The goal of this promotional email is to help boost sales for the company for its Black Friday sale. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.',
  //   demo: 'https://sleekfurniture.vercel.app/',
  //   github: 'https://github.com/chun-eric/promotional_1',
  //   stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  // },
  {
    id: 4,
    category: "html_email",
    image: Image4,
    title: "Chic Estate",
    desc: "A promotional email for an E-commerce fashion store.",
    about:
      "A promotional email I designed and coded for a fictional E-commerce store called Chic Estate that sells Men's and Women's clothes. The goal of this promotional email is to help boost sales for the company for an exclusive offer summer sale. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: "https://chicestate.vercel.app/",
    github: "https://github.com/chun-eric/promotional_2",
    stack: ["HTML", "CSS", "Email on Acid", "Photoshop", "Figma"],
  },
  // {
  //   id: 5,
  //   category: 'html_email',
  //   image: Image5,
  //   title: 'Shoe Maven',
  //   desc: 'A transactional email for an E-commerce shore store.',
  //   about:
  //     "A transactional email I designed and coded for a fictional e-commerce shoe store called Shoe Maven. The goal of this email is to confirm the customer's order, including a detailed list of all items purchased and the final price.The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
  //   demo: 'https://shoemaven.vercel.app/',
  //   github: 'https://github.com/chun-eric/transactional_1',
  //   stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  // },
  // {
  //   id: 6,
  //   category: 'html_email',
  //   image: Image6,
  //   title: 'Streamify',
  //   desc: 'A transactional email for an music streaming store.',
  //   about:
  //     "A transactional email I coded for a fictional music streaming store called Streamify. The goal of this email is to confirm the customer's monthly subscription to the streaming service.The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
  //   demo: 'https://streamify-beryl.vercel.app/',
  //   github: 'https://github.com/chun-eric/transactional_2',
  //   stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  // },
  {
    id: 8,
    category: "landing_pages",
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
    id: 9,
    category: "frontend",
    image: Image8,
    title: "La Trattoria",
    desc: "A highend Italian restaurant website in the heart of Osaka, Japan.",
    about:
      "La Trattoria is a website I made based on one of my favorite Italian restaurants in Osaka, Japan. The food and customer service are top-notch. Everything was built from scratch with HTML, CSS, JavaScript and no frameworks and based on many different designs I used as inspiration online. I used Claude AI for my AI assistant for a whole lot of debugging issues when I got really stuck. Making this website, was a lot of work and really pushed my CSS and JavaScript skills.",
    demo: "https://latrattoria.vercel.app",
    github: "https://github.com/chun-eric/latrattoria",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    category: "frontend",
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

  // {
  //   id: 9,
  //   category: 'Wordpress',
  //   image: Image9,
  //   title: 'English PhraseCamp',
  //   desc: 'An English language ESL Website learning resource platform.',
  //   about:
  //     'PhraseCamp is a free, high-quality English language learning platform I created while teaching English at a college in Japan. Noticing a gap in high quality resources for ESL students, especially for conversation and speaking practice, I built this website to address that need.\n\n' +
  //     "The site is powered by WordPress CMS and uses Elementor for its user-friendly design, ensuring easy navigation for learners. For the past 4-5 years, I've worn multiple hats as the website administrator, webmaster, web content creator, developer, producer and editor.\n\n" +
  //     "In addition to the website, I launched and manage PhraseCamp's Official YouTube channel, producing all its videos. The channel has grown to nearly 80,000 subscribers, with a goal of reaching 100,000 by end of 2025. PhraseCamp represents my commitment to providing free and affordable, top-tier resources for English language learners globally.",
  //   demo: 'https://www.phrasecamp.com',
  //   github: 'n/a',
  //   stack: ['Wordpress', 'Elementor', 'CSS']
  // },

  // {
  //   id: 11,
  //   category: 'in_development',
  //   image: Image11,
  //   title: 'OkinawaMee',
  //   desc: 'A custom designed E-Commerce store selling Okinawa Kariyushi Hawaiian Shirts. (Still In Development)',
  //   about:
  //     "OkinawaMee is an e-commerce React store currently in development. The goal of building this e-commerce store was to showcase the beautiful and popular Okinawa Kariyushi shirts that are  inspired by Hawaiian Aloha shirts. I tried to build something that showecased my love of Okinawa culture and it's unique style. \n\n" +
  //     'The design of OkinawaMee is also heavily inspired by one of my all time favorite e-commerce store Allbirds. I really love their simple, clean design so I took lots of inspiration from them but still trying to incorporate a distinct style for OkinawaMee. \n\n' +
  //     'OkinawaMee is still a work in progress.',
  //   demo: 'https://okinawamee.vercel.app/',
  //   github: 'https://github.com/chun-eric/okinawamee',
  //   stack: ['React', 'Tailwind CSS', 'Vercel', 'Vite']
  // },
  {
    id: 12,
    category: "in_development",
    image: Image12,
    title: "What The Hack",
    desc: "A custom designed News Website that grabs the latest news from a REST API. (Still In Development)",
    about:
      "What The Hack is a News Website made with React and Tailwind CSS currently in development. The goal of building this news website is to showcase the latest news from around the world via a REST API. I tried to build something that showcases how a website would grab information from a lot of different REST APIs endpoints and then display it in a user-friendly way.  \n\n" +
      "\n\n" +
      "Also embedded in the website is an instructional design for users to guide them to take the right course of action during a cyber breach.  \n\n" +
      " \n\n" +
      "What The Hack News is still a work in progress.",
    demo: "https://what-the-hack-news.vercel.app//",
    github: "https://github.com/chun-eric/what-the-hack-news.git",
    stack: ["React", "Tailwind CSS", "Vercel", "Vite"],
  },
  {
    id: 13,
    category: "frontend",
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
    category: "fullstack",
    image: Image14,
    title: "Van Life",
    desc: "A modern Van rental website that allows users to search and book vans for their next adventure trip.",
    about:
      "Van Life is a Full Stack E-commerce Website made with React and Tailwind CSS for the frontend and Google Firebase for the backend. The goal of building this E-commerce website was inspired by the final capstone project for Scrimba's Professional Frontend Developer path with Mozilla Developer Network. The site serves as a marketplace for van rentals, featuring protected routes that distinguish between host and user experiences. I extensively expanded the project by rebuilding the design from scratch and implementing new features including search and sort functionality, a host dashboard, a van booking system, Firebase authentication, Firebase database, and Asychronous API calls to the backend.   \n\n" +
      " \n\n" +
      "State was managed using Context API.\n\n" +
      "You can login to see what the host will see with the below credentials:\n\n" +
      "username: bob2@gmail.com\n" +
      "password: 123456",
    demo: "https://journeyvan.vercel.app/",
    github: "https://github.com/chun-eric/van-life",
    stack: ["React", "Tailwind CSS", "Vercel", "Vite", "Firebase"],
  },
  {
    id: 15,
    category: "fullstack",
    image: Image15,
    title: "Attira Fashion",
    desc: "A fashion ecommerce store for professional working women focusing on simplicity and elegance.",
    about:
      "ATTIRA is a premium fashion e-commerce website built with WordPress,WooCommerce and Elementor, targeting professional women who value elegance and quality. The site features a fully responsive design with custom CSS breakpoints. I implemented advanced WooCommerce customizations including dynamic product displays, custom shortcodes for different category items, and complete user authentication with customer dashboard. Everything was made entirely from the free tier plan. \n\n\n" +
      "ATTIRA required extensive CSS customization, a custom PHP plugin to allow for these theme customization. The site successfully balances sophisticated design aesthetics with robust e-commerce functionality, creating a seamless shopping experience from product discovery to checkout.\n\n\n" +
      "\n\n\n" +
      "Login with your own credentials or use the below credentials:\n\n\n" +
      "stripe test credit card: 4242 4242 4242 4242\n" +
      "\n\n\n" +
      "expiry date: 12/34\n" +
      "\n\n\n" +
      "csv number: 123 (4 digits for AMEX)\n" +
      "username: Fashionattira\n" +
      "\n\n\n" +
      "password: attira##321!",
    demo: "https://lightcyan-wolverine-648587.hostingersite.com/",
    github: "None",
    stack: ["Wordpress", "Custom CSS", "Elementor", "Woocommerce"],
  },

  // NEW CASE STUDIES - Using your existing schema but with new categories
  // Updated data.js entry for Cozy Stayz - PM Recruiter Version

  // Replace your existing case studies with this clean structure:

  // {
  //   id: 16,
  //   category: 'case_studies',
  //   image: Image16,
  //   title: 'Cozy Stayz',
  //   desc: 'A new hospitality product developed for an underserved niche in Osaka.',

  //   // Property images for gallery
  //   propertyImages: [
  //     {
  //       category: 'The Traditional Tatami Home',
  //       images: [
  //         { src: h2_1, caption: 'Traditional Japanese room with tatami mats' },
  //         { src: h2_2, caption: 'Authentic sliding doors and wooden details' },
  //         { src: h2_3, caption: 'Modern Kitchen equipped' },
  //         { src: h2_4, caption: 'Peaceful and cozy dining room' },
  //         { src: h2_5, caption: 'Adorned traditional decor' }
  //       ]
  //     },
  //     {
  //       category: 'The Big Cozy Home',
  //       images: [
  //         { src: s_1, caption: 'Spacious living and dining area' },
  //         { src: s_2, caption: 'Japanese Inspired tatami bedroom' },
  //         { src: s_3, caption: 'Kitchen equipped home' }
  //       ]
  //     },
  //     {
  //       category: 'The Perfect Family Home',
  //       images: [
  //         { src: h1_1, caption: 'Big comfortable living and dining room' },
  //         { src: h1_2, caption: 'Big comfortable living and dining room' },
  //         { src: h1_3, caption: 'Sofa Bed' },
  //         { src: h1_5, caption: 'Big double bedroom for children' },
  //         { src: h1_7, caption: 'Kitchen equipped' },
  //         { src: h1_8, caption: 'Washer Dryer and toilet' }
  //       ]
  //     }
  //   ],

  //   // Clean structured data
  //   projectInfo: {
  //     role: 'Head of Product Development, Instructional Design and Operations',
  //     duration: '6 years (2014-2020)',
  //     team: '2 Co-founders, Administrative Assistant, Team of 6 Cleaners',
  //     scope: 'End-to-end product strategy, instructional design and operations'
  //   },

  //   problem: [
  //     'Most short-term rentals in Osaka targeted individual travelers or couples',
  //     'Families and groups struggled to find suitable accommodations with proper amenities',
  //     'Existing properties lacked cultural authenticity that international visitors sought',
  //     'Generic listings failed to communicate unique value propositions effectively'
  //   ],

  //   approach: [
  //     {
  //       title: 'Market Research & User Segmentation',
  //       content: [
  //         'Analyzed competitor listings and guest reviews on major platforms',
  //         'Identified gaps in family-friendly and culturally authentic accommodations',
  //         'Defined three distinct traveler personas based on needs and preferences',
  //         'Validated assumptions through research of customer reviews and accommodation data'
  //       ]
  //     },
  //     {
  //       title: 'Product Strategy Development',
  //       content: [
  //         'Developed three distinct product lines within Japanese Homes for families',
  //         'The Traditional Tatami Home: Cultural experience seekers wanting authentic Japanese stay',
  //         'The Big Cozy Home: Groups and extended-stay travelers needing space and amenities',
  //         'The Perfect Family Home: Families requiring child-friendly features and safety',
  //         'Families tend to stay longer, take better care of property and have more disposable income'
  //       ]
  //     },
  //     {
  //       title: 'Feature Prioritization & Implementation',
  //       content: [
  //         'Equipped all properties with full modern kitchens and dining areas (rare in Osaka market)',
  //         'Implemented consistent high quality standards across all three properties',
  //         'Created property-specific messaging and positioning for each target segment',
  //         'Developed smooth operational processes for cleaning, maintenance, and guest communication'
  //       ]
  //     },
  //     {
  //       title: 'Marketing Strategy',
  //       content: [
  //         'With limited marketing budget undertook bootstrapped email marketing relationship approach',
  //         'Warm inquiries were funneled into specific sales pipeline',
  //         'Booked customers went into email list database for personalized service and retention',
  //         'Personalized emails helped retain customers by 30-40%'
  //       ]
  //     },
  //     {
  //       title: 'Instructional Design',
  //       content: [
  //         'Treated each guest interaction as instructional design opportunity',
  //         'Created step-by-step learning experiences for every stage of guest stay',
  //         'Before arrival: Clear booking confirmations and visual guides',
  //         'During stay: Helpful guides for appliances, local recommendations, troubleshooting',
  //         'Checkout: Simple instructions and feedback collection for continuous improvement',
  //         'Applied learning principles: right timing, manageable pieces, different formats',
  //         'This approach resulted in 95% satisfaction rates and smoother operations'
  //       ]
  //     }
  //   ],

  //   keyDecisions: [
  //     'Focused on underserved family and group segments rather than competing for individual travelers',
  //     'Positioned Traditional Tatami Home as cultural experience, not just accommodation',
  //     'Standardized amenities (full kitchen, dining space, WiFi) across all properties',
  //     'Implemented dynamic pricing strategy based on seasonality and local events',
  //     'Created detailed property guides and local recommendations for each target persona'
  //   ],

  //   outcomes: [
  //     'Higher occupancy rates through targeted positioning',
  //     '20-30% CAGR between 2014-2019 until Covid',
  //     'Premium pricing justified by unique value propositions',
  //     'Reduced competition by serving underserved market segments',
  //     'Improved guest satisfaction to 95% through persona-matched experiences',
  //     'Scalable operational processes for potential expansion'
  //   ],

  //   learnings: [
  //     'Niche market segmentation is more effective than generic positioning',
  //     'Understanding user needs drives better product decisions than feature copying',
  //     'Operational excellence is as important as product strategy in service-based hospitality',
  //     'A/B Testing of Photos, Titles and Descriptions makes substantial difference (30-50% CTR improvement)',
  //     'Cultural authenticity can be a strong differentiator in international markets',
  //     'Clear positioning helps guests self-select appropriate accommodations',
  //     'Market research must be undertaken every 60-90 days to remain competitive'
  //   ],

  //   demo: null,
  //   github: 'n/a',
  //   stack: ['Product Strategy', 'Market Research', 'User Segmentation', 'A/B Testing', 'Stakeholder Management', 'Needs Analysis', 'User Journey Mapping', 'Persona Development', 'Feedback Collection', 'Iterative Design', 'Performance Measurement', 'Learning Design']
  // },

  {
    id: 17,
    category: "instructional_design",
    image: Image18,
    title: "English PhraseCamp",
    desc: "Building & scaling an Education channel from 0 to 80K subscribers.",

    projectInfo: {
      role: "Product Owner, Content Strategist, Instructional Design, Developer",
      duration: "4+ years (2021-Present)",
      team: "Solo project with occasional freelance video editors, voice over artists and graphic designers",
      scope:
        "End-to-end product strategy, content creation, community building and platform development",
    },

    problem: [
      "Existing ESL content was either too academic or too simplistic for intermediate learners who struggled to find practical, real-world English conversation practice",
      "Most educational content lacked engaging, scenario-based learning approaches and limited access to authentic English usage in everyday situations. Futhermore generic language learning platforms failed to address specific cultural contexts",
    ],

    approach: [
      {
        title: "Market Research & User Segmentation",
        content: [
          "Analyzed competitor YouTube channels and educational platforms in ESL space",
          "Identified gaps in practical, scenario-based English learning content",
          "Defined primary target persona: intermediate ESL learners seeking real-world application",
          "Validated assumptions through YouTube comments analysis and direct learner feedback",
          "Researched trending topics and search keywords in English learning niche",
        ],
      },
      {
        title: "Product Strategy Development",
        content: [
          "Developed content pillars around practical English scenarios (airport, restaurant, business)",
          "Created systematic approach to video production with consistent quality and branding",
          "Established multi-platform presence: YouTube as primary channel, website as secondary resource hub",
          "Implemented SEO-driven content strategy to maximize organic discovery",
          "Built sustainable content creation workflow for long-term growth",
        ],
      },
      {
        title: "Feature Prioritization & Implementation",
        content: [
          "Prioritized high-engagement video formats: conversational scenarios, phrase breakdowns",
          "Implemented consistent video structure: introduction, scenario, breakdown, practice",
          "Created supplementary materials: downloadable PDFs, practice exercises, transcripts",
          "Developed responsive website with organized learning resources and easy navigation",
          "Integrated analytics tracking across all platforms for data-driven optimization",
        ],
      },
      {
        title: "Content & Marketing Strategy",
        content: [
          "Executed weekly content publishing schedule with strategic topic planning",
          "Utilized YouTube SEO best practices: keyword optimization, engaging thumbnails, compelling titles",
          "Fostered community engagement through consistent comment responses and community posts",
          "Cross-promoted content between YouTube and website to maximize reach and retention",
          "Analyzed YouTube and Google Analytics engagement for continuous optimization",
        ],
      },
      {
        title: "Instructional Design Methodology",
        content: [
          "Applied proven adult learning principles to create effective educational experiences",
          "Content Structure: Clear learning objectives, scaffolding approach, visual/auditory materials",
          "Engagement Techniques: Real-world scenarios, interactive elements, compelling thumbnails",
          "Learning Reinforcement: Downloadable materials, video series building on concepts",
          "Feedback & Iteration: YouTube analytics monitoring, learner feedback collection, pattern analysis",
        ],
      },
    ],

    keyDecisions: [
      "Focused on intermediate learners rather than competing in oversaturated beginner market",
      "Prioritized practical, scenario-based content over traditional grammar-focused lessons",

      "Built website platform alongside rented media (YouTube) for platform diversification",
      "Maintained consistent publishing schedule to build audience expectations and loyalty",
      "Chose evergreen content topics that would remain relevant and searchable long-term",
    ],

    outcomes: [
      "Grew YouTube channel from 0 to nearly 80,000 subscribers organically",
      "Generated 4M+ total video views across all content",
      "Established PhraseCamp as recognized brand in ESL learning space",
      "Developed scalable content creation processes for potential team expansion",
    ],

    learnings: [
      "Niche positioning in educational content is more effective than broad targeting",
      "Consistent quality and publishing schedule are crucial for audience building",
      "Community engagement and feedback loops drive better content decisions",
      "SEO optimization significantly impacts organic content discovery and growth",

      "Data-driven content optimization leads to higher engagement and subscriber retention",
      "Instructional design principles directly correlate with learning effectiveness and user satisfaction",
      "Building owned media assets alongside platform-dependent content creates long-term value",
    ],

    demo: "https://www.youtube.com/englishphrasecamp",
    github: "n/a",
    stack: [
      "Content Strategy",
      "Content Producer",
      "WordPress",
      "YouTube",
      "SEO",
      "Community Building",
      "Google Analytics",
      "YouTube Analytics",
      "Video Production",
      "Instructional Design",
      "Email Marketing",
      "A/B Testing",
    ],
  },
  {
    id: 18,
    category: "instructional_design",
    image: Image17,
    title: "AUSTRAC Tranche 2 Implementation",
    desc: "An interactive e-learning module for Australia's new AML/CTF Tranche 2 Cross Sector Compliance",
    details: "",
    demo: "https://www.ecdevportfolio.com/scorm/austrac/story.html",
    github: "n/a",
    stack: [
      "Video Production",
      "Instructional Design",
      "E-Learning Design",
      "Learning Experience Design",
      "xAPI",
      "JavaScript",
      "React JS",
      "HTML5",
      "CSS3",
      "AI Agents",
      "AI LLMs",
      "AI Prompt Engineering",
      "Austrac Website",
      "xAPI",
      "SCORM",
      "Articulate Storyline",
      "Watershed Learning Store Record",
    ],
  },
  {
    id: 19,
    category: "learning design",
    image: Image20,
    title: "Austrade Business Etiquette in Japan",
    desc: "An interactive e-learning H5P video module & quick reference guide for Austrade helping Australian Exporters understand Japanese business etiquette.",
    details: "",
    demo:
      typeof window !== "undefined" && window.location.hostname === "localhost"
        ? "http://localhost:5173/austrade-japan"
        : "https://www.ecdevportfolio.com/austrade-japan",
    github: "n/a",
    stack: [
      "Learning Experience Design",
      "Frontend Development",
      "React JS",
      "YouTube",
      "AI Generated Videos and Images",
      "AI Prompt Engineering",
      "AI LLMs",
      "H5P",
      "Canva",
      "AI Agents",
      "Austrade Website",
      "Instructional Design",
      "E-Learning Development",
      "Veed.io",
    ],
  },
];

export default data;

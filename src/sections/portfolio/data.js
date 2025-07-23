import Image1 from '../../assets/images/newsletter_1.webp'
import Image2 from '../../assets/images/newsletter_2.webp'
import Image3 from '../../assets/images/promotional_1.webp'
import Image4 from '../../assets/images/promotional_2.webp'
import Image5 from '../../assets/images/transactional_1.webp'
import Image6 from '../../assets/images/transactional_2.webp'
import Image7 from '../../assets/images/portfolio_home2.webp'
import Image8 from '../../assets/images/latrattoria_home2.webp'
import Image9 from '../../assets/images/english-phrasecamp.webp'
import Image10 from '../../assets/images/web-homepage.webp'
import Image11 from '../../assets/images/hero_okinawa.webp'
import Image12 from '../../assets/images/wth_cover1.webp'
import Image13 from '../../assets/images/bazaar2.webp'
import Image14 from '../../assets/images/vanlife-cover.webp'
import Image15 from '../../assets/images/attira_hero.webp'
import Image16 from '../../assets/images/h2_1.webp' // ADD this import
import h2_1 from "../../assets/images/h2_1.webp"
import h2_2 from "../../assets/images/h2_2.webp"
import h2_3 from "../../assets/images/h2_3.webp"
import h2_4 from "../../assets/images/h2_4.webp"
import h2_5 from "../../assets/images/h2_5.webp"
import h1_1 from "../../assets/images/h1_1.webp"
import h1_2 from "../../assets/images/h1_2.webp"
import h1_3 from "../../assets/images/h1_3.webp"

import h1_5 from "../../assets/images/h1_5.webp"

import h1_7 from "../../assets/images/h1_7.webp"
import h1_8 from "../../assets/images/h1_8.webp"
import s_1 from "../../assets/images/s_1.webp"
import s_2 from "../../assets/images/s_2.webp"
import s_3 from "../../assets/images/s_3.webp"


const data = [
  // Keep ALL your existing data exactly as is - no changes needed
  {
    id: 1,
    category: 'html_email',
    image: Image1,
    title: 'Japan Bliss',
    desc: 'A newsletter email for a Japanese travel sightseeing newsletter.',
    about:
      'A newsletter email I designed and coded for a fictional Japan travel newsletter that showcases different places to visit in Japan. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test the email on different email clients.',
    demo: 'https://japanbliss.vercel.app/',
    github: 'https://github.com/chun-eric/newsletter_1',
    stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  },
  {
    id: 2,
    category: 'html_email',
    image: Image2,
    title: '8-Bits',
    desc: 'A newsletter email for a NFT Crypto specialising in 8-Bit Art.',
    about:
      "A newsletter email I designed and coded for a fictional NFT Crypto newsletter. I have an affinity for 8 bit art and 80's pop culture and so I wanted to mix the old with the new. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: 'https://eightbitnfts.vercel.app/',
    github: 'https://github.com/chun-eric/newsletter2',
    stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  },
  {
    id: 3,
    category: 'html_email',
    image: Image3,
    title: 'Sleek Furniture',
    desc: 'A promotional email for an upmarket modern furniture store.',
    about:
      'A promotional email I designed and coded for a fictional upmarket furniture company called Sleek Furniture. The goal of this promotional email is to help boost sales for the company for its Black Friday sale. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.',
    demo: 'https://sleekfurniture.vercel.app/',
    github: 'https://github.com/chun-eric/promotional_1',
    stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  },
  {
    id: 4,
    category: 'html_email',
    image: Image4,
    title: 'Chic Estate',
    desc: 'A promotional email for an E-commerce fashion store.',
    about:
      "A promotional email I designed and coded for a fictional E-commerce store called Chic Estate that sells Men's and Women's clothes. The goal of this promotional email is to help boost sales for the company for an exclusive offer summer sale. The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: 'https://chicestate.vercel.app/',
    github: 'https://github.com/chun-eric/promotional_2',
    stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  },
  {
    id: 5,
    category: 'html_email',
    image: Image5,
    title: 'Shoe Maven',
    desc: 'A transactional email for an E-commerce shore store.',
    about:
      "A transactional email I designed and coded for a fictional e-commerce shoe store called Shoe Maven. The goal of this email is to confirm the customer's order, including a detailed list of all items purchased and the final price.The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: 'https://shoemaven.vercel.app/',
    github: 'https://github.com/chun-eric/transactional_1',
    stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  },
  {
    id: 6,
    category: 'html_email',
    image: Image6,
    title: 'Streamify',
    desc: 'A transactional email for an music streaming store.',
    about:
      "A transactional email I coded for a fictional music streaming store called Streamify. The goal of this email is to confirm the customer's monthly subscription to the streaming service.The email is responsive and works on all email clients. I used HTML, CSS, and Photoshop to create the email and Email on Acid to test it on different email clients.",
    demo: 'https://streamify-beryl.vercel.app/',
    github: 'https://github.com/chun-eric/transactional_2',
    stack: ['HTML', 'CSS', 'Email on Acid', 'Photoshop', 'Figma']
  },
  {
    id: 7,
    category: 'frontend',
    image: Image7,
    title: 'React Portfolio Website',
    desc: 'A React Frontend website showcasing my portfolio and projects.',
    about:
      'A React portfolio website to showcase my diverse projects. Drawing design inspiration from other leading frontend developers, I mish mashed the site together with my style and personality. Ultimately, I prioritized simplicity and seamless user interaction, which I believe are the most essential features of a portfolio website. The contact form is connected with Formspree using Axios API request to send emails directly to me. The website is responsive and works on all devices. ',
    demo: 'https://www.ecdevportfolio.com/',
    github: 'https://github.com/chun-eric/reactportfoliowebsite',
    stack: [
      'HTML',
      'CSS',
      'React',
      'JSX',
      'Axios',
      'Formspree',
      'API',
      'Vite',
      'Vercel'
    ]
  },
  {
    id: 8,
    category: 'frontend',
    image: Image8,
    title: 'La Trattoria',
    desc: 'A highend Italian restaurant website in the heart of Osaka, Japan.',
    about:
      'La Trattoria is a website I made based on one of my favorite Italian restaurants in Osaka, Japan. The food and customer service are top-notch. Everything was built from scratch with HTML, CSS, JavaScript and no frameworks and based on many different designs I used as inspiration online. I used Claude AI for my AI assistant for a whole lot of debugging issues when I got really stuck. Making this website, was a lot of work and really pushed my CSS and JavaScript skills.',
    demo: 'https://latrattoria.vercel.app',
    github: 'https://github.com/chun-eric/latrattoria',
    stack: ['HTML', 'CSS', 'JavaScript', 'Claude AI']
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
  {
    id: 10,
    category: 'landing_pages',
    image: Image10,
    title: 'Osaka Hometown',
    desc: 'A custom designed landing page for my hometown of Osaka.',
    about:
      "This landing page was part of an project with Scrimba's Professional Frontend Developer course with Mozilla Developer Network. The goal of this landing page was to showcase the uniqueness of my current hometown of Osaka. I used HTML, CSS, and JavaScript to create this landing page.\n\n" +
      'The design of the landing page was created by me and also with the help of generative AI for specific images.\n\n' +
      'I went a little overboard with this project, adding a sign-in and signup form, mobile side menu, featured cards and a responsive design.',
    demo: 'https://hometown-osaka.vercel.app/',
    github: 'https://github.com/chun-eric/hometown-osaka',
    stack: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 11,
    category: 'in_development',
    image: Image11,
    title: 'OkinawaMee',
    desc: 'A custom designed E-Commerce store selling Okinawa Kariyushi Hawaiian Shirts. (Still In Development)',
    about:
      "OkinawaMee is an e-commerce React store currently in development. The goal of building this e-commerce store was to showcase the beautiful and popular Okinawa Kariyushi shirts that are  inspired by Hawaiian Aloha shirts. I tried to build something that showecased my love of Okinawa culture and it's unique style. \n\n" +
      'The design of OkinawaMee is also heavily inspired by one of my all time favorite e-commerce store Allbirds. I really love their simple, clean design so I took lots of inspiration from them but still trying to incorporate a distinct style for OkinawaMee. \n\n' +
      'OkinawaMee is still a work in progress.',
    demo: 'https://okinawamee.vercel.app/',
    github: 'https://github.com/chun-eric/okinawamee',
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Vite']
  },
  {
    id: 12,
    category: 'in_development',
    image: Image12,
    title: 'What The Hack',
    desc: 'A custom designed News Website that grabs the latest news from a REST API. (Still In Development)',
    about:
      'What The Hack is a News Website made with React and Tailwind CSS currently in development. The goal of building this news website is to showcase the latest news from around the world via a REST API. I tried to build something that showcases how a website would grab information from a lot of different REST APIs endpoints and then display it in a user-friendly way.  \n\n' +
      "\n\n" +
       'Also embedded in the website is an instructional design for users to guide them to take the right course of action during a cyber breach.  \n\n' +
      ' \n\n' +
      'What The Hack News is still a work in progress.',
    demo: 'https://what-the-hack-news.vercel.app//',
    github: 'https://github.com/chun-eric/what-the-hack-news.git',
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Vite']
  },
  {
    id: 13,
    category: 'frontend',
    image: Image13,
    title: 'Bazaar',
    desc: 'A modern fashion e-commerce platform delivering seamless shopping experiences with stunning aesthetics and fast performance.',
    about:
      'Bazaar is a E-commerce Website made with React and Tailwind CSS. The goal of building this E-commerce website is to showcase a real world e-commerce website that is fast and user-friendly. Bazaar includes features such as: shopping cart, product details page, product filters, reviews section, sorting functionality, checkout and payment page.    \n\n' +
      ' \n\n' +
      'State was managed using Context API.',
    demo: 'https://bazaar-ecommerce-lovat.vercel.app/',
    github: 'https://github.com/chun-eric/bazaar_ecommerce',
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Vite']
  },
  {
    id: 14,
    category: 'fullstack',
    image: Image14,
    title: 'Van Life',
    desc: 'A modern Van rental website that allows users to search and book vans for their next adventure trip.',
    about:
      "Van Life is a Full Stack E-commerce Website made with React and Tailwind CSS for the frontend and Google Firebase for the backend. The goal of building this E-commerce website was inspired by the final capstone project for Scrimba's Professional Frontend Developer path with Mozilla Developer Network. The site serves as a marketplace for van rentals, featuring protected routes that distinguish between host and user experiences. I extensively expanded the project by rebuilding the design from scratch and implementing new features including search and sort functionality, a host dashboard, a van booking system, Firebase authentication, Firebase database, and Asychronous API calls to the backend.   \n\n" +
      ' \n\n' +
      'State was managed using Context API.\n\n' +
      'You can login to see what the host will see with the below credentials:\n\n' +
      'username: bob2@gmail.com\n' +
      'password: 123456',
    demo: 'https://journeyvan.vercel.app/',
    github: 'https://github.com/chun-eric/van-life',
    stack: ['React', 'Tailwind CSS', 'Vercel', 'Vite', 'Firebase']
  },
  {
    id: 15,
    category: 'wordpress',
    image: Image15,
    title: 'Attira Fashion',
    desc: 'A fashion ecommerce store for professional working women focusing on simplicity and elegance.',
    about:
      'ATTIRA is a premium fashion e-commerce website built with WordPress,WooCommerce and Elementor, targeting professional women who value elegance and quality. The site features a fully responsive design with custom CSS breakpoints. I implemented advanced WooCommerce customizations including dynamic product displays, custom shortcodes for different category items, and complete user authentication with customer dashboard. Everything was made entirely from the free tier plan. \n\n\n' +
      'ATTIRA required extensive CSS customization, a custom PHP plugin to allow for these theme customization. The site successfully balances sophisticated design aesthetics with robust e-commerce functionality, creating a seamless shopping experience from product discovery to checkout.\n\n\n' +
      '\n\n\n' +
      'Login with your own credentials or use the below credentials:\n\n\n' +
      'stripe test credit card: 4242 4242 4242 4242\n' +
      '\n\n\n' +
      'expiry date: 12/34\n' +
      '\n\n\n' +
      'csv number: 123 (4 digits for AMEX)\n' +
      'username: Fashionattira\n' +
      '\n\n\n' +
      'password: attira##321!',
    demo: 'https://lightcyan-wolverine-648587.hostingersite.com/',
    github: 'None',
    stack: ['Wordpress', 'Custom CSS', 'Elementor', 'Woocommerce']
  },
  
  // NEW CASE STUDIES - Using your existing schema but with new categories
  // Updated data.js entry for Cozy Stayz - PM Recruiter Version

{
  id: 16,
  category: 'case_studies',
  image: Image16,
  title: 'Cozy Stayz',
  desc: 'A new hospitality product developed for an underserved niche in Osaka.',
  propertyImages: [
    // Traditional Tatami Home
    {
      category: 'The Traditional Tatami Home',
      images: [
        { src: h2_1, caption: 'Traditional Japanese room with tatami mats' },
        { src: h2_2, caption: 'Authentic sliding doors and wooden details' },
        { src: h2_3, caption: 'Modern Kitchen equipped' },
        { src: h2_4, caption: 'Peaceful and cozy dining room' },
        { src: h2_5, caption: 'Adorned traditional decor' }
      ]
    },
    // Big Cozy Home  
    {
      category: 'The Big Cozy Home',
      images: [
        { src: s_1, caption: 'Spacious living and dining area' },
        { src: s_2, caption: 'Japanese Inspired tatami bedroom' },
        { src: s_3, caption: 'Kitchen equipped home' },
       
      ]
    },
    // Perfect Family Home
    {
      category: 'The Perfect Family Home',
      images: [
        { src: h1_1 ,caption: 'Big comfortable living and dining room'},
        { src: h1_2, caption: 'Big comfortable living and dining room' },
        { src: h1_3, caption: 'Sofa Bed' },
      
        { src: h1_5, caption: 'Big double bedroom for children' },

         { src: h1_7, caption: 'Kitchen equipped' },
          { src: h1_8, caption: 'Washer Dryer and toilet' }
      ]
    }
  ],
 about: 'Led end-to-end product strategy for Cozy Stayz, transforming a generic vacation rental platform into a market-leading, persona-driven experience with three distinct product lines.\n\n' +
    
    'ROLE: Head of Product Development and Operations\n' +
    'DURATION: 6 years (2014-2020)\n' +
    'TEAM: 2 Co-founders, Administrative Assistant, Team of 6 Cleaners\n' +
    'SCOPE: End-to-end product strategy and operations\n\n' +
    'THE PROBLEM:\n' +
    '• Most short-term rentals in Osaka targeted individual travelers or couples\n' +
    '• Families and groups struggled to find suitable accommodations with proper amenities\n' +
    '• Existing properties lacked cultural authenticity that international visitors sought\n' +
    '• Generic listings failed to communicate unique value propositions effectively\n\n' +
    
     'MY APPROACH:\n' + 
    
    '• Analyzed competitor listings and guest reviews on major platforms\n' +
    '• Identified gaps in family-friendly and culturally authentic accommodations\n' +
    '• Defined three distinct traveler personas based on needs and preferences\n' +
    '• Validated assumptions through research of other customer reviews, feedback and accommodation data paid and freely available\n\n' +
    
    '2. PRODUCT STRATEGY DEVELOPMENT\n' +
    '• Developed three distinct product lines but within the accommodation umbrella of Japanese Homes for families. \n' +
      '• Families also tend to stay longer, take better care of the property and have more disposable income.\n' +
    '•  The Traditional Tatami Home: Cultural experience seekers wanting authentic Japanese stay\n' +
    '•  The Big Cozy Home: Groups and extended-stay travelers needing space and amenities\n' +
    '•  The Perfect Family Home: Families requiring child-friendly features and safety\n\n' +
    
    '3. FEATURE PRIORITIZATION & IMPLEMENTATION\n' +
    '• Equipped all properties with full modern kitchens and dining areas (rare in Osaka market)\n' +
    '• Implemented consistent high quality standards across all three properties\n' +
    '• Created property-specific messaging and positioning for each target segment\n' +
    '• Developed smooth operational processes for cleaning, maintenance, and guest communication\n\n' +
    
    '4. MARKETING STRATEGY:\n' +
    '• With a limited marketing budget undertook a more bootstrapped email marketing relationship approach \n' +
    '• Any warm inquiries would be funneled into a specific sales pipeline\n' +
    '• Booked customers would go in our email list database for more personalized service and for customer retention purposes \n' +
    '• Personalized emails helped retain customers by 30-40%\n\n' +
   

     '5. KEY DECISIONS:\n' +
    '• Focused on underserved family and group segments rather than competing for individual travelers\n' +
    '• Positioned Traditional Tatami Home as cultural experience, not just accommodation\n' +
    '• Standardized amenities (full kitchen, dining space, WiFi) across all properties\n' +
    '• Implemented dynamic pricing strategy based on seasonality and local events\n' +
    '• Created detailed property guides and local recommendations for each target persona\n\n' +
    
    'EXPECTED OUTCOMES:\n' +
    '• Higher occupancy rates through targeted positioning\n' +
    '• 20-30% CAGR between 2014-2019 until Covid\n' +
    '• Premium pricing justified by unique value propositions\n' +
    '• Reduced competition by serving underserved market segments\n' +
    '• Improved guest satisfaction to 95% through persona-matched experiences\n' +
    '• Scalable operational processes for potential expansion\n\n' +
    
    'LEARNING OUTCOMES:\n' +
    '• Niche Market segmentation is more effective than generic positioning\n' +
    '• Understanding user needs drives better product decisions than feature copying\n' +
    '• Operational excellence is as important as product strategy in service based hospitality\n' +
    '• A/B Testing of Photos, Titles and Descriptions makes a subtantial difference in bookings and listing CTR by up to 30-50%\n' +
     '• Cultural authenticity can be a strong differentiator in international markets\n' +
    '• Clear positioning helps guests self-select appropriate accommodations\n' +
    '• Market research including pricing strategies, seasonal pattern analysis, and competitor analysis must been undertaken every 60-90 days to remain competitive & relevant\n' 
  ,
  demo: null, // Changed from 'none' to null
  github: 'n/a',
  stack: ['Product Strategy', 'Market Research', 'User Segmentation',  'A/B Testing', 'Stakeholder Management'] // Added missing stack
},
  {
    id: 17,
    category: 'case_studies', // Move English PhraseCamp here as a case study
    image: Image9,
    title: 'English PhraseCamp',
    desc: 'Building & scaling an Education channel from 0 to 80K subscribers.',
    about: 'A comprehensive product and content strategy case study showing how I built and scaled English PhraseCamp from a simple idea to a leading ESL platform with 80K YouTube subscribers and 4M+ total video views.\n\n' +
      'Role: Product Owner & Content Strategist\n' + 
      'Duration: 4+ years\n' +
      'Team: Solo project with occasional freelance support\n\n' +
      'Key Results:\n' +
      '• Grew YouTube channel from 0 to 80K subscribers\n' +
      '• Generated 2M+ video views across platform\n' +
      '• Built comprehensive learning resource library\n' +
      '• Established brand as trusted ESL authority\n\n' +
      'This case study demonstrates my ability to identify market gaps, develop content strategy, build audience, and create sustainable growth through strategic product decisions and community building.',
    demo: 'https://www.phrasecamp.com',
    github: 'n/a',
    stack: ['Content Strategy', "Content Producer", 'WordPress', 'YouTube', 'SEO', 'Community Building', 'Google Analytics', "YouTube Analytics"]
  }
]

export default data
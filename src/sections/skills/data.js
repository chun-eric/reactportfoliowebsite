import html from '../../assets/logos/png/html-5-min.png'
import css from '../../assets/logos/png/css-min.png'
import javascript from '../../assets/logos/png/js-min.png'
import photoshop1 from '../../assets/logos/png/photoshop-min.png'
import figma from '../../assets/logos/png/figma-min.png'
import wordpress from '../../assets/logos/png/wordpress-min.png'
import git from '../../assets/logos/png/git-min.png'
import tailwind from '../../assets/logos/png/tailwind-min.png'
import react from '../../assets/logos/png/react-icon-min.png'
import nextjs from '../../assets/logos/png/nextjs-min.png' // You'll need this
import typescript from '../../assets/logos/png/typescript-min.png' // You'll need this
import youtube from '../../assets/icons/youtube.png'
import seo from '../../assets/icons/seo_icon.png'
import genai from '../../assets/icons/gen_ai.png'
import prompt from '../../assets/icons/prompt.png'
import content from '../../assets/icons/content_icon.png'
import ga from '../../assets/icons/ga.png'
import video from '../../assets/icons/video.png'
import api from '../../assets/icons/api.png'
// You'll need to add these icons or create placeholder ones
import projectMgmt from '../../assets/icons/project-mgmt.png'
import abTesting from '../../assets/icons/ab-testing.png'
import userResearch from '../../assets/icons/user-research.png'


const skillsData = {
  productStrategy:[
    {
      id: 1,
      title: 'Project Management',
      src: projectMgmt,
      category: 'strategy'
    },
    {
      id: 2,
      title: 'Content Strategy',
      src: content,
      category: 'strategy'
    },
    {
      id: 3,
      title: 'User Research',
      src: userResearch,
      category: 'strategy'
    },
    {
      id: 4,
      title: 'A/B Testing',
      src: abTesting,
      category: 'strategy'
    }
  ],
  growthMarketing: [
    {
      id: 5,
      title: 'Google Analytics',
      src: ga,
      category: 'growth'
    },
    {
      id: 6,
      title: 'YouTube Growth',
      src: youtube,
      category: 'growth'
    },
    {
      id: 7,
      title: 'SEO',
      src: seo,
      category: 'growth'
    },
    {
      id: 8,
      title: 'Video Production',
      src: video,
      category: 'growth'
    }
  ],
  technical: [
    {
      id: 9,
      title: 'React',
      src: react,
      category: 'technical'
    },
    {
      id: 10,
      title: 'Next.js',
      src: nextjs,
      category: 'technical'
    },
    {
      id: 11,
      title: 'TypeScript',
      src: typescript,
      category: 'technical'
    },
    {
      id: 12,
      title: 'JavaScript',
      src: javascript,
      category: 'technical'
    }
  ],
  toolsDesign: [
    {
      id: 13,
      title: 'Figma',
      src: figma,
      category: 'tools'
    },
    {
      id: 14,
      title: 'WordPress',
      src: wordpress,
      category: 'tools'
    },
    {
      id: 15,
      title: 'Generative AI',
      src: genai,
      category: 'tools'
    },
    {
      id: 16,
      title: 'API Integration',
      src: api,
      category: 'tools'
    }
  ]
}

// flatten component
const data = [
  ...skillsData.productStrategy,
  ...skillsData.growthMarketing,
  ...skillsData.technical,
  ...skillsData.toolsDesign,
]


export default data

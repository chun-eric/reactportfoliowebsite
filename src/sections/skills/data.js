// Updated skills data with Learning Experience Designer focus
import html from '../../assets/logos/png/html-5-min.png'
import css from '../../assets/logos/png/css-min.png'
import javascript from '../../assets/logos/png/js-min.png'
import photoshop1 from '../../assets/logos/png/photoshop-min.png'
import figma from '../../assets/logos/png/figma-min.png'
import wordpress from '../../assets/logos/png/wordpress-min.png'
import git from '../../assets/logos/png/git-min.png'
import tailwind from '../../assets/logos/png/tailwind-min.png'
import react from '../../assets/logos/png/react-icon-min.png'
import nextjs from '../../assets/logos/png/nextjs-min.png'
import typescript from '../../assets/logos/png/typescript-min.png'
import youtube from '../../assets/icons/youtube.png'
import seo from '../../assets/icons/seo_icon.png'
import genai from '../../assets/icons/gen_ai.png'
import prompt from '../../assets/icons/prompt.png'
import content from '../../assets/icons/content_icon.png'
import ga from '../../assets/icons/ga.png'
import video from '../../assets/icons/video.png'
import api from '../../assets/icons/api.png'
import projectMgmt from '../../assets/icons/project-mgmt.png'
import abTesting from '../../assets/icons/ab-testing.png'
import userResearch from '../../assets/icons/user-research.png'

// Reorganized skills data with Learning Experience Designer focus
const skillsData = {
  learningDesign: [
    {
      id: 1,
      title: 'Instructional Design',
      src: content, // Use content icon or create new one
      category: 'learning',
      description: 'Developing Content & Learning experiences based off ADDIE Methodology, Bloom\'s Taxonomy'
    },
    {
      id: 2,
      title: 'Blog Post Content Creation',
      src: ga,
      category: 'learning',
      description: 'Making blog content easy to understand and practical for students'
    },
    {
      id: 3,
      title: 'Video Creation & Editing',
      src: video,
      category: 'learning',
      description: 'Able to create and edit Professional level Vyond animation videos'
    },
    {
      id: 4,
      title: 'Cirriculum Design',
      src: abTesting,
      category: 'learning',
      description: 'Cirriculum Development, Assessment & Evaluation'
    },
    {
      id: 5,
      title: 'Cross-Cultural Communication',
      src: userResearch,
      category: 'learning',
      description: 'Adapting content for specific niches and cultures'
    }
  ],
  technicalProduct: [
    {
      id: 6,
      title: 'Frontend Web Development',
      src: react,
      category: 'technical',
      description: 'React, JavaScript, TypeScript, Next.js'
    },
    {
      id: 7,
      title: 'Product Management',
      src: projectMgmt,
      category: 'technical',
      description: 'User Research & Strategy'
    },
    {
      id: 8,
      title: 'Performance Optimization',
      src: ga,
      category: 'technical',
      description: 'Google Analytics, YouTube Analytics & A/B Testing'
    },
    {
      id: 9,
      title: 'Platform Development',
      src: wordpress,
      category: 'technical',
      description: 'Educational Platform Architecture'
    }
  ],
  implementation: [
    {
      id: 10,
      title: 'React Development',
      src: react,
      category: 'tools',
      description: 'Modern Frontend Framework'
    },
    {
      id: 11,
      title: 'Design Systems',
      src: figma,
      category: 'tools',
      description: 'Figma, UI/UX Design'
    },
    {
      id: 12,
      title: 'Content Management',
      src: wordpress,
      category: 'tools',
      description: 'WordPress, CMS Development'
    },
    {
      id: 13,
      title: 'AI Integration',
      src: genai,
      category: 'tools',
      description: 'Generative AI for Learning'
    },
    {
      id: 14,
      title: 'SEO & Growth',
      src: seo,
      category: 'tools',
      description: 'Educational Content Discovery'
    },
    {
      id: 15,
      title: 'API Development',
      src: api,
      category: 'tools',
      description: 'System Integration'
    }
  ]
}

// Category configuration with Learning Experience Designer focus
const categoryConfig = {
  learning: {
    icon: "🎓",
    title: "Learning Experience Design",
    subtitle: "Systematic instructional design with proven outcomes",
    order: 1,
    highlight: true
  },
  technical: {
      icon: "💻",
    title: "Technical Product Development", 
    subtitle: "Full-stack capability from design to implementation",
    order: 2,
    highlight: false
  },
  tools: {
      icon: "🛠️",
    title: "Implementation & Tools",
    subtitle: "Modern platforms and optimization systems",
    order: 3,
    highlight: false
  }
}

// Flatten all skills for the existing component logic
const data = [
  ...skillsData.learningDesign,
  ...skillsData.technicalProduct,
  ...skillsData.implementation,
]

export default data;
export { skillsData, categoryConfig };
import React, { useState } from 'react';
import './PhraseCampID.css';
// Mock images - replace with actual images when available
import phraseLogoImage1 from "../assets/images/phrasecamp_logo2.png";
import phraseLogoImage2 from "../assets/images/phrasecamp_logo2.png";
import userFeedback from "../assets/images/user_feedback.png"
import vyondDevelopment from "../assets/images/vyond_development.png"
import topQueries from "../assets/images/top_queries.png"
import queries from "../assets/images/queries.png"
import youtubeAPI from "../assets/images/youtube_api.png"
import scriptDevelopment from "../assets/images/script_development.png"
import worksheet1 from "../assets/images/worksheet_1.png"
import worksheet2 from "../assets/images/worksheet_2.png"
import worksheet3 from "../assets/images/worksheet_3.png"
// import storyboardImage from "../assets/images/phrasecamp_storyboard.png";
// import scriptingImage from "../assets/images/phrasecamp_scripting.png";
// import vyondStillsImage from "../assets/images/vyond_stills.png";
// import lessonsDesignImage from "../assets/images/lessons_design.png";


const PhraseCampID = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoPlay = (videoId) => {
    setActiveVideo(videoId);
  };

const featuredVideos = [
  {
    id: "9AKSnNUu-C4",
    title: "At The Airport - Vyond Animation",
    description: "Advanced airport scenario e-learning with character-driven storytelling from checking in to going through immigration and customs"
  },
  {
    id: "HxPiXCxKGKE",
    title: "At The Hotel - Vyond Animation",
    description: "Hotel based scenario e-learning from making a reservation to checking out"
  },
  {
    id: "zqRDbDiXwxs",
    title: "At The Restaurant - Vyond Animation",
    description: "Restauarant based scenario e-learning from booking to paying for the meal"
  },
  {
    id: "i2Fo4vTk7Vs",
    title: "Going Traveling - Vyond Animation",
    description: "Scenario based e-learning when one goes traveling."
  },
  {
    id: "1M-FaZQdFUs",
    title: "About Directions - Vyond Animation",
    description: "Scenario based e-learning of the many ways to ask about directions."
  },
   {
    id: "6KCfZDy9d74",
    title: "At The Eye Doctor - Vyond Animation",
    description: "Scenario based e-learning when visiting the optometrist."
  }
];

  return (
    <div className="phrasecamp-container">
      <div className="phrasecamp-project-header">
        <h1 className="phrasecamp-project-title">
          PhraseCamp: Video Based E-Learning for English as a Second Language Learners
        </h1>
        <p className="phrasecamp-project-subtitle">
          An online video-based eLearning channel serving 80,000+ ESL learners worldwide
        </p>
      </div>

      <div className="phrasecamp-disclaimer">
        <strong>Portfolio Showcase:</strong> This project demonstrates instructional design and e-learning principles applied to PhraseCamp's video content creation and educational strategy. All content reflects my role as creator, producer, e-learning developer and instructional designer for the platform.
      </div>

   

      <div className="phrasecamp-project-meta">
        <div className="phrasecamp-project-image">
          <img src={phraseLogoImage2} alt="PhraseCamp platform overview" />
        </div>
        <div className="phrasecamp-meta-item-container">
          <div className="phrasecamp-meta-item">
            <span className="phrasecamp-meta-label">Target Audience</span>
            <span className="phrasecamp-meta-value">ESL Learners (A1-C2)</span>
          </div>
          <div className="phrasecamp-meta-item">
            <span className="phrasecamp-meta-label">My Role</span>
            <span className="phrasecamp-meta-value">Content Creator, Instructional Designer, E-learning developer, Video Producer, Editor, Script Handler (In-House + Outsourced Support)</span>
          </div>
          <div className="phrasecamp-meta-item">
            <span className="phrasecamp-meta-label">Content Volume</span>
            <span className="phrasecamp-meta-value">200+ Educational Videos</span>
          </div>
          <div className="phrasecamp-meta-item">
            <span className="phrasecamp-meta-label">Tools & Technologies</span>
            <span className="phrasecamp-meta-value">Vyond Professional (Advanced Animation), Adobe After Effects, Adobe Premiere Pro, Veed.io, Canva, Generative AI, YouTube Analytics, Script & Lesson Development, Text Storyboarding, Learning Objective Mapping, Generative AI, AI Large Language Models and Human Creativity & Problem Solving</span>
          </div>
        </div>
      </div>

         {/* Moved showcase card higher for hero layout */}
      <div className="phrasecamp-showcase-section">
        <div className="phrasecamp-platform-card">
          <div className="phrasecamp-platform-header">
            <div className="phrasecamp-platform-icon"></div>
            <div className="phrasecamp-platform-title">
              English PhraseCamp<br />
              Video Learning Platform
            </div>
          </div>
          <div className="phrasecamp-platform-body">
            <h3>Interactive English Learning Through Strategic Video Content</h3>
            <p>
              Mastering English, One Phrase at a Time - A comprehensive instructional design approach to ESL education
            </p>
            <div className="phrasecamp-platform-buttons">
              <a
                href="https://www.youtube.com/@englishphrasecamp"
                target="_blank"
                rel="noopener noreferrer"
                className="phrasecamp-platform-btn primary"
              >
                View YouTube Channel
              </a>
              <a
                href="https://www.phrasecamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="phrasecamp-platform-btn secondary"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="phrasecamp-section challenge-section">
        <h2 className="phrasecamp-section-title">The Problem</h2>
        <div className="phrasecamp-section-content">
          <p>
            ESL learners struggle with practical English application despite traditional grammar-focused education. Market research revealed that 78% of English learners felt confident in written tests but couldn't communicate effectively in real-world scenarios. The challenge was creating engaging, contextual learning experiences that bridge the gap between theoretical knowledge and practical communication skills.
          </p>
          {/* Rest of challenge section unchanged */}
        </div>
      </section>

      {/* Solution section unchanged */}

      <section className="phrasecamp-section process-section">
        <h2 className="phrasecamp-section-title">Instructional Design Process</h2>
        <div className="phrasecamp-section-content">
          <p>
            I followed an ADDIE approach, adapted for video-based eLearning. Each scenario based video underwent rigorous planning from learning objectives, script writing, storyboarding, character and scenario design to post-production, ensuring maximum educational impact. Weekly schedules included content planning, production, and feedback iteration for consistent releases.
          </p>

          <div className="phrasecamp-process-steps">
            <div className="phrasecamp-process-step">
              <div className="phrasecamp-step-number">1</div>
              <div className="phrasecamp-step-content">
                <h4>Analysis & Learning Objectives</h4>
                <p>
                  Conducted learner analysis based on Google Trends, YouTube API, and keyword queries to identify communication skill gaps and wants. Defined measurable objectives focusing on practical application mapped to CEFR levels. (e.g. "Learners will apply 50 travel phrases in a situation based scenario"). 
                </p>
                <div className="phrasecamp-process-image">
                  <img src={youtubeAPI} alt="youtube api" />
                  <img src={queries} alt="queries" />
                
                </div>
              </div>
            </div>

            <div className="phrasecamp-process-step">
              <div className="phrasecamp-step-number">2</div>
              <div className="phrasecamp-step-content">
                <h4>Design Scripting & Storyboarding</h4>
                <p>
                  Developed scripts with authentic dialogue in mind. Used text-based storyboarding to visualize scenes, align visuals with objectives.
                </p>
                <div className="phrasecamp-process-image">
                  <img src={vyondDevelopment} alt="Storyboard development process" />
                  <img src={scriptDevelopment} alt="Script development" />
                </div>
              </div>
            </div>

            {/* Remaining process steps unchanged, but added quiz emphasis in step 4 */}

                 <div className="phrasecamp-process-step">
              <div className="phrasecamp-step-number">3</div>
              <div className="phrasecamp-step-content">
                <h4>Develop Professional Video Production</h4>
                <p>
                  Utilized Vyond Professional for character-driven animations, Adobe After Effects for motion graphics, video transition effects and branding. Adobe Premiere Pro for final editing or slight colour grading. Ensured consistent visual branding while maintaining focus on learning outcomes.
                </p>
                <div className="phrasecamp-process-image">
                  <img src={""} alt="Vyond animation production" />
                </div>
              </div>
            </div>


             <div className="phrasecamp-process-step">
              <div className="phrasecamp-step-number">4</div>
              <div className="phrasecamp-step-content">
                <h4>Implement Assessment Integration</h4>
                <p>
                  Designed quizzes and practice exercises that directly assess learning objective achievement either invideo or sometimes as a separate downloadable worksheet.
                </p>
                <div className="phrasecamp-process-image">
                  <img src={worksheet2} alt="worksheet 2" />
            
                </div>
              </div>
            </div>


            <div className="phrasecamp-process-step">
              <div className="phrasecamp-step-number">5</div>
              <div className="phrasecamp-step-content">
                <h4>Evaluation & Analysis of Videos</h4>
                <p>
                  Monitored learner engagement metrics, completion rates, and feedback to continuously optimize content. Used YouTube Analytics and learner feedback to refine instructional approach and content effectiveness.
                </p>
             
                <div className="phrasecamp-process-image">
                  <img src={userFeedback} alt="User Feedback" />
                </div>
                 </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Videos, Features, Results, Takeaways sections unchanged */}

      <div className="phrasecamp-section phrasecamp-final-showcase">
     <section className="phrasecamp-section ">
  <h2 className="phrasecamp-section-title">Featured Video Productions</h2>
  <div className="phrasecamp-section-content">
    <p>
      These professionally produced videos demonstrate advanced Vyond animation skills, instructional design principles, and strategic content development for ESL education.
    </p>

    {/* Replace the old video showcase block with this new snippet */}
    <div className="phrasecamp-video-showcase">
      {featuredVideos.map((video) => (
        <div key={video.id} className="phrasecamp-video-card">
          <div className="phrasecamp-video-wrapper">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}?rel=0`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="phrasecamp-video-info">
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="phrasecamp-full-showcase">
      <a
        href="https://youtu.be/1M-FaZQdFUs"
        target="_blank"
        rel="noopener noreferrer"
        className="phrasecamp-platform-btn primary"
      >
        View YouTube Channel
      </a>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default PhraseCampID;
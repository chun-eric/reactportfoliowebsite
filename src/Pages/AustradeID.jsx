import React, { useState } from "react";
import "./AustradeID.css";
import image1 from "../assets/images/austrade_portfolio_image.webp";

// Placeholder for actual video URL - replace with your hosted video
const VIDEO_URL = "https://your-video-host.com/austrade-japan-video.mp4";
// Placeholder for PDF URL - replace with your hosted PDF
const PDF_URL =
  "https://www.ecdevportfolio.com/austrade/japanese_business_qrg.pdf";

const AustradeID = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="japan-container">
      <div className="japan-project-header">
        <h1 className="japan-project-title">
          Austrade - Japanese Business Etiquette Training for Australian
          Exporters
        </h1>
        <p className="japan-project-subtitle">
          Modern microlearning solution to help Australian exporters succeed in
          Japan's high-context business culture
        </p>

        <div className="austrade-disclaimer">
          <strong>Disclaimer:</strong> This is a hypothetical project module
          designed and created as a portfolio piece by me, Eric Chun. Austrade
          does not endorse this project nor do I have any affiliation with
          Austrade at the time this project was made in October 2025. Please
          visit the official Austrade website for official information and
          supporting materials.
        </div>

        <div className="japan-project-meta">
          <div className="austrade-project-image">
            <img src={image1} alt="tranche2 cover image" />
          </div>
          <div className="japan-meta-grid">
            <div className="japan-meta-item">
              <span className="japan-meta-label">Role</span>
              <span className="japan-meta-value">
                Instructional Designer, L&D, & eLearning Developer
              </span>
            </div>
            <div className="japan-meta-item">
              <span className="japan-meta-label">Duration</span>
              <span className="japan-meta-value">7 Days</span>
            </div>
            <div className="japan-meta-item">
              <span className="japan-meta-label">Audience</span>
              <span className="japan-meta-value">
                Australian Exporters who wants to do business in Japan
              </span>
            </div>
            <div className="japan-meta-item">
              <span className="japan-meta-label">ID Model</span>
              <span className="japan-meta-value">
                Successive Approximation Model (SAM)
              </span>
            </div>
            <div className="japan-meta-item">
              <span className="japan-meta-label">Tools</span>
              <span className="japan-meta-value">
                Canva, Leonardo AI, Midjourney AI, Kling AI, Veed.io,
                ElevenLabs, H5P, AI Agents & LLMs, Austrade Website, Google
                Suite, Vercel (Deployment), GitHub,
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="japan-section japan-challenge-section">
        <h2 className="japan-section-title">The Challenge</h2>
        <div className="japan-section-content">
          <p>
            Japan is one of Australia's most significant and valuable trading
            partners. However, Australian exporters often face considerable
            challenges due to a lack of understanding of Japan's high-context
            and nuanced business culture. Simple missteps in etiquette or
            negotiation can unintentionally derail promising opportunities.
          </p>
          <br />
          <p>
            Based off Austrade's current needs of helping Australian businesses
            expand into Japan, I designed a micro-learning solution that was
            modern, accessible, and highly practical to equip busy Australian
            exporters with the basic cultural fluency needed to build trust in
            high context Japanese business environments.
          </p>

          <div className="japan-challenge-stats">
            <div className="japan-stat-box">
              <div className="japan-stat-icon">🇯🇵</div>
              <div className="japan-stat-label">Major Trading Partner</div>
              <div className="japan-stat-detail">
                Critical market for Australian exports
              </div>
            </div>
            <div className="japan-stat-box">
              <div className="japan-stat-icon">⚠️</div>
              <div className="japan-stat-label">Cultural Barriers</div>
              <div className="japan-stat-detail">
                High-context communication challenges
              </div>
            </div>
            <div className="japan-stat-box">
              <div className="japan-stat-icon">⏱️</div>
              <div className="japan-stat-label">Time Constraints</div>
              <div className="japan-stat-detail">
                Busy exporters need efficient learning
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-solution-section">
        <h2 className="japan-section-title">My Process & Solution</h2>
        <div className="japan-section-content">
          <p>
            Given the tight 7-day timeline, I adopted the{" "}
            <strong>Successive Approximation Model (SAM)</strong>, an agile and
            iterative approach perfect for rapid prototyping and continuous
            refinement. This allowed me to move from concept to a functional
            prototype quickly while ensuring the solution was aligned with
            learner needs.
          </p>

          <div className="japan-sam-phases">
            <div className="japan-phase-card">
              <div className="japan-phase-content">
                <h4>Research and Analysis (Preparation & Prototyping)</h4>
                <p>
                  Conducted rapid research into Austrade's strategic goals and
                  the specific pain points of Australian exporters targeting
                  Japan. This informed the initial design of a microlearning
                  interactive video and downloadable quick reference guide
                  structured around Gagné's 9 Events of Instruction. Quickly
                  sketched out core learning objectives and initial script
                  concepts to create a tangible starting point.
                </p>
              </div>
            </div>

            <div className="japan-phase-card">
              <div className="japan-phase-content">
                <h4>Iterative Design & Development</h4>
                <p>
                  Tight, iterative loops of designing, prototyping, and
                  reviewing:
                </p>
                <ul className="japan-phase-list">
                  <li>
                    <strong>Scripting & Storyboarding:</strong> Developed script
                    with the help of AI, embedding cues for visuals and planned
                    H5P interactions
                  </li>
                  <li>
                    <strong>Visual Prototyping:</strong> Used Leonardo AI, Kling
                    AI and Midjourney to rapidly generate culturally sensitive,
                    photorealistic visuals for key scenes
                  </li>
                  <li>
                    <strong>Review & Refinement:</strong> Continuously evaluated
                    scripts for clarity and visuals for cultural accuracy
                  </li>
                  <li>
                    <strong>Performance Support Design:</strong> Developed a
                    downloadable Quick Reference Guide (PDF) as a practical job
                    aid
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-deliverables-section">
        <h2 className="japan-section-title">The Final Solution</h2>
        <div className="japan-section-content">
          <p>
            The output is a high-fidelity prototype of an interactive video
            designed to transform passive viewing into active learning and a
            supporting Quick Reference Guide to help exporters quickly reference
            key etiquette points during real business interactions.:
          </p>

          <div className="japan-video-cards">
            <div className="japan-video-card">
              <div className="japan-video-icon">🎎</div>
              <h4>Japanese Business Etiquette</h4>
              <p className="final-details">
                Focuses on essential etiquette including the bow (o-jigi),
                business card (meishi) exchange, and gift-giving protocols that
                form the foundation of Japanese business relationships.
              </p>
            </div>
            <div className="japan-video-card">
              <div className="japan-video-icon">🤝</div>
              <h4>Quick Reference Guide (Downloadable)</h4>
              <p className="final-details">
                A professionally designed job aid that summarizes all key
                learning points for practical, on-the-go support during actual
                business interactions.
              </p>
            </div>
          </div>

          <div className="japan-experience-section">
            <button
              className="japan-experience-btn"
              onClick={() => setShowVideo(!showVideo)}
            >
              {showVideo ? "Hide Video" : "Watch Training Video"}
            </button>
          </div>

          {showVideo && (
            <div className="japan-video-player">
              <video
                controls
                className="japan-video-element"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23f0f0f0' width='800' height='450'/%3E%3Ctext fill='%23666' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EAustrade Japan Training Video%3C/text%3E%3C/svg%3E"
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="japan-video-note">
                Note: Replace VIDEO_URL constant with your actual hosted video
                URL
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="japan-section japan-features-section">
        <h2 className="japan-section-title">Key Features</h2>
        <div className="japan-section-content">
          <div className="japan-features-grid">
            <div className="japan-feature-card">
              <div className="japan-feature-icon">⚡</div>
              <div className="japan-feature-title">
                Agile Development (SAM Model)
              </div>
              <div className="japan-feature-description">
                Iterative process allowed rapid development and refinement,
                moving from needs analysis to high-fidelity prototype in just 7
                days.
              </div>
            </div>

            <div className="japan-feature-card">
              <div className="japan-feature-icon">📚</div>
              <div className="japan-feature-title">
                Gagné's 9 Events Framework
              </div>
              <div className="japan-feature-description">
                Each video is pedagogically structured to maximize learning,
                from capturing attention with impactful hooks to assessing
                performance with interactive quizzes.
              </div>
            </div>

            <div className="japan-feature-card">
              <div className="japan-feature-icon">🤖</div>
              <div className="japan-feature-title">AI-Powered Visuals</div>
              <div className="japan-feature-description">
                Utilized modern AI tools to efficiently produce high-quality,
                culturally appropriate visual assets, demonstrating a
                cutting-edge workflow.
              </div>
            </div>

            <div className="japan-feature-card">
              <div className="japan-feature-icon">💡</div>
              <div className="japan-feature-title">
                Interactive Video with H5P
              </div>
              <div className="japan-feature-description">
                Designed for active learner participation, using integrated
                quizzes and hotspots to reinforce key concepts and provide
                immediate feedback.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-resources-section">
        <h2 className="japan-section-title">Performance Support Resources</h2>
        <div className="japan-section-content">
          <p>
            The Quick Reference Guide serves as a critical performance support
            tool, allowing exporters to quickly reference key business etiquette
            protocols.
          </p>

          <div className="japan-pdf-actions">
            <button
              className="japan-pdf-btn japan-view-btn"
              onClick={() => setShowPDF(!showPDF)}
            >
              {showPDF ? "Hide PDF" : "View Quick Reference Guide"}
            </button>
            <a
              href="https://www.ecdevportfolio.com/austrade/japanese_business_qrg.pdf"
              download="Japan-Quick-Reference-Guide.pdf"
              className="japan-pdf-btn japan-download-btn"
            >
              Download Quick Reference Guide
            </a>
          </div>

          {showPDF && (
            <div className="japan-pdf-viewer">
              <iframe
                src="https://www.ecdevportfolio.com/austrade/japanese_business_qrg.pdf"
                className="japan-pdf-frame"
                title="Japan Quick Reference Guide"
              />
              <p className="japan-pdf-note">
                {/* Note: Replace PDF_URL constant with your actual hosted PDF URL.
                If PDF doesn't load, ensure it's hosted with proper CORS
                headers. */}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="japan-section japan-pedagogy-section">
        <h2 className="japan-section-title">Pedagogical Approach</h2>
        <div className="japan-section-content">
          <p>
            Each video follows <strong>Gagné's 9 Events of Instruction</strong>{" "}
            to ensure effective learning:
          </p>

          <div className="japan-gagne-grid">
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">1</div>
              <div className="japan-gagne-text">
                Gain attention with compelling business scenarios
              </div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">2</div>
              <div className="japan-gagne-text">
                Inform learners of objectives
              </div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">3</div>
              <div className="japan-gagne-text">
                Stimulate recall of prior learning
              </div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">4</div>
              <div className="japan-gagne-text">
                Present content with visual examples
              </div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">5</div>
              <div className="japan-gagne-text">Provide learning guidance</div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">6</div>
              <div className="japan-gagne-text">
                Elicit performance through H5P interactions
              </div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">7</div>
              <div className="japan-gagne-text">
                Provide feedback via interactive quizzes
              </div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">8</div>
              <div className="japan-gagne-text">Assess performance</div>
            </div>
            <div className="japan-gagne-item">
              <div className="japan-gagne-number">9</div>
              <div className="japan-gagne-text">
                Enhance retention with job aids
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-impact-section">
        <h2 className="japan-section-title">Impact & Strategic Value</h2>
        <div className="japan-section-content">
          <p>
            This rapid prototype demonstrates how modern instructional design
            techniques and AI-powered tools can create high-quality, culturally
            sensitive training in compressed timeframes. The solution directly
            addresses Austrade's need to prepare exporters for one of
            Australia's most important trading relationships.
          </p>

          <div className="japan-impact-highlights">
            <div className="japan-impact-card">
              <h4>Rapid Development</h4>
              <p>
                High-fidelity prototype delivered in 7 days using agile SAM
                methodology
              </p>
            </div>
            <div className="japan-impact-card">
              <h4>Modern Workflow</h4>
              <p>
                AI-powered visual creation demonstrating cutting-edge eLearning
                development
              </p>
            </div>
            <div className="japan-impact-card">
              <h4>Practical Application</h4>
              <p>Performance support tools enable immediate real-world use</p>
            </div>
            <div className="japan-impact-card">
              <h4>Cultural Sensitivity</h4>
              <p>
                Authentic representation of Japanese business culture and
                etiquette
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="japan-section japan-takeaways-section">
        <h2 className="japan-section-title">Key Takeaways</h2>
        <div className="japan-section-content">
          <p>
            This project demonstrated the power of combining agile instructional
            design methodologies with modern AI tools to create culturally
            sensitive, pedagogically sound training in extremely short
            timeframes. The SAM model proved ideal for rapid prototyping while
            maintaining quality and learner-centered design.
          </p>
          <br />
          <p>
            Most importantly, the project reinforced that effective eLearning
            isn't just about content delivery—it's about creating practical,
            accessible resources that learners can immediately apply in real
            business situations. The combination of engaging video content and
            practical job aids ensures both knowledge acquisition and
            performance support.
          </p>
        </div>
      </section>

      <div className="japan-footer-cta">
        <button
          className="japan-experience-btn"
          onClick={() => {
            setShowVideo(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Experience the Training
        </button>
      </div>
    </div>
  );
};

export default AustradeID;

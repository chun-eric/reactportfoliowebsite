import React from "react";
import "./Cyber.css";
import image1 from "../assets/images/cyber_mockup.webp";
import { useNavigate } from "react-router-dom";
// import image2 from "../assets/images/cyber_qrg.webp";
// Add this image for PDF preview

// YouTube embeds
const YT_MAIN = "https://www.youtube-nocookie.com/embed/AEjrgBnae7s";
const YT_SECOND = "https://www.youtube-nocookie.com/embed/MFxIpmqld-w";

// PDF URL: use local path in development, full URL in production
// const PDF_URL =
//   window.location.hostname === "localhost"
//     ? "/cyber/cyber_awareness_guide.pdf"
//     : "https://www.ecdevportfolio.com/cyber/cyber_awareness_guide.pdf";

const Cyber = () => {
  const navigate = useNavigate();
  //   const [showPDF, setShowPDF] = useState(false);
  //   const [videoError, setVideoError] = useState({});
  //   const [videosLoaded, setVideosLoaded] = useState(false);

  //   // Check if videos can load
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setVideosLoaded(true);
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //   }, []);

  //   const handleVideoError = (videoId) => {
  //     setVideoError((prev) => ({ ...prev, [videoId]: true }));
  //   };

  return (
    <div className="cyber-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <svg
          className="back-arrow"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <div className="cyber-project-header">
        <h1 className="cyber-project-title">
          Cybersecurity Awareness <br /> Employee Microlearning
        </h1>
        <p className="cyber-project-subtitle">
          Short microlearning videos to reduce Email Phishing risk and improve
          AWS S3 Security hygiene
        </p>

        <div className="cyber-disclaimer">
          <strong>Note:</strong> This cybersecurity awareness training was
          created as a portfolio demonstration piece by Eric Chun. <br />
          The content is based on industry best practices and real-world
          security scenarios to showcase instructional design capabilities.
        </div>

        <div className="cyber-project-meta">
          <div className="cyber-project-image">
            <img src={image1} alt="cybersecurity training cover image" />
          </div>
          <div className="cyber-meta-grid">
            <div className="cyber-meta-item">
              <span className="cyber-meta-label">Role</span>
              <span className="cyber-meta-value">
                Instructional Designer, L&D, & eLearning Developer
              </span>
            </div>
            <div className="cyber-meta-item">
              <span className="cyber-meta-label">Duration</span>
              <span className="cyber-meta-value">7 Days</span>
            </div>
            <div className="cyber-meta-item">
              <span className="cyber-meta-label">Audience</span>
              <span className="cyber-meta-value">
                All staff and office users
              </span>
            </div>
            <div className="cyber-meta-item">
              <span className="cyber-meta-label">Completion Time</span>
              <span className="cyber-meta-value">5 minutes</span>
            </div>
            <div className="cyber-meta-item">
              <span className="cyber-meta-label">Tools</span>
              <span className="cyber-meta-value">
                Vyond, Canva, React, YouTube, Vercel (Deployment)
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="cyber-section cyber-challenge-section">
        <h2 className="cyber-section-title">The Challenge</h2>
        <div className="cyber-section-content">
          <p>
            Email phishing remains one of the most effective attack vectors for
            cybercriminals, with just one employee clicking a malicious link
            potentially compromising an entire organization. Meanwhile,
            misconfigured AWS S3 buckets have become one of the most common
            causes of data breaches in recent years.
          </p>
          <br />
          <p>
            I designed this microlearning solution to address these critical
            security gaps through concise, actionable training that busy
            employees can complete quickly while retaining essential security
            practices for immediate application.
          </p>

          <div className="cyber-challenge-stats">
            <div className="cyber-stat-box">
              <div className="cyber-stat-icon">📧</div>
              <div className="cyber-stat-label">Email Phishing</div>
              <div className="cyber-stat-detail">
                Most common attack vector for organizations
              </div>
            </div>
            <div className="cyber-stat-box">
              <div className="cyber-stat-icon">☁️</div>
              <div className="cyber-stat-label">S3 Misconfigurations</div>
              <div className="cyber-stat-detail">
                Leading cause of data breaches
              </div>
            </div>
            <div className="cyber-stat-box">
              <div className="cyber-stat-icon">⏱️</div>
              <div className="cyber-stat-label">Quick Learning</div>
              <div className="cyber-stat-detail">
                10-12 minute completion time
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cyber-section cyber-solution-section">
        <h2 className="cyber-section-title">My Approach & Solution</h2>
        <div className="cyber-section-content">
          <p>
            I focused on creating <strong>actionable microlearning</strong> that
            employees could immediately apply in their daily work. The approach
            emphasized practical recognition skills and simple verification
            steps rather than overwhelming technical details.
          </p>

          <div className="cyber-approach-phases">
            <div className="cyber-phase-card">
              <div className="cyber-phase-content">
                <h4>Research & Content Strategy</h4>
                <p>
                  Analyzed common phishing techniques and AWS S3
                  misconfiguration patterns that lead to real-world breaches.
                  Identified the most critical behaviors employees needed to
                  adopt for immediate risk reduction.
                </p>
              </div>
            </div>

            <div className="cyber-phase-card">
              <div className="cyber-phase-content">
                <h4>Microlearning Design</h4>
                <p>Created two focused video modules:</p>
                <ul className="cyber-phase-list">
                  <li>
                    <strong> 1) Email Phishing:</strong> Easy-to-spot
                    indicators, verification techniques, and safe reporting
                    procedures
                  </li>
                  <li>
                    <strong> 2) AWS S3 Security:</strong> Common
                    misconfigurations, bucket permission checks, and remediation
                    steps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cyber-section cyber-deliverables-section">
        <h2 className="cyber-section-title">The Training Modules</h2>
        <div className="cyber-section-content">
          <p>
            Two complementary microlearning videos designed for maximum
            engagement and retention, covering the most critical security
            threats facing modern organizations:
          </p>

          <div className="cyber-video-cards">
            <div className="cyber-video-card">
              <div className="cyber-video-icon">📧</div>
              <h4>Email Phishing Awareness</h4>
              <p className="final-details">
                Teaches employees to identify suspicious emails, verify sender
                authenticity, avoid malicious links/attachments, and report
                potential threats safely.
              </p>
            </div>
            <div className="cyber-video-card">
              <div className="cyber-video-icon">☁️</div>
              <h4>AWS S3 Security Best Practices</h4>
              <p className="final-details">
                Demonstrates common S3 misconfigurations that expose data, shows
                how to verify bucket permissions, and provides simple
                remediation steps.
              </p>
            </div>
          </div>

          <div className="cyber-videos-grid">
            <div className="cyber-video-item">
              <iframe
                src={YT_MAIN}
                title="Email Phishing Awareness Training"
                width="100%"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="cyber-video-item">
              <iframe
                src={YT_SECOND}
                title="AWS S3 Security Training"
                width="100%"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="cyber-section cyber-resources-section">
        <div className="cyber-section-content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 0",
            }}
          >
            <div
              style={{
                width: "500px",
                height: "600px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={""}
                alt="Cybersecurity Quick Reference Guide"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="cyber-pdf-actions">
            <button
              className="cyber-pdf-btn cyber-view-btn"
              onClick={() => setShowPDF(!showPDF)}
            >
              {showPDF ? "Hide PDF" : "View Quick Reference Guide"}
            </button>
          </div>

          {showPDF && (
            <div className="cyber-pdf-viewer">
              <iframe
                src={PDF_URL}
                className="cyber-pdf-frame"
                title="Cybersecurity Quick Reference Guide"
                width="100%"
                height="600px"
                style={{ border: "1px solid #ddd", borderRadius: "8px" }}
              />
              <p className="cyber-pdf-note">
                If the PDF doesn't display, try refreshing the page.
              </p>
            </div>
          )}
        </div>
      </section> */}

      <section className="cyber-section cyber-features-section">
        <h2 className="cyber-section-title">Key Features</h2>
        <div className="cyber-section-content">
          <div className="cyber-features-grid">
            <div className="cyber-feature-card">
              <div className="cyber-feature-icon">⚡</div>
              <div className="cyber-feature-title">Microlearning Format</div>
              <div className="cyber-feature-description">
                Short, focused modules designed for busy professionals who need
                immediate, actionable security knowledge.
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-feature-icon">🎯</div>
              <div className="cyber-feature-title">Behavior-Focused</div>
              <div className="cyber-feature-description">
                Emphasizes practical skills and immediate actions employees can
                take to reduce security risks in their daily work.
              </div>
            </div>

            <div className="cyber-feature-card">
              <div className="cyber-feature-icon">🎬</div>
              <div className="cyber-feature-title">Animated Scenarios</div>
              <div className="cyber-feature-description">
                Vyond animations bring security scenarios to life, making
                abstract concepts concrete and memorable.
              </div>
            </div>

            {/* <div className="cyber-feature-card">
              <div className="cyber-feature-icon">📋</div>
              <div className="cyber-feature-title">Quick Reference Support</div>
              <div className="cyber-feature-description">
                Downloadable job aid provides on-the-spot guidance for real
                security situations.
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="cyber-section cyber-impact-section">
        <h2 className="cyber-section-title">Impact & Learning Outcomes</h2>
        <div className="cyber-section-content">
          <p>
            This microlearning approach demonstrates how targeted, practical
            security training can be delivered efficiently while maintaining
            high engagement and immediate applicability for busy professionals.
          </p>

          <div className="cyber-impact-highlights">
            <div className="cyber-impact-card">
              <h4>Immediate Application</h4>
              <p>
                Employees can apply security practices immediately after
                training completion
              </p>
            </div>
            <div className="cyber-impact-card">
              <h4>High Engagement</h4>
              <p>
                Short format and visual storytelling maintain attention
                throughout
              </p>
            </div>
            <div className="cyber-impact-card">
              <h4>Practical Focus</h4>
              <p>
                Real-world scenarios with actionable steps rather than theory
              </p>
            </div>
            <div className="cyber-impact-card">
              <h4>Scalable Solution</h4>
              <p>
                Designed for organization-wide deployment with minimal time
                investment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cyber-section cyber-takeaways-section">
        <h2 className="cyber-section-title">Key Takeaways</h2>
        <div className="cyber-section-content">
          <p>
            This project reinforced the effectiveness of microlearning for
            security awareness training. By focusing on the most critical
            threats and providing clear, actionable guidance, employees can
            quickly develop essential security habits without overwhelming their
            busy schedules.
          </p>
          <br />
          <p>
            The combination of visual storytelling through animation and
            practical reference materials ensures both knowledge transfer and
            on-the-job performance support, creating a comprehensive learning
            experience that extends beyond the training moment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cyber;

import React, { useState } from "react";
import "./CBA.css";
import image1 from "../assets/images/tranche2_cover.webp";
import scenarioDesign1 from "../assets/images/scenario_design.png";
import scenarioDesign2 from "../assets/images/scenario_design2.png";
import visualMocks from "../assets/images/visual_mockups.png";
import prototype from "../assets/images/prototyping_1.png";
import component from "../assets/images/development_tranche2.png";
import component2 from "../assets/images/development_tranche3.png";
import component3 from "../assets/images/development_tranche.png";
import course1 from "../assets/images/courses_1.png";
import course2 from "../assets/images/courses_2.png";
import evaluate1 from "../assets/images/evaluate_1.png";
import evaluate3 from "../assets/images/evaluate_3.png";

const CBA = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleExperienceClick = () => {
    setShowPlayer(true);
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <div className="cba-container">
      <div className="cba-project-header">
        <h1 className="cba-project-title">Reducing Insider Collusion</h1>
        <p className="cba-project-subtitle">
          An interactive e-learning module for identifying and preventing
          insider collusion targeted at Relationship Managers in the banking
          sector.
        </p>

        <div className="cba-disclaimer">
          <strong>Disclaimer:</strong> This is a hypothetical project module
          designed and created as a portfolio piece by me, Eric Chun.
          Commonwealth Bank Australia does not endorse this project nor did I
          have any affiliation with Commonwealth Bank Australia at the time this
          project was made in October 2025. Please visit the official
          Commonwealth Bank Australia website for official information and
          supporting materials.
        </div>

        <div className="cba-project-meta">
          <div className="cba-project-image">
            <img src={image1} alt="tranche2 cover image" />
          </div>
          <div className="cba-meta-item-container">
            <div className="cba-meta-item">
              <span className="cba-meta-label">Audience</span>
              <span className="cba-meta-value">
                Relationship Managers in the Banking Sector
              </span>
            </div>
            <div className="cba-meta-item">
              <span className="cba-meta-label">Role</span>
              <span className="cba-meta-value">
                Instructional Designer, Learning & Development & E-Learning
                Developer
              </span>
            </div>
            <div className="cba-meta-item">
              <span className="cba-meta-label">Duration</span>
              <span className="cba-meta-value">20 minutes</span>
            </div>
            <div className="cba-meta-item">
              <span className="cba-meta-label">Tools</span>
              <span className="cba-meta-value">
                Articulate Storyline 360, Talent LMS, xAPI, HTML, CSS, ReactJS,
                Canva, Grok AI, Anthropic AI, Google Gemini AI, Commonwealth
                Bank Australia Official Website, Midjourney, Excalidraw
                (mindmapping), Leonardo AI, ElevenLabs, Miro (mindmapping), VS
                Code, Vercel (deployment){" "}
              </span>
            </div>
          </div>

          <div className="cba-experience-section">
            <div className="cba-course-card">
              <div className="cba-course-header">
                <div className="cba-course-icon-alt"></div>
                <div className="cba-course-title">
                  11. Tranche 2:
                  <br />
                  New Cross Sector Compliance
                </div>
              </div>
              <div className="cba-course-body">
                <h3>
                  Financial Crime Module 11 – Tranche 2 New Industries AML/CTF
                  Compliance Reporting
                </h3>
                <p>
                  Learn how to detect, report and to be compliant with the new
                  Tranche 2 legislation update..
                </p>
                <a
                  href="/lrs/story.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cba-course-btn"
                >
                  Experience this Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="cba-section problem-section">
        <h2 className="cba-section-title">The Problem</h2>
        <div className="cba-section-content">
          <p>
            <br />
            <br />
          </p>

          <div className="cba-problem-stats">
            <div className="cba-stat-box">
              <div className="cba-stat-number">Add number</div>
              <div className="cba-stat-label">Relationship Managers</div>
            </div>
            <div className="cba-stat-box">
              <div className="cba-stat-number">10</div>
              <div className="cba-stat-label">
                Months remaining to comply (as of August 2025)
              </div>
            </div>
            <div className="cba-stat-box">
              <div className="cba-stat-number">0%</div>
              <div className="cba-stat-label">
                Current completion rate of new compliance training
              </div>
            </div>
          </div>

          {/* <div className="cba-highlight-box">
            <div className="cba-highlight-title">Root Cause Analysis</div>
            <ul className="cba-ul">
              <li className="cba-li"><strong>Knowledge Gap:</strong> New entities lack fundamental AML/CTF understanding</li>
              <li className="cba-li"><strong>Resource Constraints:</strong> Smaller entities struggle with complex compliance requirements</li>
              <li className="cba-li"><strong>Time Pressure:</strong> 18-month implementation timeline for complex regulatory framework</li>
              <li className="cba-li"><strong>Sector Diversity:</strong> Different professional standards across legal, accounting, and real estate</li>
            </ul>
          </div> */}
        </div>
      </section>

      <section className="cba-section solution-section">
        <h2 className="cba-section-title">The Solution</h2>
        <div className="cba-section-content">
          <p>
            I developed an interconnected narrative-based training module
            following three professionals from the real estate, accounting and
            legal industry unknowingly serving the same money laundering
            operation. This cross-sector approach demonstrates how criminals
            exploit professional services while teaching practical detection and
            reporting skills.
          </p>

          {/* <div className="cba-characters-grid">
            <div className="cba-character-card">
              <div className="cba-character-name">Alex Chen</div>
              <div className="cba-character-role">Real Estate Agent</div>
              <img className="cba-character-image"/>
                
            </div>
            <div className="cba-character-card">
              <div className="cba-character-name">Dr. Sarah Mitchell</div>
              <div className="cba-character-role">Accountant</div>
              <div className="cba-character-description">
                Discovers transaction monitoring requirements while managing suspicious cash flow patterns
              </div>
            </div>
            <div className="cba-character-card">
              <div className="cba-character-name">James Rodriguez</div>
              <div className="cba-character-role">Corporate Lawyer</div>
              <div className="cba-character-description">
                Navigates suspicious matter reporting while balancing legal professional privilege
              </div>
            </div>
          </div> */}

          <div className="cba-key-features">
            <div className="cba-feature-card">
              <div className="cba-feature-title">Authentic Scenarios</div>
              <div className="cba-feature-description">
                Based on real money laundering tactics that exploit professional
                services, using actual red flags and compliance requirements
              </div>
            </div>
            <div className="cba-feature-card">
              <div className="cba-feature-title">Cross-Sector Awareness</div>
              <div className="cba-feature-description">
                Shows how the same criminal network exploits different
                professions, building comprehensive threat recognition
              </div>
            </div>
            <div className="cba-feature-card">
              <div className="cba-feature-title">Decision-Based Learning</div>
              <div className="cba-feature-description">
                Learners face realistic compliance decisions under client
                pressure with immediate consequence feedback
              </div>
            </div>
            <div className="cba-feature-card">
              <div className="cba-feature-title">AUSTRAC-Aligned Design</div>
              <div className="cba-feature-description">
                Visual design and interaction patterns match AUSTRAC's existing
                e-learning ecosystem for seamless integration
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cba-section process-section">
        <h2 className="cba-section-title">My Process</h2>
        <div className="cba-section-content">
          <p>
            I applied the ADDIE instructional design model, conducting research
            into AUSTRAC's priorities and current training gaps. I also utilized
            different AI models to also verify and ensure all the information
            was accurate as a secondary source.This approach ensured alignment
            with both learning science principles and regulatory requirements.
          </p>

          <div className="austrac-process-steps">
            <div className="austrac-process-step">
              <div className="austrac-step-number">1</div>
              <div className="austrac-step-content">
                <h4>Analysis & Research</h4>
                <p>
                  Conducted research of AUSTRAC's regulatory priorities
                  utilizing AUSTRAC's website and E-learning portal with deep
                  research AI, analyzed existing training materials, and
                  identified the critical implementation gap affecting 100,000
                  new entities. Defined target audience needs across three
                  professional sectors.
                </p>
                <div className="austrac-project-image">
                  <img src={course1} alt="austrac website" />
                  <div className=""></div>
                  <img src={course2} alt="e-learning portal" />
                </div>
              </div>
            </div>

            <div className="austrac-process-step">
              <div className="austrac-step-number">2</div>
              <div className="austrac-step-content">
                <h4>Action Mapping</h4>
                <p>
                  Used Action Mapping process to focus on what professionals
                  need to do, not just know. Identified three key behavioral
                  changes: recognizing red flags, applying proper procedures,
                  and making compliant decisions under pressure.
                </p>
              </div>
            </div>

            <div className="austrac-process-step">
              <div className="austrac-step-number">3</div>
              <div className="austrac-step-content">
                <h4>Scenario Design</h4>
                <p>
                  Created an interconnected 7 section storyline showing the same
                  criminal network exploiting different professionals. This
                  approach demonstrates cross-sector money laundering while
                  teaching profession-specific compliance skills.
                </p>
                <div className="austrac-project-image">
                  <img src={scenarioDesign1} alt="visual style guide" />
                  <div className=""></div>
                  <img src={scenarioDesign2} alt="scene development" />
                </div>
              </div>
            </div>

            <div className="austrac-process-step">
              <div className="austrac-step-number">4</div>
              <div className="austrac-step-content">
                <h4>Visual Design & Prototyping</h4>
                <p></p>
                <div className="austrac-project-image">
                  <img src={visualMocks} alt="visual mockup" />
                  <div className=""></div>
                  <img src={prototype} alt="prototype" />
                </div>
              </div>
            </div>

            <div className="austrac-process-step">
              <div className="austrac-step-number">5</div>
              <div className="austrac-step-content">
                <h4>Development & Testing</h4>
                <p></p>
                <div className="austrac-project-image">
                  <img src={component3} alt="development testing" />
                  {/* <img src={component} alt="development" /> */}
                  <div className=""></div>
                  <img src={component2} alt="prototype" />
                </div>
              </div>
            </div>

            <div className="austrac-process-step">
              <div className="austrac-step-number">1</div>
              <div className="austrac-step-content">
                <h4>Evaulate and Assess</h4>
                <p></p>
                <div className="austrac-project-image">
                  <img src={evaluate1} alt="watershed LRS" />
                  <div className=""></div>
                  <img src={evaluate3} alt="storyline variables" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="austrac-section keyfeatures-section">
        <h2 className="austrac-section-title">Key Features</h2>
        <div className="austrac-section-content">
          <div className="austrac-key-features">
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                Interactive Document Analysis
              </div>
              <div className="austrac-feature-description">
                Learners examine suspicious documents, clicking to reveal red
                flags and receiving detailed explanations of money laundering
                indicators
              </div>
            </div>
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                Branching Decision Scenarios
              </div>
              <div className="austrac-feature-description">
                Real compliance decisions with immediate consequences, showing
                the results of proper procedures versus shortcuts
              </div>
            </div>
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                Cross-Professional Connections
              </div>
              <div className="austrac-feature-description">
                The same criminal network appears across all three sections,
                demonstrating how money laundering schemes span multiple
                professional services
              </div>
            </div>
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                Performance-Based Assessment
              </div>
              <div className="austrac-feature-description">
                Learners apply skills to realistic scenarios rather than
                memorizing facts, ensuring practical application in their work
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="austrac-section results-section">
        <h2 className="austrac-section-title">Results & Impact</h2>
        <div className="austrac-section-content">
          <p>
            This training module addresses AUSTRAC's most critical educational
            challenge by providing targeted, practical guidance for the 100,000
            new entities entering regulation.
          </p>

          {/* <div className="austrac-highlight-box">
            <div className="austrac-highlight-title">Strategic Value</div>
            <ul className="austrac-ul">
              <li className="austrac-li"><strong>Market Timing:</strong> Addresses Australia's largest regulatory expansion at the critical implementation phase</li>
              <li className="austrac-li"><strong>Scalable Solution:</strong> Single module serves three professional sectors, maximizing training efficiency</li>
              <li className="austrac-li"><strong>Risk Mitigation:</strong> Helps prevent criminal exploitation of professional services, protecting the financial system</li>
              <li className="austrac-li"><strong>Compliance Support:</strong> Enables 100,000 entities to meet July 2026 deadline with practical, actionable guidance</li>
            </ul>
          </div> */}
          <br />
          <p>
            The next phase would involve testing with real professionals from
            each sector, gathering feedback to refine scenarios, and analyzing
            data from Watershed LRS such as completion rates and knowledge
            retention. Success metrics would include reduced compliance
            violations, increased SMR reporting accuracy, and demonstrated
            ability to identify money laundering red flags.
          </p>
        </div>
      </section>

      <section className="austrac-section">
        <h2 className="austrac-section-title">Key Takeaways</h2>
        <div className="austrac-section-content">
          <p>
            This project reinforced the importance of understanding both the
            AML/CTF regulatory landscape and the practical constraints facing
            learners. Creating training that serves multiple professional
            audiences while maintaining engagement required careful balance
            between sector-specific needs and universal compliance principles.
          </p>
          <br />
          <p>
            The interconnected narrative approach seems more effective for
            demonstrating complex money laundering schemes while keeping
            individual sections focused and digestible. Most importantly,
            grounding the design in actual AUSTRAC priorities and visual
            standards ensured the solution addressed real organizational needs
            rather than theoretical learning objectives.
          </p>
        </div>
      </section>

      <div className="austrac-experience-section">
        <a
          href="/cba/story.html"
          target="_blank"
          rel="noopener noreferrer"
          className="austrac-course-btn"
        >
          Experience this Project
        </a>
      </div>
    </div>
  );
};

export default CBA;

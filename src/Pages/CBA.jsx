import React, { useState } from "react";
import "./AustracID.css";
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
    <div className="austrac-container">
      <div className="austrac-project-header">
        <h1 className="austrac-project-title">
          AUSTRAC's Tranche 2 New Cross Sector Compliance Implementation
        </h1>
        <p className="austrac-project-subtitle">
          An interactive e-learning module for Australia's new AML/CTF reporting
          entities
        </p>

        <div className="austrac-disclaimer">
          <strong>Disclaimer:</strong> This is a hypothetical project module
          designed and created as a portfolio piece by me, Eric Chun. AUSTRAC
          does not endorse this project nor do I have any affiliation with
          AUSTRAC at the time this project was made in August 2025. Please visit
          the official AUSTRAC website for official information and supporting
          materials.
        </div>

        <div className="austrac-project-meta">
          <div className="austrac-project-image">
            <img src={image1} alt="tranche2 cover image" />
          </div>
          <div className="austrac-meta-item-container">
            <div className="austrac-meta-item">
              <span className="austrac-meta-label">Audience</span>
              <span className="austrac-meta-value">
                Tranche 2 professionals
              </span>
            </div>
            <div className="austrac-meta-item">
              <span className="austrac-meta-label">Role</span>
              <span className="austrac-meta-value">
                Instructional Designer, Learning & Development & E-Learning
                Developer
              </span>
            </div>
            <div className="austrac-meta-item">
              <span className="austrac-meta-label">Duration</span>
              <span className="austrac-meta-value">20 minutes</span>
            </div>
            <div className="austrac-meta-item">
              <span className="austrac-meta-label">Tools</span>
              <span className="austrac-meta-value">
                Articulate Storyline 360, Watershed LRS, xAPI, HTML, CSS,
                ReactJS, Canva, Grok AI, Anthropic AI, Google Gemini AI, AUSTRAC
                Official Website, AUSTRAC E-learning portal, Midjourney,
                Excalidraw (mindmapping), Leonardo AI, ElevenLabs, Miro
                (mindmapping), VS Code, Vercel (deployment){" "}
              </span>
            </div>
          </div>

          <div className="austrac-experience-section">
            <div className="austrac-course-card">
              <div className="austrac-course-header">
                <div className="austrac-course-icon-alt"></div>
                <div className="austrac-course-title">
                  11. Tranche 2:
                  <br />
                  New Cross Sector Compliance
                </div>
              </div>
              <div className="austrac-course-body">
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
                  className="austrac-course-btn"
                >
                  Experience this Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="austrac-section problem-section">
        <h2 className="austrac-section-title">The Problem</h2>
        <div className="austrac-section-content">
          <p>
            AUSTRAC's regulatory expansion represents Australia's largest
            compliance challenge, growing from 17,000 to 117,000 entities by
            July 2026. Approximately 100,000 new businesses across legal,
            accounting, and real estate sectors must achieve AML/CTF compliance
            with zero prior experience. Currently there isn't an e-learning
            module at AUSTRAC to help new businesses gain foundational knowledge
            for Tranche 2 AML/CTF compliance.
            <br />
            <br />
            This creates a perfect storm where new entities lack fundamental
            AML/CTF understanding, smaller entities struggle with complex
            compliance requirements, professionals face an 10-month
            implementation timeline (as of August 2025) for intricate regulatory
            frameworks, and different professional standards exist across legal,
            accounting, and real estate sectors — all without targeted
            educational resources to bridge these critical knowledge gaps.
          </p>

          <div className="austrac-problem-stats">
            <div className="austrac-stat-box">
              <div className="austrac-stat-number">100K</div>
              <div className="austrac-stat-label">
                New entities needed to train
              </div>
            </div>
            <div className="austrac-stat-box">
              <div className="austrac-stat-number">10</div>
              <div className="austrac-stat-label">
                Months remaining to comply (as of August 2025)
              </div>
            </div>
            <div className="austrac-stat-box">
              <div className="austrac-stat-number">0%</div>
              <div className="austrac-stat-label">
                Businesses that have prior AML/CTF experience
              </div>
            </div>
          </div>

          {/* <div className="austrac-highlight-box">
            <div className="austrac-highlight-title">Root Cause Analysis</div>
            <ul className="austrac-ul">
              <li className="austrac-li"><strong>Knowledge Gap:</strong> New entities lack fundamental AML/CTF understanding</li>
              <li className="austrac-li"><strong>Resource Constraints:</strong> Smaller entities struggle with complex compliance requirements</li>
              <li className="austrac-li"><strong>Time Pressure:</strong> 18-month implementation timeline for complex regulatory framework</li>
              <li className="austrac-li"><strong>Sector Diversity:</strong> Different professional standards across legal, accounting, and real estate</li>
            </ul>
          </div> */}
        </div>
      </section>

      <section className="austrac-section solution-section">
        <h2 className="austrac-section-title">The Solution</h2>
        <div className="austrac-section-content">
          <p>
            I developed an interconnected narrative-based training module
            following three professionals from the real estate, accounting and
            legal industry unknowingly serving the same money laundering
            operation. This cross-sector approach demonstrates how criminals
            exploit professional services while teaching practical detection and
            reporting skills.
          </p>

          {/* <div className="austrac-characters-grid">
            <div className="austrac-character-card">
              <div className="austrac-character-name">Alex Chen</div>
              <div className="austrac-character-role">Real Estate Agent</div>
              <img className="austrac-character-image"/>
                
            </div>
            <div className="austrac-character-card">
              <div className="austrac-character-name">Dr. Sarah Mitchell</div>
              <div className="austrac-character-role">Accountant</div>
              <div className="austrac-character-description">
                Discovers transaction monitoring requirements while managing suspicious cash flow patterns
              </div>
            </div>
            <div className="austrac-character-card">
              <div className="austrac-character-name">James Rodriguez</div>
              <div className="austrac-character-role">Corporate Lawyer</div>
              <div className="austrac-character-description">
                Navigates suspicious matter reporting while balancing legal professional privilege
              </div>
            </div>
          </div> */}

          <div className="austrac-key-features">
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">Authentic Scenarios</div>
              <div className="austrac-feature-description">
                Based on real money laundering tactics that exploit professional
                services, using actual red flags and compliance requirements
              </div>
            </div>
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                Cross-Sector Awareness
              </div>
              <div className="austrac-feature-description">
                Shows how the same criminal network exploits different
                professions, building comprehensive threat recognition
              </div>
            </div>
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                Decision-Based Learning
              </div>
              <div className="austrac-feature-description">
                Learners face realistic compliance decisions under client
                pressure with immediate consequence feedback
              </div>
            </div>
            <div className="austrac-feature-card">
              <div className="austrac-feature-title">
                AUSTRAC-Aligned Design
              </div>
              <div className="austrac-feature-description">
                Visual design and interaction patterns match AUSTRAC's existing
                e-learning ecosystem for seamless integration
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="austrac-section process-section">
        <h2 className="austrac-section-title">My Process</h2>
        <div className="austrac-section-content">
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
                <p>
                  Developed characters, interface mockups, and interactive
                  components using AUSTRAC's existing design system. Created
                  prototypes to test key interactions before full development.
                </p>
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
                <p>
                  Built the complete module in Storyline 360 with WCAG
                  accessibility compliance. Implemented branching scenarios,
                  interactive document analysis, and immediate feedback systems.
                </p>
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
                <p>
                  Setup evaluation and assessment using Watershed LRS to monitor
                  learner interactions and performance data through xAPI
                  integration with Articulate Storyline. Setup key metrics
                  including completion rates, decision-making patterns, and
                  knowledge retention to evaluate the module's effectiveness.
                  Hosted the course on a personal website and web server, where
                  user behavior data is captured and sent to Watershed LRS upon
                  clicking "Experience the Project." Developed custom variables
                  and xAPI triggers to track navigation, time spent, and
                  drop-off points, enhancing the training's adaptability and
                  user experience. Full implementation still in progress.
                </p>
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
          href="/lrs/story.html"
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

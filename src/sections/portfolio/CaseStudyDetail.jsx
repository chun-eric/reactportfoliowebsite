import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data';
import './portfolio.css'; // Use your existing styles

const CaseStudyDetail = ({ theme }) => {
  const { id } = useParams();
  const caseStudy = data.find(item => 
    item.id === parseInt(id) && item.category.includes("Case Study")
  );

  if (!caseStudy) {
    return (
      <div className={`case-study-not-found ${theme}`}>
        <div className="not-found-content">
          <h1>Case Study Not Found</h1>
          <Link to="/" className={`back-link ${theme}`}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Parse the about text to extract structured information
const parseAboutText = (about) => {
  const sections = about.split('\n\n');
  const parsed = {
    summary: sections[0] || '',
    role: about.match(/ROLE: ([^\n]+)/)?.[1] || '',
    duration: about.match(/DURATION: ([^\n]+)/)?.[1] || '',
    scope: about.match(/SCOPE: ([^\n]+)/)?.[1] || '',
    keyResults: [],
    details: ''
  };

  // Extract key results if they exist
  const resultsSection = sections.find(section => section.includes('EXPECTED OUTCOMES:'));
  if (resultsSection) {
    const resultLines = resultsSection.split('\n').filter(line => line.startsWith('•'));
    parsed.keyResults = resultLines.map(line => line.replace('•', '').trim());
  }

  // Get sections - fixed to properly extract each section
  parsed.problem = sections.find(section => section.includes('THE PROBLEM:'))?.replace('THE PROBLEM:', '').trim() || '';
  parsed.approach = sections.find(section => section.includes('MY APPROACH:'))?.replace('MY APPROACH:', '').trim() || '';
  parsed.productStrategy = sections.find(section => section.includes('2. PRODUCT STRATEGY DEVELOPMENT'))?.replace('2. PRODUCT STRATEGY DEVELOPMENT', '').trim() || '';
  parsed.implementation = sections.find(section => section.includes('3. FEATURE PRIORITIZATION & IMPLEMENTATION'))?.replace('3. FEATURE PRIORITIZATION & IMPLEMENTATION', '').trim() || '';
  parsed.marketingStrategy = sections.find(section => section.includes('4. MARKETING STRATEGY:'))?.replace('4. MARKETING STRATEGY:', '').trim() || '';
  parsed.keyDecisions = sections.find(section => section.includes('KEY DECISIONS:'))?.replace('5. KEY DECISIONS:', '').trim() || '';
  parsed.learnings = sections.find(section => section.includes('LEARNING OUTCOMES:'))?.replace('LEARNING OUTCOMES:', '').trim() || '';

  return parsed;
};

  const parsedData = parseAboutText(caseStudy.about);

  return (
    <div className={`case-study-detail ${theme}`}>
      {/* Navigation */}
      <div className="case-study-nav">
        <Link to="/" className={`back-link ${theme}`}>
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero Section */}
      <section className={`case-study-hero ${theme}`}>
        <div className="case-study-container">
          <div className="hero-content">
            <div className="hero-text">
              <span className={`case-study-category-badge ${theme}`}>
                {caseStudy.category}
              </span>
              <h1 className={`case-study-main-title ${theme}`}>{caseStudy.title}</h1>
              <p className={`case-study-description ${theme}`}>{caseStudy.desc}</p>
              
              {/* Project Overview */}
              <div className="project-overview-grid">
                {parsedData.role && (
                  <div className={`overview-card ${theme}`}>
                    <h4>Role</h4>
                    <p>{parsedData.role}</p>
                  </div>
                )}
                {parsedData.duration && (
                  <div className={`overview-card ${theme}`}>
                    <h4>Duration</h4>
                    <p>{parsedData.duration}</p>
                  </div>
                )}
                {parsedData.scope && (
                  <div className={`overview-card ${theme}`}>
                    <h4>Scope</h4>
                    <p>{parsedData.scope}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="hero-image-container">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="case-study-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

<div className="big-section-container">
      {/* Problem Section */}
      {parsedData.problem && (
        <section className={`content-section ${theme}`}>
          <div className="case-study-container">
            <h2 className={`case-title ${theme}`}>The Problem</h2>
            
            <div className={`content-text ${theme}`}>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                {parsedData.problem}
              </pre>
            </div>
          </div>
        </section>
      )}
</div>
      
      {/* Approach Section */}
      {parsedData.approach && (
        <section className={`content-section ${theme}`}>
          <div className="case-study-container">
            <h2 className={`case-title ${theme}`}>My Approach</h2>
             <p className="" style={ {color: "black", fontWeight: "bold", fontSize: "22px"}}>1. MARKETING STRATEGY </p>
            <div className={`content-text ${theme}`}>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                {parsedData.approach}
              </pre>
            </div>
          </div>
        </section>
      )}


  {/* Strategy Section */}
  {parsedData.productStrategy  && (
    <section className={`content-section ${theme}`}>
      <div className="case-study-container">
        {/* <h2 className={`case-title ${theme}`}>2. Product Strategy</h2> */}
        <p className="" style={ {color: "black", fontWeight: "bold", fontSize: "22px"}}>2. PRODUCT STRATEGY DEVELOPMENT</p>
        <div className={`content-text ${theme}`}>
          <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
            {parsedData.productStrategy}
          </pre>
        </div>
      </div>
    </section>
  )}


  {/* Implementation Section */}
{parsedData.implementation && (
  <section className={`content-section ${theme}`}>
    <div className="case-study-container">
      <p className="" style={ {color: "black", fontWeight: "bold", fontSize: "22px"}}>3. FEATURE PRIORITIZATION & IMPLEMENTATION </p>
      <div className={`content-text ${theme}`}>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
          {parsedData.implementation}
        </pre>
      </div>
    </div>
  </section>
)}


{/* Property Gallery Section */}
{caseStudy.propertyImages && (
  <section className={`property-gallery-section ${theme}`}>
    <div className="case-study-container">
      <h2 className={`case-title product-line-title ${theme}`}>Product Lines</h2>
      <p className={`gallery-intro ${theme}`}>
        Each property was designed to serve a specific traveler persona with tailored amenities and experiences.
      </p>
      
      {caseStudy.propertyImages.map((propertyType, index) => (
        <div key={index} className={`property-category ${theme}`}>
          <h3 className={`property-category-title ${theme}`}>{propertyType.category}</h3>
          
          <div className="property-images-grid">
            {propertyType.images.map((image, imgIndex) => (
              <div key={imgIndex} className={`property-image-card ${theme}`}>
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="property-image"
                />
               
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)}

<div className="big-section-container">
 
 {/* Marketing Strategy Section */}
{parsedData.marketingStrategy && (
  <section className={`content-section ${theme}`}>
    <div className="case-study-container">
      {/* <h2 className={`case-title ${theme}`}>Marketing Strategy</h2> */}
      <p className="" style={ {color: "black", fontWeight: "bold", fontSize: "22px"}}>4. MARKETING STRATEGY </p>
      <div className={`content-text ${theme}`}>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
          {parsedData.marketingStrategy}
        </pre>
      </div>
    </div>
  </section>
)}


{/* Key Decisions Section */}
{parsedData.keyDecisions && (
  <section className={`content-section key-decisions ${theme}`}>
    <div className="case-study-container">
      <h2 className={`case-title ${theme}`}>Key Decisions</h2>
      <div className={`content-text ${theme}`}>
        {parsedData.keyDecisions.split('\n').map((line, index) => (
          <p key={index} className={
            line.trim().startsWith('•') ? 'subsection-bullet' : ''
          }>
            {line}
          </p>
        ))}
      </div>
    </div>
  </section>
)}

     
      {/* Key Results */}
      {parsedData.keyResults.length > 0 && (
        <section className={`key-results-section ${theme}`}>
          <div className="case-study-container">
            <h2 className={`case-title keyoutcome-title ${theme}`}>Key Outcomes</h2>
            <div className="results-grid">
              {parsedData.keyResults.map((result, index) => (
                <div key={index} className={`result-card ${theme}`}>
                  <div className="result-content">{result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learning Outcomes */}
      {parsedData.learnings && (
        <section className={`content-section ${theme}`}>
          <div className="case-study-container">
            <h2 className={`case-title ${theme}`}>Learning Outcomes</h2>
            <div className={`content-text ${theme}`}>
              <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                {parsedData.learnings}
              </pre>
            </div>
          </div>
        </section>
      )}
</div>
      {/* Tech Stack */}
      {caseStudy.stack && caseStudy.stack.length > 0 && (
        <section className={`content-section tools-methods-section ${theme}`}>
          <div className="case-study-container">
            <h2 className={`case-title ${theme}`}>Tools & Methods</h2>
            <div className="tech-stack-grid">
              {caseStudy.stack.map((tech, index) => (
                <span key={index} className={`tech-badge ${theme}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className={`cta-section ${theme}`}>
        <div className="case-study-container">
          <div className="cta-content">
            <h2 className={`cta-title ${theme}`}>Interested in working together?</h2>
            <p className={`cta-text ${theme}`}>
              Let's discuss how I can help drive product success for your team.
            </p>
            <div className="cta-buttons">
              <Link to="/#contact" className={`cta-button primary ${theme}`}>
                Get in Touch
              </Link>
              <Link to="/" className={`cta-button secondary ${theme}`}>
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
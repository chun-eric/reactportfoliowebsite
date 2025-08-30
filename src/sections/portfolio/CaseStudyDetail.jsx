import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from './data';
import './portfolio.css'; // Use your existing styles

const CaseStudyDetail = ({ theme }) => {
  const { id } = useParams();
  
  console.log('=== DEBUG CaseStudyDetail ===');
  console.log('URL ID:', id);
  console.log('All data:', data);
  console.log('Looking for ID:', parseInt(id));
  
  // Find case study - simplified logic
  const caseStudy = data.find(item => {
    const itemId = parseInt(item.id);
    const urlId = parseInt(id);
    const isCorrectId = itemId === urlId;
    const isCaseStudy = item.category === 'case_studies';
    
    console.log(`Item ${item.id}: ID match=${isCorrectId}, Category="${item.category}", IsCaseStudy=${isCaseStudy}`);
    
    return isCorrectId && isCaseStudy;
  });

  console.log('Found case study:', caseStudy);

  // Function to format category for display
  const formatCategoryForDisplay = (category) => {
    const categoryMap = {
      'case_studies': 'Case Study',
      'html_email': 'HTML Email',
      'frontend': 'Frontend',
      'landing_pages': 'Landing Page',
      'in_development': 'In Development',
      'fullstack': 'Full Stack',
      'wordpress': 'WordPress',
      "instructional_design": "Instructional Design"
    };
    return categoryMap[category] || category;
  };

  if (!caseStudy) {
    console.log('=== Case Study Not Found Debug ===');
    const allItems = data.map(item => ({
      id: item.id,
      title: item.title,
      category: item.category
    }));
    console.log('All available items:', allItems);
    
    return (
      <div className={`case-study-not-found ${theme}`}>
        <div className="not-found-content">
          <h1>Case Study Not Found</h1>
          <p>Looking for ID: {id}</p>
          <p>Available items in data:</p>
          <ul>
            {data.map(item => (
              <li key={item.id}>
                ID: {item.id}, Title: {item.title}, Category: "{item.category}"
              </li>
            ))}
          </ul>
          <Link to="/" className={`back-link ${theme}`}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is a legacy case study (has 'about' field) or new structured format
  const isLegacyFormat = caseStudy.about && !caseStudy.projectInfo;

  // Legacy parsing function for backward compatibility
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
    const resultsSection = sections.find(section => section.includes('EXPECTED OUTCOMES:') || section.includes('ACHIEVED OUTCOMES:'));
    if (resultsSection) {
      const resultLines = resultsSection.split('\n').filter(line => line.startsWith('•'));
      parsed.keyResults = resultLines.map(line => line.replace('•', '').trim());
    }

    // Gets all content between markers
    const extractSection = (startMarker, endMarkers = []) => {
      const startIndex = about.indexOf(startMarker);
      if (startIndex === -1) return '';
      
      let content = about.substring(startIndex + startMarker.length);
      
      // Find the next section marker to stop at
      for (const endMarker of endMarkers) {
        const endIndex = content.indexOf(endMarker);
        if (endIndex !== -1) {
          content = content.substring(0, endIndex);
          break;
        }
      }
      return content.trim();
    };

    // Get sections with proper boundaries
    parsed.problem = extractSection('THE PROBLEM:', ['MY APPROACH:', 'ROLE:']);
    parsed.approach = extractSection('MY APPROACH:', ['2. PRODUCT STRATEGY DEVELOPMENT']);
    parsed.productStrategy = extractSection('2. PRODUCT STRATEGY DEVELOPMENT', ['3. FEATURE PRIORITIZATION']);
    parsed.implementation = extractSection('3. FEATURE PRIORITIZATION & IMPLEMENTATION', ['4. MARKETING STRATEGY', '4. CONTENT & MARKETING STRATEGY']);
    parsed.marketingStrategy = extractSection('4. MARKETING STRATEGY:', ['5. INSTRUCTIONAL DESIGN']) || extractSection('4. CONTENT & MARKETING STRATEGY:', ['5. INSTRUCTIONAL DESIGN']);
    parsed.instructionStrategy = extractSection('5. INSTRUCTIONAL DESIGN:', ['KEY DECISIONS:', 'EXPECTED OUTCOMES:', 'ACHIEVED OUTCOMES:', 'LEARNING OUTCOMES:']);
    parsed.keyDecisions = extractSection('KEY DECISIONS:', ['EXPECTED OUTCOMES:', 'ACHIEVED OUTCOMES:', 'LEARNING OUTCOMES:']);
    parsed.learnings = extractSection('LEARNING OUTCOMES:', []);

    return parsed;
  };

  // Use appropriate data structure
  let displayData;
  
  if (isLegacyFormat) {
    // Legacy format - use parsing
    const parsedData = parseAboutText(caseStudy.about);
    displayData = {
      projectInfo: {
        role: parsedData.role,
        duration: parsedData.duration,
        scope: parsedData.scope
      },
      problem: parsedData.problem ? parsedData.problem.split('\n').filter(line => line.trim().startsWith('•')).map(line => line.replace('•', '').trim()) : [],
      approach: [
        { title: '1. Market Research & User Segmentation', content: parsedData.approach },
        { title: '2. Product Strategy Development', content: parsedData.productStrategy },
        { title: '3. Feature Prioritization & Implementation', content: parsedData.implementation },
        { title: '4. Marketing Strategy', content: parsedData.marketingStrategy },
        { title: '5. Instructional Design', content: parsedData.instructionStrategy }
      ].filter(step => step.content), // Only include steps with content
      keyDecisions: parsedData.keyDecisions ? parsedData.keyDecisions.split('\n').filter(line => line.trim().startsWith('•')).map(line => line.replace('•', '').trim()) : [],
      outcomes: parsedData.keyResults || [],
      learnings: parsedData.learnings ? parsedData.learnings.split('\n').filter(line => line.trim().startsWith('•')).map(line => line.replace('•', '').trim()) : []
    };
  } else {
    // New structured format
    displayData = caseStudy;
  }

  return (
    <div className={`case-study-detail ${theme}`} style={{ paddingTop: '100px' }}>
      {/* Navigation */}
      <nav style={{
        padding: '1rem 0',
        marginBottom: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <Link 
            to="/" 
            style={{
              color: '#000',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`case-study-hero ${theme}`}>
        <div className="case-study-container">
          <div className="hero-content">
            <div className="hero-text">
              <span className={`case-study-category-badge ${theme}`}>
                {formatCategoryForDisplay(caseStudy.category)}
              </span>
              <h1 className={`case-study-main-title ${theme}`}>{caseStudy.title}</h1>
              <p className={`case-study-description ${theme}`}>{caseStudy.desc}</p>
              
              {/* Project Overview */}
              {displayData.projectInfo && (
                <div className="project-overview-grid">
                  {displayData.projectInfo.role && (
                    <div className={`overview-card ${theme}`}>
                      <h4>Role</h4>
                      <p>{displayData.projectInfo.role}</p>
                    </div>
                  )}
                  {displayData.projectInfo.duration && (
                    <div className={`overview-card ${theme}`}>
                      <h4>Duration</h4>
                      <p>{displayData.projectInfo.duration}</p>
                    </div>
                  )}
                  {displayData.projectInfo.scope && (
                    <div className={`overview-card ${theme}`}>
                      <h4>Scope</h4>
                      <p>{displayData.projectInfo.scope}</p>
                    </div>
                  )}
                  {displayData.projectInfo.team && (
                    <div className={`overview-card ${theme}`}>
                      <h4>Team</h4>
                      <p>{displayData.projectInfo.team}</p>
                    </div>
                  )}
                </div>
              )}
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
      {displayData.problem && displayData.problem.length > 0 && (
  <section className={`content-section ${theme}`}>
    <div className="case-study-container">
      <h2 className={`case-title ${theme}`}>The Problem</h2>
      
      {/* Always render as a clean list with bullets */}
      <ul className={`problem-list ${theme}`}>
        {displayData.problem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
)}
      
      </div>
      
      {/* Approach Section */}
      {displayData.approach && displayData.approach.length > 0 && (
        <section className={`content-section approach-section ${theme}`}>
          <div className="case-study-container">
            <h2 className={`case-title ${theme}`}>My Approach</h2>
            
            <div className="approach-grid">
              {displayData.approach.map((step, index) => (
                <div key={index} className={`approach-card ${theme}`}>
                  <h3 className="approach-card-title">{step.title}</h3>
                  <div className="content-text">
                    {isLegacyFormat ? (
                      <pre style={{ 
                        whiteSpace: 'pre-wrap', 
                        fontFamily: 'inherit',
                        margin: 0,
                        fontSize: '1rem',
                        lineHeight: '1.7'
                      }}>
                        {step.content}
                      </pre>
                    ) : (
                      <ul>
                        {step.content.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Property Gallery Section - Only for Cozy Stayz */}
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
        {/* Key Decisions Section */}
    {displayData.keyDecisions && displayData.keyDecisions.length > 0 && (
  <section className={`content-section key-decisions ${theme}`}>
    <div className="case-study-container">
      <h2 className={`case-title ${theme}`}>Key Decisions</h2>
      <div className={`content-text approach-card ${theme}`}>
        <ul className="decisions-list">
          {displayData.keyDecisions.map((decision, index) => (
            <li key={index}>{decision}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)}
           
        {/* Key Results */}
        {displayData.outcomes && displayData.outcomes.length > 0 && (
          <section className={`key-results-section ${theme}`}>
            <div className="case-study-container">
              <h2 className={`case-title keyoutcome-title ${theme}`}>Key Outcomes</h2>
              <div className="results-grid key-outcomes-grid">
                {displayData.outcomes.map((result, index) => (
                  <div key={index} className={`result-card ${theme}`}>
                    <div className="result-content">{result}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Learning Outcomes */}
     {displayData.learnings && displayData.learnings.length > 0 && (
  <section className={`content-section learning-outcomes ${theme}`}>
    <div className="case-study-container">
      <h2 className={`case-title ${theme}`}>Learning Outcomes</h2>
      <div className={`content-text approach-card ${theme}`}>
        <ul className="learnings-list">
          {displayData.learnings.map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)}
      
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
      <section className={`cta-section interested-section ${theme}`}>
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
    </div>
  );
};

export default CaseStudyDetail;
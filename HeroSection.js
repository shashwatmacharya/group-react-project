import React from 'react';
import './HeroSection.css'; // Import the accompanying CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Skills speak louder <br></br>than words</h1>
        <p className="hero-subtitle">We help companies develop the strongest tech teams around. We help <br></br>candidates sharpen their tech skills and pursue job opportunities.</p>
        <div className='company-name'>
      <p>Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
      </div>
      </div>
    </div>
     
  );
};

export default HeroSection;

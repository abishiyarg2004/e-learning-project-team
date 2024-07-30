import React from 'react'
import './Card_quiz.css'

const Card_quiz = () => {
  return (
    <div className="course-overview-container">
      <header className="navbar">
        <img src="/path/to/logo.png" alt="Infosys Springboard Logo" className="navbar-logo" />
        <div className="navbar-title">TOC - Certified Secure Software...</div>
        <div className="navbar-tabs">
          <div className="navbar-tab active">Explore</div>
          <div className="navbar-tab">Course</div>
          <div className="navbar-tab">Your Progress</div>
        </div>
      </header>
      
      <div className="course-card">
        <img src="/path/to/course-image.jpg" alt="Course" className="course-image" />
        <div className="course-content">
          <h1 className="course-title">Certified Secure Software Lifecycle Professional (CSSLP) 2019: Testing</h1>
          <p className="course-description">
            This 14-video course explores essential testing types—including penetration testing, scanning, simulation testing, failure testing, and cryptographic validation—and more.
          </p>
          <div className="author-info">
            <img src="/path/to/author-image.jpg" alt="Author" className="author-image" />
            <div>
              <p className="author-name">Joe Khoury</p>
              <p className="author-role">IT / Business Expert</p>
            </div>
          </div>
          <button className="start-button">Start</button>
          <div className="rating">
            <span>Your Rating: </span>
            <span className="stars">☆☆☆☆☆</span>
          </div>
        </div>
      </div>

      <div className="course-details">
        <div className="learning-progress">
          <div className="progress-bar">
            <div className="progress-bar-fill"></div>
          </div>
          <p className="progress-status">Status: Completed</p>
          <p className="progress-info">Your progress was automatically captured from its source.</p>
        </div>
        
        <div className="certificate-section">
          <button className="generate-certificate-button">Generate Certificate</button>
        </div>

        <div className="course-info">
          <div className="info-item">
            <span>Course</span>
            <span>41m 35s</span>
          </div>
          <div className="info-item">
            <span>Level</span>
            <span>Intermediate</span>
          </div>
          <div className="info-item">
            <span>Price</span>
            <span>Free</span>
          </div>
          <div className="info-item">
            <span>Provider</span>
            <span>Skillsoft</span>
          </div>
          <div className="info-item">
            <span>Expires on</span>
            <span>Jan 28, 2025</span>
          </div>
          <div className="info-item">
            <span>Global</span>
            <span>EN</span>
          </div>
          <div className='test'>
            <h3>Attend Quiz</h3>
            <div className='info-item'>
            <span>Test Duration</span>
            <span>10 Minutes</span>
            </div>
            <div className='test_btn'>
            <button>
                <a href="" >Take Test</a>
                </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};



    

export default Card_quiz

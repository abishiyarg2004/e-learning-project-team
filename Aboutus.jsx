import React from 'react';
import firstimg from './images/firstimg.jpg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button } from '@mui/material';
import './Aboutus.css';
import image1 from './images/image1.webp';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpeg';
import join from './images/join.jpeg';
import camp from './images/camp.jpg';
import tournaments from './images/tournaments.jpeg';

const About = () => {
  return (
    <div className='Aboutus'>
      <h1 style={{ textAlign: "center", userSelect: 'none' }}>About Us</h1>
      <div className='about-container'>
        <div className='image-container'>
          <img src={firstimg} alt='First' />
        </div>
        <div className='content-container'>
          <p>Welcome to AbE-learning portal, your ultimate destination for comprehensive and cutting-edge education in Computer Science and Engineering (CSE). Our mission is to empower learners with the knowledge and skills needed to thrive in the ever-evolving world of technology.</p>
          <p>At AbE-learning portal, we are a team of dedicated educators, industry professionals, and tech enthusiasts who believe in the transformative power of education. With years of experience in both academia and the tech industry, we have designed a platform that bridges the gap between theoretical knowledge and practical application.</p>
          
         
          <p>Our Programs include a wide range of subjects within CSE, such as programming, data structures, algorithms, machine learning, artificial intelligence, cybersecurity, and more. Our expert instructors, interactive learning experiences, and career support make us the go-to platform for anyone looking to advance in the tech industry.</p>
        </div>
      </div>
      <hr></hr>
      <div className='content-journey'>
        <h2 style={{ textAlign: "center", userSelect: 'none' }}>Our Mission</h2>
        <p>Our mission is to provide high-quality, accessible, and engaging education in Computer Science and Engineering. We aim to:</p>
          
            <p>Deliver Quality Education: Our courses are meticulously crafted by experts to ensure you receive the most relevant and up-to-date information.</p>
            <p>Foster a Community: We believe in the power of community learning. Our platform is designed to facilitate collaboration, discussion, and networking among learners and professionals.</p>
            <p>Promote Practical Learning: Through hands-on projects, real-world case studies, and interactive sessions, we ensure that our learners are well-prepared for real-life challenges.</p>
      </div>
      <div className='content-journey'>
        <hr></hr>
        <h2 style={{ textAlign: "center", userSelect: 'none' }}>Our Programs</h2>
        <div className='level'>
          <div className='box1'>
            <div className='box-content'>
              <img src={image1} alt='Newbie' />
              <br />Explore Courses<br />
              <ArrowCircleRightIcon />
            </div>
          </div>
          <div className='box1'>
            <div className='box-content'>
              <img src={image2} alt='Average' />
              <br />Explore Courses<br />
              <ArrowCircleRightIcon />
            </div>
          </div>
          <div className='box1'>
            <div className='box-content'>
              <img src={image3} alt='Skilled' />
              <br />Explore Courses<br />
              <ArrowCircleRightIcon />
            </div>
          </div>
          <div className='box1'>
            <div className='box-content'>
              <img src={image4} alt='Skilled' />
              <br />Explore Courses<br />
              <ArrowCircleRightIcon />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className='content-journey'>
          <h2 style={{ textAlign: "center", userSelect: 'none' }}>Join Us</h2>
          <div className='level2'>
            <div className='box2'>
              <div className='box-content2'>
                <p style={{ fontFamily: '', fontWeight: '100px', fontSize: '25px' }}>Online Courses</p>
                <img src={join} alt='Online Courses' />
                <Button variant="outlined">Signup for Online courses</Button>
              </div>
            </div>
            <div className='box2'>
              <div className='box-content2'>
                <p style={{ fontFamily: '', fontWeight: '100px', fontSize: '25px' }}>Tournaments</p>
                <img src={tournaments} alt='Tournaments' />
                <br></br>
                <Button variant='outlined'> Signup for Tournaments</Button>
              </div>
            </div>
            <div className='box2'>
              <div className='box-content2'>
                <p style={{ fontFamily: '', fontWeight: '100px', fontSize: '25px' }}>JOIN CAMP</p>
                <img src={camp} alt='Camp' />
                <Button variant='outlined'>Sign Up for Camp</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

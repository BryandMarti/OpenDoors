import React from 'react';
import '../styling/Homepage.scss';
import icon1 from '../pages/icon1.svg';
import icon2 from '../pages/icon2.svg';
import icon3 from '../pages/icon3.svg';
import dashboard from '../pages/dashboard.png'
import stars from '../pages/stars.svg'
import heroimage from '../pages/hero-image.jpg'
import divider from '../pages/divider.svg'
import divider2 from '../pages/divider2.svg'


const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-image">
          <img src={heroimage} alt="hero-image" className="hero-image"></img>
        </div>
        <div className="hero-text">
          <h1>Find a pathway that fits you the best!</h1>
          <p>Finding the right career path shouldn’t be overwhelming. 
        From exploring different industries to connecting with mentors and resources, we make it simple to discover the best pathway for your future success.</p>
        </div>
      </div>

      <div className="divider">
        <img src={divider} alt='divider' className='divider'></img>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Your search is unique. Just like you.</h2>
        <p>We give you all of the data, reviews, and insights in one place to make your search as easy as possible.</p>

        <div className="features">
          <div className="feature-item">
            <img src={icon1} alt="icon1" className="feature-image"></img>
            <h3>No heavy lifting!</h3>
            <p>We do the search so you don't have to.</p>
          </div>
          <div className="feature-item">
          <img src={icon2} alt="icon2" className="feature-image"></img>
            <h3>The good, the bad & the honest!</h3>
            <p>Reviews let you hear honest and holistic views.</p>
          </div>
          <div className="feature-item">
          <img src={icon3} alt="icon3" className="feature-image"></img>
            <h3>Like a glove!</h3>
            <p>We personalize your search!</p>
          </div>
        </div>
      </section>

      <div className="divider">
        <img src={divider2} alt='divider' className='divider2'></img>
      </div>

      <section className="quiz-section">
        <div className="dashboard-image">
        <img src={dashboard} alt="dashboardimage" className="dashboard-image"></img>
        <img src={stars} alt="stars" className="stars"></img>
        </div>
        <div className="quiz-text">
          <h1>Not sure where to start?</h1>
          <p>Tell us what matters most to you and we'll create a custom list of schools tailored to fit your needs.</p>
          <button className="start-button">Create Profile</button>
          <button className="start-button">Take Quiz</button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

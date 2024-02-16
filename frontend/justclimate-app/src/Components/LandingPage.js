import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>JustClimate</h1>
        <p>Your Platform for Climate Justice</p>
      </header>
      <section className="hero-section">
        <h2>Empowering Communities for a Sustainable Future</h2>
        <p>
          Join us in the fight for climate justice. Together, we can make a difference and create a more equitable and sustainable world.
        </p>
        <button>Get Involved</button>
      </section>
      <section className="features-section">
        <div className="feature">
          <h3>Community Empowerment</h3>
          <p>Connect with marginalized communities and share experiences for a stronger collective voice.</p>
        </div>
        <div className="feature">
          <h3>Educational Resources</h3>
          <p>Learn about climate justice, environmental racism, and how you can contribute to positive change.</p>
        </div>
        <div className="feature">
          <h3>Advocacy Toolkit</h3>
          <p>Equip yourself with tools for effective climate justice advocacy and make your voice heard.</p>
        </div>
      </section>
      <section className="cta-section">
        <h2>Join Us Today</h2>
        <p>Start making a difference. Join the JustClimate community and be part of the movement towards climate justice.</p>
        <button>Sign Up</button>
      </section>
      <footer>
        <p>&copy; 2024 JustClimate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

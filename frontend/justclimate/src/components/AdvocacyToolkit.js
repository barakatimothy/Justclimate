// AdvocacyToolkit.js
import React from 'react';
import './AdvocacyToolkit.css';
import { FaEnvelope, FaBullhorn, FaBook, FaHandsHelping } from 'react-icons/fa';

const AdvocacyToolkit = () => {
  return (
    <div className="advocacy-toolkit-container">
      <h2>Advocacy Toolkit</h2>
      <p>
        Welcome to the Advocacy Toolkit! Here, you'll find tools and resources to empower your advocacy for climate justice.
      </p>
      <div className="tool">
        <FaEnvelope className="tool-icon" />
        <div className="tool-content">
          <h3>Contact Policymakers</h3>
          <p>Use our template to send emails or letters advocating for climate-friendly policies.</p>
        </div>
      </div>
      <div className="tool">
        <FaBullhorn className="tool-icon" />
        <div className="tool-content">
          <h3>Organize Events</h3>
          <p>Guidelines for planning and organizing community events to raise awareness about climate justice.</p>
        </div>
      </div>
      <div className="tool">
        <FaBook className="tool-icon" />
        <div className="tool-content">
          <h3>Educational Resources</h3>
          <p>Explore our collection of educational materials to deepen your understanding of climate justice.</p>
        </div>
      </div>
      <div className="tool">
        <FaHandsHelping className="tool-icon" />
        <div className="tool-content">
          <h3>Community Support</h3>
          <p>Connect with local community groups and discover ways to contribute to climate justice initiatives.</p>
        </div>
      </div>
    </div>
  );
};

export default AdvocacyToolkit;

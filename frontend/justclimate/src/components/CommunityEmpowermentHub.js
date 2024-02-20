// CommunityEmpowermentHub.js
import React, { useState } from 'react';
import './CommunityEmpowermentHub.css'
const CommunityEmpowermentHub = () => {
  const [story, setStory] = useState({ title: '', content: '' });
  const [submittedStories, setSubmittedStories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and handle the submission
    if (story.title && story.content) {
      // Add the story to the list of submitted stories
      setSubmittedStories([...submittedStories, story]);
      // Reset the form
      setStory({ title: '', content: '' });
    } else {
      // Handle validation error
      alert('Please fill in both title and content.');
    }
  };

  return (
    <div>
      <h2>Community Empowerment Hub</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={story.title}
            onChange={(e) => setStory({ ...story, title: e.target.value })}
          />
        </label>
        <label>
          Content:
          <textarea
            value={story.content}
            onChange={(e) => setStory({ ...story, content: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h3>Submitted Stories</h3>
      <ul>
        {submittedStories.map((submittedStory, index) => (
          <li key={index}>
            <strong>{submittedStory.title}</strong>
            <p>{submittedStory.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityEmpowermentHub;

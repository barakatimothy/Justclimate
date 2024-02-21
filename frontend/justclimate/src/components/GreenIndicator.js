// GreenIndicator.js
import React from 'react';

const GreenIndicator = ({ showForm, onClick }) => {
  return (
    <div
      className={`green-indicator ${showForm ? 'hidden' : ''}`}
      onClick={onClick}
      title="Click to edit"
    />
  );
};

export default GreenIndicator;

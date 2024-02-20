
import React from 'react';
import './EducationalResources.css';

const EducationalResources = () => {
  // Sample educational courses data
  const courses = [
    {
      id: 1,
      title: 'Introduction to Climate Justice',
      description: 'Explore the fundamentals of climate justice and its importance in addressing environmental challenges.',
    },
    {
      id: 2,
      title: 'Environmental Racism 101',
      description: 'Understand the concept of environmental racism and its impact on marginalized communities.',
    },
    {
      id: 3,
      title: 'Intersectionality of Social Justice and Climate Change',
      description: 'Examine the interconnectedness of social justice issues and the broader implications of climate change.',
    },
  ];

  return (
    <div>
      <h2>Educational Resources</h2>
      <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;

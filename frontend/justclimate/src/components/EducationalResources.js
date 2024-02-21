// EducationalResources.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EducationalResources.css';

const EducationalResources = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

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

  const enrollHandler = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
    navigate(`/modules/${courseId}`);
  };

  return (
    <div>
      <h2>Educational Resources</h2>
      <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => enrollHandler(course.id)}>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;

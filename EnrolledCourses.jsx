// EnrolledCourses.jsx
import React from 'react';
import { useEnrolledCourses } from './EnrolledCoursesContext';
import './Courses.css'; // Make sure to import the same CSS file

const EnrolledCourses = () => {
  const { enrolledCourses } = useEnrolledCourses(); // Get enrolled courses from context

  return (
    <div className="courses">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled.</p>
      ) : (
        enrolledCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button>View Course</button> {/* Optional button */}
          </div>
        ))
      )}
    </div>
  );
};

export default EnrolledCourses;

// EnrolledCoursesContext.js
import React, { createContext, useContext, useState } from 'react';

const EnrolledCoursesContext = createContext();

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, setEnrolledCourses }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};

export const useEnrolledCourses = () => useContext(EnrolledCoursesContext);

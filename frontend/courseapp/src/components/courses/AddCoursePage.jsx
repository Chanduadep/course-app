import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseForm from '../courses/CourseForm';

const AddCoursePage = () => {
  console.log('Rendering AddCoursePage'); 
  const navigate = useNavigate();

  const handleCourseAdded = (newCourse) => {
    console.log('Course added:', newCourse); 
    navigate('/courses');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
    <h1 className="text-2xl font-bold mb-4 text-center">Add New Course</h1>
    <CourseForm onCourseAdded={handleCourseAdded} />
  </div>
  );
};

export default AddCoursePage;
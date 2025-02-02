import React from 'react';
import CourseList from '../courses/CourseList';

const CoursesPage = () => {
  console.log('Rendering CoursesPage'); 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <CourseList />
    </div>
  );
};

export default CoursesPage;
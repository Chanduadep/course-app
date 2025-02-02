import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';
import CourseItem from '../courses/CourseItem';
const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await api.get('/courses');
      setCourses(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch courses');
      setLoading(false);
    }
  };

  const handleCourseDeleted = (courseId) => {
    setCourses(courses.filter(course => course._id !== courseId));
  };

  const handleCourseUpdated = (courseId, updatedCourse) => {
    setCourses(courses.map(course => 
      course._id === courseId ? updatedCourse : course
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseItem
          key={course._id}
          course={course}
          onDelete={handleCourseDeleted}
          onUpdate={handleCourseUpdated}  
        />
      ))}
    </div>
  );
};

export default CourseList;
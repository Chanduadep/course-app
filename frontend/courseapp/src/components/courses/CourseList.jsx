import React, { useState, useEffect } from 'react';
import api from '../../../utils/api';
import CourseItem from './CourseItem';
import CourseForm from './CourseForm';

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

  const handleCourseAdded = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const handleCourseDeleted = (courseId) => {
    setCourses(courses.filter(course => course._id !== courseId));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <CourseForm onCourseAdded={handleCourseAdded} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseItem
            key={course._id}
            course={course}
            onDelete={handleCourseDeleted}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
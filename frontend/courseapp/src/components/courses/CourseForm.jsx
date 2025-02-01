import React, { useState } from 'react';
import api from '../../../utils/api';

const CourseForm = ({ onCourseAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    instructor: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/courses', formData);
      onCourseAdded(res.data);
      setFormData({ name: '', description: '', instructor: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add course');
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Add New Course</h3>
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Course Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Instructor</label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            className="w-full p-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
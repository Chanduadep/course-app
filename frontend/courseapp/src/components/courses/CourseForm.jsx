

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
    <div className="mb-4 p-4 bg-white rounded shadow max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">Add Course</h3>
      {error && <div className="bg-red-50 text-red-600 p-2 rounded text-sm mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="text-sm text-gray-600">Course Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="w-full p-1.5 text-sm border rounded mt-1"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            name="description"
            value={formData.description}
            className="w-full p-1.5 text-sm border rounded mt-1 h-20"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Instructor</label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            className="w-full p-1.5 text-sm border rounded mt-1"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1.5 px-3 rounded text-sm hover:bg-blue-600 mt-2"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
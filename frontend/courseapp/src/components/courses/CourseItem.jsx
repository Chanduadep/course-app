
import React, { useState } from 'react';
import api from '../../../utils/api';

const CourseItem = ({ course, onDelete, onUpdate }) => { 
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: course.name,
    description: course.description,
    instructor: course.instructor
  });

  const handleDelete = async () => {
    try {
      await api.delete(`/courses/${course._id}`);
      onDelete(course._id);
    } catch (err) {
      console.error('Failed to delete course:', err);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await api.put(`/courses/${course._id}`, editData);
      setIsEditing(false);
      onUpdate(course._id, response.data); // Call onUpdate with updated course data
    } catch (err) {
      console.error('Failed to update course:', err);
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            name="description"
            value={editData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="instructor"
            value={editData.instructor}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-2">{course.name}</h3>
          <p className="text-gray-600 mb-2">{course.description}</p>
          <p className="text-gray-500 mb-4">Instructor: {course.instructor}</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseItem;
import React from 'react';

const Alert = ({ type, message }) => {
  const alertClasses = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700'
  };

  return (
    <div className={`p-4 rounded-md mb-4 ${alertClasses[type] || alertClasses.info}`}>
      {message}
    </div>
  );
};

export default Alert;
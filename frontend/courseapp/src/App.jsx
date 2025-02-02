import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CoursesPage from './components/courses/coursePage';
import AddCoursePage from './components/courses/AddCoursePage';
import PrivateRoute from './components/layout/PrivateRoute';
import { AuthProvider } from '../context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/courses"
              element={
                <PrivateRoute>
                  <CoursesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/courses/add"
              element={
                <PrivateRoute>
                  <AddCoursePage />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/courses" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
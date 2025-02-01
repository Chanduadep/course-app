Course Management Platform

A simple MERN (MongoDB, Express, React, Node.js)Course Management Platform where users can register, log in, and manage courses.

Features:

Authentication System

User registration and login

Protected routes

JWT-based authentication

Course Management:

Create new courses

Edit existing courses

Delete courses

View course listings

Technologies Used:

Frontend: React, React Router, Axios, Tailwind CSS

Backend: Node.js, Express, MongoDB, Mongoose, JWT

Project Structure:

Frontend (React) Components

Login.jsx - Allows users to log in and stores authentication tokens.

Register.jsx - Handles user registration.

CourseList.jsx - Fetches and displays the list of available courses.

CourseForm.jsx - A form to create a new course.

CourseItem.jsx - Allows users to edit an existing course.

Backend (Express) Controllers

authController.js

register - Registers a new user.

login - Authenticates a user and returns a token. courseController.js

createCourse - Adds a new course to the database.

getCourses - Retrieves all courses.

updateCourse - Updates an existing course.

deleteCourse - Removes a course from the database.

Backend Routes

Auth Routes (/api/auth)

POST /register - Registers a user.

POST /login - Logs in a user.

Course Routes (/api/courses)

GET / - Fetches all courses.

POST / - Creates a new course.

PUT /:id - Updates an existing course.

DELETE /:id - Deletes a course.

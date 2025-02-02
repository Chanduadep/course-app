Course Management Platform

A simple MERN (MongoDB, Express, React, Node.js)Course Management Platform where users can register, log in, and manage courses.

Features

User Authentication (Register/Login)

Course Management:

View all courses

Add new courses

Edit existing courses

Delete courses

Protected routes for authenticated users

Responsive design

Technologies Used:

Frontend: React, React Router, Axios, Tailwind CSS

Backend: Node.js, Express, MongoDB with Mongoose, JWT for authentication , bcrypt for password hashing

API Endpoints

Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Login user

Courses

GET /api/courses - Get all courses

POST /api/courses - Create a new course

PUT /api/courses/:id - Update a course

DELETE /api/courses/:id - Delete a course

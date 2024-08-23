# Task Management System

## Overview

The Task Management System is a backend API built using Node.js and Express.js. It provides functionality for managing tasks with secure user authentication and role-based access control. The API uses MongoDB to store data and follows best practices for code quality, including dependency injection and proper design patterns.

## Features

- User Registration with JWT-based Authentication
- Role-Based Access Control (Admin, User)
- CRUD Operations for Tasks
- Filtering Tasks by Priority, Status, and Assigned User
- Secure Endpoints with Route Guards and Input Validation
- Dependency Injection for Authentication, Role Management, and Task Handling

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token) for Authentication
- bcryptjs for Password Hashing
- dotenv for Environment Variables
- Postman for API Testing

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or a connection URI to a remote MongoDB instance
- Postman installed for testing API endpoints

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Anshuldhakate/task-management-system.git
   cd task-management-system

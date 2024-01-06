# Employee Management System

## Project is Associate with ResoTech Solutions (ASSIGNMENT TASK)
This is a simple Full Stack project for Employee CRUD (Create, Read, Update, Delete) operations. It utilizes Spring Boot for the backend, Java 17 as the programming language, ReactJS for the frontend, and MySQL for the database.

## Screenshots:

![Employee CRUD](https://github.com/xsanket/Employee-CRUD/assets/121148185/faa7d267-84ec-4f6b-be58-a30499a01080)
![Databse Entries](https://github.com/xsanket/Employee-CRUD/assets/121148185/f07fe00d-6ddd-46a3-9dd1-0c234b1e1a46)
![Employee Post test](https://github.com/xsanket/Employee-CRUD/assets/121148185/28636e25-2b41-4b4e-868c-28ba4fe3be60)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Java 17 installed
- Node module and npm installed # npm install react --save
- MySQL installed and running: Update your database configurations in the Application.properties file.

## Getting Started
1. Clone the repository: `git clone https://github.com/your-username/employee-management-system.git`
2. Navigate to the project folder: `cd employee-management-system`


## Backend
The backend of this project is developed using Spring Boot, a powerful framework for building Java-based enterprise applications.

### Project Structure
- `controller/`: Contains the REST API controllers.
- `model/`: Defines the data models for the application.
- `repository/`: Provides data access to the database.
- `service/`: Implements business logic.

## Frontend
The frontend is built using ReactJS, a popular JavaScript library for building user interfaces.

### Project Structure
- `components/`: Contains React components for different parts of the application.
- `App.js`: Main component rendering other components.

## Database
MySQL is used as the database for this project. The database schema and tables will be automatically created by Hibernate, the ORM (Object-Relational Mapping) framework used by Spring Boot.

## Running the Application
1. Start the backend: `cd backend && ./mvnw spring-boot:run`
2. Start the frontend: `cd frontend && npm start`

The backend will run on `http://localhost:8080` and the frontend on `http://localhost:3000`.

## API Endpoints
- `GET /api/employees`: Get all employees
- `GET /api/employees/{id}`: Get employee by ID
- `POST /api/employees`: Create a new employee
- `PUT /api/employees/{id}`: Update employee by ID
- `DELETE /api/employees/{id}`: Delete employee by ID

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the xsanket.

Feel free to customize this README file according to your project's specific details. Good luck with your Employee Management System project!


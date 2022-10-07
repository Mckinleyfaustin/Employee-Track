# Employee Tracker
Employee Tracker is a CMS interface that makes it easy for non-developers to view and interact with information stored in a databases. This CLI is a solution for managing a company's employees, roles and departments. It is built with node, inquirer, and MySQL.

## 🧐 Table of Contents

- Demo

- The Requirements

- User Story

- Installation Steps

- Authors

- Technologies Used

## 🚀 Demo

* ![Play Demo](assets/images/employee-tracker.gif)

A generator that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Requirements
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

### User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Installation Instructions
Run the command "npm i" to install dependencies

## Author
McKinley Faustin

## 🍰 Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- jest.js
- Github


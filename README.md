School Management System - Admin Page

Here’s a comprehensive description for a School Management System (Admin Page) that incorporates full CRUD functionality and uses Express, MongoDB, HTML, CSS, EJS, MVC architecture, and JavaScript.

School Management System - Admin Page
The Admin Page of the School Management System provides a seamless interface for managing students, courses, and teachers through intuitive CRUD (Create, Read, Update, Delete) operations. This page is designed for administrators to efficiently manage the school's database using a user-friendly dashboard.

Features and Functionalities:
1. Add New (Student, Course, Teacher):
Functionality: Admins can easily add new students, teachers, and courses to the system.
Form Interface: User-friendly forms are provided for each entity (students, teachers, and courses) where admins can input relevant details like student/teacher names, courses offered, and more.
Validation: Each form includes data validation to ensure all required fields are filled in with valid data before submitting to the database.
Backend: Data is processed and stored in MongoDB using Express and the MVC architecture.

2. Show (Students, Courses, Teachers) - Data Table View:
Dynamic Table Views:
Students: Displays a list of all students with details like name, grade level, and assigned courses.
Teachers: Shows the list of teachers along with their subjects and qualifications.
Courses: Displays the available courses, including descriptions and assigned instructors.
Pagination & Sorting: Tables support pagination for large datasets and sorting by columns (e.g., names, course titles).
Backend: Data is dynamically fetched from MongoDB using Express and displayed using EJS templates.

3. Update (Student, Course, Teacher) Rows:
Inline Edit: Admins can quickly edit student, teacher, and course details directly from the table by clicking an "Edit" button next to each row.
Pre-filled Forms: When updating, the form is pre-filled with the selected entity's data for easy modification.
Backend: On submission, the data is updated in MongoDB via an Express PUT request, following the MVC pattern.
Validation: Data is revalidated to ensure correct updates.

4. Display Information (Student, Course, Teacher):
Detail Pages:
Clicking on a student, teacher, or course name opens a detailed view of that particular entity.
For students, admins can see personal information, enrolled courses, and teacher assignments.
For teachers, their qualifications, subjects taught, and assigned students are displayed.
For courses, admins can view a course description, list of enrolled students, and instructor information.
Backend: Each detail page is dynamically populated using EJS templates and data fetched from MongoDB via Express.

5. Delete (Student, Course, Teacher) Row:
Delete Button: Each row in the student, teacher, or course table includes a "Delete" button.
Confirmation: Upon clicking delete, a confirmation popup is triggered to prevent accidental deletions.
Backend: Once confirmed, the entry is deleted from the database using a DELETE request to MongoDB.

6. Search for Student and Teacher by Name:
Search Bar: A search bar at the top of the student and teacher tables allows admins to search for specific entries by name.
Instant Search: As the admin types into the search bar, the table dynamically updates to show matching results (using JavaScript for real-time filtering).
Backend: The search functionality fetches filtered data from the MongoDB database using Express, and the results are rendered on the page with EJS.

Technology Stack:

Express.js: The core of the back-end, handling all server-side logic, routing, and CRUD operations.

MongoDB: The NoSQL database that stores all the system's data, including students, teachers, and courses.

HTML/CSS: For structuring and styling the user interface.

EJS (Embedded JavaScript): Used for rendering dynamic views with the data fetched from the MongoDB database.

MVC Architecture: Ensures a clean separation between the model (MongoDB data), views (HTML/EJS), and controller (Express routes and logic).

JavaScript: Adds interactivity, such as handling form validation, search functionality, and updating the DOM dynamically.

This Admin Page offers a robust solution for managing a school's operational data, making the administration process streamlined and efficient. With the ability to add, update, delete, search, and display detailed information, this system is essential for ensuring smooth school management.


# Expense Tracker

The Simple Expense Tracker is a full-stack web application built with the MERN stack. It allows users to manage their daily expenses by adding, viewing, updating, deleting, and searching records through a clean and responsive interface. The frontend, developed with React and styled with Tailwind CSS, provides a modern, visually appealing, and user-friendly design, while the backend, powered by Node.js and Express, handles all CRUD operations. Expense data is stored in MongoDB, ensuring secure and scalable data management. This project demonstrates practical full-stack development with a focus on usability, seamless interaction, and a polished UI.



## Features

✅ Add Expense – Record expense details (category, amount, description).

📖 View Expenses – List all expenses in a structured format.

🔍 Search Expenses – Quickly find expenses by category, date, or description.

✏️ Edit Expense – Update any expense details.

🗑️ Delete Expense – Remove unwanted expense records.

## Tech Stack

⚙ MongoDB – Database for storing expenses.

⚙ Express.js – Backend framework for API handling.

⚙ React.js – Frontend with a responsive and interactive UI.

⚙ Node.js – Server-side runtime environment.

## Frontend Setup & Deployment

#### Clone the Project

```bash
  git clone https://github.com/NavodyaDhanushka/Simple_Expense_Tracker_Frontend.git
  cd expense-tracker
```

#### Install Dependencies

```bash
  cd client
  npm install
```

#### Configure Backend Connection

Make sure the backend server is running at http://localhost:5000.

The React frontend communicates with the backend for all CRUD operations.

Optionally, create a .env file in the client folder to set the API base URL:

```bash
  VITE_API_URL=http://localhost:5000/api
```

#### Run the Frontend
```bash
  cd client
  npm run dev
```
Opens the app in your browser at http://localhost:3000.

All features—adding, viewing, editing, deleting, and searching expenses—are fully functional.

#### Test the Frontend

Open your browser and go to http://localhost:3000.

Add new expenses using the form.

View all expenses in the table or list.

Edit existing expenses to update their details.

Delete any unwanted expenses.

Use the search bar to quickly find specific expenses by title, category, or description.

Verify that all changes are reflected in MongoDB through the backend.

#### Tailwind CSS

The frontend is styled using Tailwind CSS for a modern, responsive, and clean UI.

All components are fully responsive across devices.

#### Frontend Interface
![image alt]([client/Screenshot 2025-08-25 090324.png](https://github.com/NavodyaDhanushka/Expense_Tracker_Frontend/blob/main/client/Screenshot%202025-08-25%20090324.png))

**Employee Management React App**

A React application for managing employee data with CRUD operations, API integration, local persistence, and advanced filtering. Built with React, Redux Toolkit, and Ant Design.

**_Features_**

- Add, update, view, and delete employees.

- Fetch employee data from API and merge with localStorage.

- Persist employee data in localStorage for offline edits.

- Filter employees by name, status, and department.

- Sortable and paginated table using Ant Design.

- Modal-based forms for editing/viewing employee data.

- Notifications for success/error actions.

**Getting Started**
Prerequisites

Node.js >= 18.x
npm or yarn

**Installation to run locally**
git clone https://github.com/ayyappan4031/HRMS.git

cd HRMS

npm install

npm run dev

Open http://localhost:5173/ in your browser.

**Folder Structure**
HRMS/
├─ node_modules/
├─ public/
├─ src/
│ ├─ hooks/ # Custom hooks
│ ├─ pages/ # Page-level components
│ ├─ redux/ # Redux slices and store setup
│ ├─ services/ # API service functions
│ ├─ ui/ # Reusable UI components
│ ├─ utils/ # Utility functions
│ ├─ App.css # tailwind import
│ ├─ App.jsx # Main app component
│ ├─ index.css
│ └─ main.jsx # React DOM entry point
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js

**State Management**

employeesSlice handles CRUD actions, API fetches, localStorage updates, loading and error states.

API data is merged with local storage using employeeId as a unique key.

**Usage**

Add Employee: Click “Add Employee” button and fill the form.

Edit Employee: Click edit icon (✎) on a row.

View Employee: Click view icon (👤) on a row.

Delete Employee: Click delete icon (🗑) on a row.

Filter Employees: Use the filters above the table (name, status, department).

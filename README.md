# iTask - Todo List App

A simple React-based Todo List application that allows users to add, edit, delete, and mark tasks as completed. The app persists data using `localStorage` to retain todos even after refreshing the page.

## Screenshots
[Todo App Screenshot]![image](https://github.com/user-attachments/assets/5fe8fc93-08e1-4746-891b-eca1d2d241a9)





## Features
- ✅ Add new tasks
- 📝 Edit existing tasks
- ❌ Delete tasks
- 📌 Mark tasks as completed
- 🎯 Filter to show/hide completed tasks
- 💾 Data persistence using `localStorage`

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```sh
git clone https://github.com/arcane-2004/itask.git
cd itask
```

### Install Dependencies
Using npm:
```sh
npm install
```
Or using yarn:
```sh
yarn install
```

### Run the Application
```sh
npm start
```
Or using yarn:
```sh
yarn start
```

The app will be available at `http://localhost:3000/`

## Project Structure
```
📂 itask-todo
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 Navbar.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## Usage
### Adding a Task
1. Type a task in the input field.
2. Click the `Add` button to add it to the list.

### Editing a Task
1. Click the ✏️ (Edit) button.
2. The task text will appear in the input field.
3. Modify it and click `Add` to update it.

### Deleting a Task
1. Click the ❌ (Delete) button next to a task.

### Marking a Task as Completed
1. Click the checkbox next to a task.
2. Completed tasks will have a strikethrough effect.

### Showing/Hiding Completed Tasks
- Toggle the "Show Finished" checkbox to show or hide completed tasks.

## Technologies Used
- React.js
- Tailwind CSS (for styling)
- UUID (for unique task IDs)
- localStorage (for data persistence)
---

Happy Coding! 🚀





# Task Manager React App

This is a simple Task Manager application built with React. It allows users to manage tasks, mark them as completed, edit task details, and delete tasks.

## Features

- Display a list of tasks with their name, description, and priority.
- Allow users to mark tasks as completed.
- Provide an option to edit task details, including the task name, description, and priority.
- Include a button to delete tasks.
- Visual indication of completed tasks with a strike-through effect and dull color.
- Add new tasks using a modal/form with task name, description, and priority.
- Display a notification when a task is successfully added using `react-toastify`.
- Save tasks in the browser's local storage for persistence.

## Project Structure

- `src/App.jsx`: Main component handling routing.
- `src/TaskList.jsx`: Component displaying the list of tasks.
- `src/AddTaskModal.jsx`: Component for adding new tasks.
- `src/EditTaskModal.jsx`: Component for editing existing tasks.

## Setup and Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm start
   ```

   The app will be accessible at `http://localhost:3000` in your web browser.

## Deployment

The project is deployed and can be accessed [here](https://656af9d38dc25f25a43b6d66--calm-starship-872feb.netlify.app/).

## Dependencies

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [react-toastify](https://github.com/fkhadra/react-toastify)

## Author

Gopal Sable


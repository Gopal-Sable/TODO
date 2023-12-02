import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container mt-4">
      <h2>Task List</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={`checkbox-${task.id}`}
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <label
                className={`custom-control-label ${
                  task.completed ? 'text-muted text-decoration-line-through' : ''
                }`}
                htmlFor={`checkbox-${task.id}`}
              >
                {task.name}
              </label>
            </div>
            <Link to={`/edit/${task.id}`} className="btn btn-primary btn-sm ml-2">
              Edit
            </Link>
            <button
              className="btn btn-danger btn-sm ml-2"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

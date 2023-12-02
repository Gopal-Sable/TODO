import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';
import EditTaskModal from './EditTaskModal';
// import { useHistory } from 'react-router-dom';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  
  const handleEditTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Task List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Task
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add">
            <AddTaskModal onAddTask={handleAddTask} />
          </Route>
          <Route path="/edit/:taskId">
            
            <EditTaskModal onEditTask={handleEditTask}  />
          
          </Route>
          <Route path="/">
            <TaskList tasks={tasks} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

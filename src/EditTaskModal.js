
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const EditTaskModal = ({ onEditTask }) => {
  const { taskId } = useParams();
  const history = useHistory();
  const [task, setTask] = useState({
    name: '',
    description: '',
    priority: 'low',
  });

  useEffect(() => {
   
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const selectedTask = storedTasks.find((t) => t.id === parseInt(taskId, 10));

    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [taskId]);
const onClose=()=>{
  history.push('/')
}
  const handleEditTask = () => {
    const editedTask = {
      ...task,
    };

    onEditTask(editedTask);
    onClose();
  };

  if (!task) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mt-4">
      <h2>Edit Task</h2>
      <form>
        <div className="form-group">
          <label>Task Name:</label>
          <input
            type="text"
            className="form-control"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Task Description:</label>
          <textarea
            className="form-control"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select
            className="form-control"
            value={task.priority}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleEditTask}>
          Save Changes
        </button>
        <button type="button" className="btn btn-secondary ml-2" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTaskModal;

import {useState} from 'react';


function TodoForm({ addTask, Tasks }) {
  const [task, setTask] = useState({ name: '', completed: false });

  const handleTextChange = (e) => {
    setTask({
      id: Tasks.length + 1, 
      name: e.target.value,
      completed: false,
    });
  };

  const handleAddTask = () => {
      addTask(task);
      setTask({ name: '', completed: false });
    
  };

  return (
    <div className="row align-items-center">
      <div className="col-md-9">
        <input
          className="m-3 form-control"
          type="text"
          placeholder="Write your new task here..."
          value={task.name}
          onChange={handleTextChange}
        />
      </div>
      <div className="col-md-3 d-grid">
        <button onClick={handleAddTask} className="btn btn-primary">+ Add Task</button>
      </div>
    </div>
  );
}


export default TodoForm;
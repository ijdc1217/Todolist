import { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList'

function App() {

  const [Tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: true },
    { id: 3, name: 'Task 3', completed: false },

  ]);

  const addTask = (task) => {
    const newTask = { ...task};
    setTasks([...Tasks, newTask]);
    console.log(Tasks);
  };


  const markTask = (taskId) => {
    const updatedTasks = Tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = Tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container mt-5 p-5 border shadow">
      <h1 className="fw-bold">To Do list</h1>
      <div className="card">
        <div className="card-header">
        <TodoForm addTask={addTask} Tasks={Tasks}/>
        </div>
        <div className="card-body mx-3">
        <TodoList tasks={Tasks} markTask={markTask} removeTask={removeTask} />
        </div>
      </div>
      
    </div>
    </>
  )
}

export default App

import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

function TodoList({tasks, markTask, removeTask}){

    const List = tasks.map(task => (
        <TodoItem id={task.id} name={task.name} status={task.completed} markTask={markTask} removeTask={removeTask} />
    ))

    return(
        <>
        <ListGroup>
      {List}
    </ListGroup>
        </>
    )
}

export default TodoList
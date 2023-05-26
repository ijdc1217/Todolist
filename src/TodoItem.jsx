import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

function TodoItem({ id, name, status, markTask, removeTask }) {

    const handleMarkTask = () => {
        markTask(id);
    };

    const handleRemove = () => {
        removeTask(id);
    };

    return (
        <>
            <ListGroup.Item>
                <div className="row align-items-center">
                    <div className="col-8">
                    <strong style={{ textDecoration: status ? "line-through" : "" }}>{name}</strong>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                    {status ?
                        <Button className='mx-3' onClick={handleMarkTask} variant="outline-danger">X</Button>
                        :
                        <Button className='mx-3' onClick={handleMarkTask} variant="outline-success">✓</Button>}
                    <Button variant="outline-warning" onClick={handleRemove}>Delete</Button>
                    </div>
                </div>

            </ListGroup.Item>
        </>
    )
}

export default TodoItem
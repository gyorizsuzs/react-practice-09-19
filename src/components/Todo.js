import './Todo.css';
import TodoMetadata from './TodoMetadata';

function Todo({ item }) {
  return (
    <div className="Todo">
      <h1>{item.title}</h1>
      <input type="checkbox" checked={item.completed} />
      <TodoMetadata todoID={item.id} todoUserId={item.userId} />
    </div>
  );
}

export default Todo;

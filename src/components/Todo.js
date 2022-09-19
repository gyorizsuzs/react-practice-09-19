import './Todo.css';

function Todo({ todo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.userId}</p>
      <p>{todo.id}</p>
      <p>{todo.completed.toString()}</p>
    </div>
  );
}

export default Todo;

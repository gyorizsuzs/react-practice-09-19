import './TodoMetadata.css';

function TodoMetadata(props) {
  return (
    <div className="Metadata">
      <h1>id:{props.todoId}</h1>
      <h1>user id:{props.todoUserId}</h1>
    </div>
  );
}

export default TodoMetadata;

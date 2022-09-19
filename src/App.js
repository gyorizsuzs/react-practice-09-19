import './App.css';
import Todo from './components/Todo';

const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <Todo todo={todos[0]}></Todo>
    </div>
  );
}

export default App;

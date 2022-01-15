// import './App.css';

import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  { text: 'Cut Onion', completed: false },
  { text: 'Take react intro course', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, i) => (
          <TodoItem text={todo.text} key={todo.text + i} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;

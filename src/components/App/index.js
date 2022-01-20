import { useTodos } from '../../hooks/useTodos';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { EmptyTodo } from '../EmptyTodo/EmptyTodo';
import { Modal } from '../Modal/Modal';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoEmptySearch } from '../TodoEmptySearch/TodoEmptySearch';
import { TodoError } from '../TodoError/TodoError';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoLoading } from '../TodoLoading/TodoLoading';
import { TodoSearch } from '../TodoSearch/TodoSearch';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    addTodo,
  } = useTodos();
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <EmptyTodo />}
        onEmptySearchResults={(searchText) => (
          <TodoEmptySearch searchText={searchText} />
        )}
        // render={(todo) => (
        //   <TodoItem
        //     text={todo.text}
        //     key={todo.id}
        //     completed={todo.completed}
        //     onComplete={() => toggleCompleteTodos(todo.id)}
        //     onDelete={() => deleteTodo(todo.id)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            text={todo.text}
            key={todo.id}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;

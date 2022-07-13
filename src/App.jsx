import { createSignal, createUniqueId } from 'solid-js';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import SignalToObject from './Components/AddingSignalToState';
const initialTodos = [
  {
    id: createUniqueId(),
    todo: 'Finish OSP project',
    created: 'Sat Jul 07 2022',
    completed: false,
  },
  {
    id: createUniqueId(),
    todo: 'Add 2 differentiating features from React and SolidJS',
    created: 'Sat Jul 09 2022',
    completed: false,
  },
  {
    id: createUniqueId(),
    todo: 'Finish SolidJS build',
    created: 'Sat Jul 09 2022',
    completed: false,
  },
];
//TODO: Get rid of initalTodos and set initial value to empty array
function App() {
  const [todos, setTodos] = createSignal(initialTodos);
  const [testSig, setTestSig] = createSignal('Test Signal');

  return (
    <div>
      <h1
        style={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
        }}
      >
        Todo List
      </h1>
      <Form addTodo={setTodos} />
      <TodoList todoList={todos()} changeTodo={setTodos} />
      <SignalToObject todoList={todos()} testSig={testSig()} />
    </div>
  );
}

export default App;

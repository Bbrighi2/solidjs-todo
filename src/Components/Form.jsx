import { createSignal } from 'solid-js';

const emptyTodo = {
  todo: '',
  created: new Date().toDateString(),
  complete: false,
};
//Addes new todo to todos in App.jsx
const Form = (props) => {
  const [newTodo, setNewTodo] = createSignal(emptyTodo);
  //   console.log(props);
  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo((todos) => [...todos, newTodo()]);
    setNewTodo(emptyTodo);
  };
  return (
    <form>
      <label for="todoName">
        <input
          style={{ width: '500px', height: '20px', 'margin-left': '20px' }}
          type="text"
          for="todoName"
          value={newTodo().todo}
          onInput={(e) => {
            setNewTodo({ ...newTodo(), todo: e.currentTarget.value });
          }}
          placeholder="Todo"
        ></input>
      </label>
      <button
        style={{
          color: 'white',
          'background-color': 'limegreen',
          'margin-left': '15px',
          border: 'none',
          height: '25px',
        }}
        type="submit"
        onClick={addTodo}
      >
        Add Todo
      </button>
    </form>
  );
};

export default Form;

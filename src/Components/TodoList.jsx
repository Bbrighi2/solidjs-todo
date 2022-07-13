import { createEffect, createSignal, For, Index } from 'solid-js';
//ATTEMPT: tried to access each completed property in the taskList to allow setChecked to update that specific tasks completed property
// console.log(props.taskList);
// let finished;
// let checked1;
// let setChecked2;
// props.taskList.forEach((task) => {
//   const [checked, setChecked] = createSignal(task.completed);
//   checked1 = checked;
//   setChecked2 = setChecked;
//   return checked1, setChecked;
// });
//TODO:
//1.) Remove completed from todo object
//2.) create a signal in App.jsx that can handle changes i
// Move checked to App.jsx and pass as prop OR keep it here and use
const TodoList = (props) => {
  //Creates a new signal that is initially set to false
  const [checked, setChecked] = createSignal(false);

  //A create effect to log when the signal value changes
  // createEffect(() => console.log('Completed is now', checked()));
  // console.log(checked());
  //Event listener function for onChange
  const changeCheckStatus = (e) => {
    e.preventDefault();
    //Iterating through the taskList prop which is passed in from App.jsx
    props.todoList.forEach((todo) => {
      //checking if the currentTarget id matches the task id and checking if checked is equal to false
      if (e.currentTarget.id == todo.id && checked() === false) {
        //updating checked and setting value to true
        setChecked(true);
        //assigning the property completed equal to the current checked value which should be now true
        todo.completed = checked();
        //else if (condition meets but checked is true)
      } else if (e.currentTarget.id == todo.id && checked() === true) {
        //reset checked to false
        setChecked(false);
        //assign completed to checked()
        todo.completed = checked();
      }
    });
  };
  return (
    <>
      <ul>
        <For each={props.todoList}>
          {(todos, i) => {
            // console.log(todos);
            return (
              <li id={todos.id}>
                {todos.todo} @{' '}
                <span style={{ 'font-style': 'italic' }}>
                  {todos.created} is{' '}
                </span>
                <span style={{ 'font-weight': 'bold' }}>
                  {todos.completed ? 'complete' : 'incomplete'}
                </span>
                <input
                  id={todos.id}
                  type="checkbox"
                  onChange={changeCheckStatus}
                ></input>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
};

export default TodoList;
/*
<For each={props.taskList}>
          {(task, i) => {
            return (
              <li>
                {task.task} @{' '}
                <span style={{ 'font-style': 'italic' }}>
                  {task.created} is{' '}
                </span>
                <span style={{ 'font-weight': 'bold' }}>
                  {checked() ? 'complete' : 'incomplete'}
                </span>
                <input type="checkbox" onChange={check}></input>
              </li>
            );
          }}
        </For>
        <Index each={props.taskList}>
          {(tasks, i) => {
            console.log(tasks());
            return (
              <li id={tasks().id}>
                {tasks().task} @{' '}
                <span style={{ 'font-style': 'italic' }}>
                  {tasks().created} is{' '}
                </span>
                <span style={{ 'font-weight': 'bold' }}>
                  {tasks().completed ? 'complete' : 'incomplete'}
                </span>
                <input
                  id={tasks().id}
                  type="checkbox"
                  onChange={changeCheckStatus}
                ></input>
              </li>
            );
          }}
        </Index>
*/

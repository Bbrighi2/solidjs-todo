import { createEffect, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

// const globalObject = {};

const SignalToObject = (props) => {
  const [count, setCount] = createSignal(0);
  const [state, setState] = createStore({ props: props, signals: [] });
  console.log(state.signals);
  const addOne = () => {
    setCount((c) => c + 1);
    setState((s) => {
      s.props, s.signals.push(count());
    });
    console.log(state);
  };
  return (
    <div>
      <b style={{ 'margin-right': '10px' }}>Count: {count()}</b>
      <button type="button" onClick={addOne}>
        Add One
      </button>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default SignalToObject;

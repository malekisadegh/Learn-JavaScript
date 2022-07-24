# useReducer
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.
>Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

The useReducer Hook accepts two arguments.
```
useReducer(<reducer>, <initialState>)
```
- reducer

function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.

- useReducer

returns the current stateand a dispatchmethod.

example :

```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [state, dispatch] = useState(initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

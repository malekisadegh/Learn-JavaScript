## useRef Hook
```
const refContainer = useRef(initialValue);
```
> It can be used to access a DOM element directly

useRef returns a mutable ref object whose `.current ` property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

A common use case is to access a child imperatively:
```
const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );

```
- useRef is like a “box” that can hold a mutable value in its .current property.
- useRef doesn’t notify you when its content changes
- Mutating the .current property doesn’t cause a re-render.
- useRef() only returns one item. It returns an Object called current.
- When we initialize useRef we set the initial value: useRef(0).

> If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.

```
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
```
> The useRef Hook can also be used to keep track of previous state values.

```
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
```
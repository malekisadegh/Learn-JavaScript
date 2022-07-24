## State Hook
This example renders a counter. When you click the button, it increments the value:
```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
>### we call the useState Hook directly inside our component

> useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else.

## What does calling useState do?
 It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — variables “disappear” when the function exits but state variables are preserved by React.

> ## What Do Square Brackets Mean?
>This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:
```
var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair

```
When we declare a state variable with useState, it returns a pair — an array with two items. The first item is the current value, and the second is a function that lets us update it. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead

### The only argument to useState is the initial state and it can be any of types.

- The initial state argument is only used during the first render.

- You can use the State Hook more than once in a single component in diffrent names

- The array destructuring syntax lets us give different names to the state variables we declared by calling useState.

- the state is only created the first time our component renders. During the next renders, useState gives us the current state.

- React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We’ll look at the built-in Hooks first.

## Reading State
In a function, we can use count directly:
```
 <p>You clicked {count} times</p>
```
## Updating State
In a function, we already have for example setCount :
```
<button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```
## explain the code (recap)
- Line 1: We import the useState Hook from React. It lets us keep local state in a function component.

- Line 4: Inside the Example component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names. We’re calling our variable count because it holds the number of button clicks. We initialize it to zero by passing 0 as the only useState argument. The second returned item is itself a function. It lets us update the count so we’ll name it setCount.

- Line 9: When the user clicks, we call setCount with a new value. React will then re-render the Example component, passing the new count value to it.

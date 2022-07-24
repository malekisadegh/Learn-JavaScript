## Effect Hook
You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.
> The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 

For example, this component sets the document title after React updates the DOM:
```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

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

## What does useEffect do? 
By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed and call it later after performing the DOM updates.

## Why is useEffect called inside a component?
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. 

## Does useEffect run after every render?
Yes! By default, it runs both after the first render and after every update.you might find it easier to think that effects happen “after render. React guarantees the DOM has been updated by the time it runs the effects.

> Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don’t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate useLayoutEffect Hook with an API identical to useEffect.

## cleanup
```
 useEffect(() => {
    function handleStatusChange(status) {
      ....
    }

    // Specify how to clean up after this effect:
    return function cleanup() {
      ...
    };
  });
```
## Why did we return a function from our effect? 
This is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They’re part of the same effect!

## When exactly does React clean up an effect?
React performs the cleanup when the component unmounts. However, as we learned earlier, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.

>### what happens if the friend prop change

Mount with { friend: { id: 100 } } props
```
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // Run first effect
```
Update with { friend: { id: 200 } } props
```
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // Run next effect
```
Update with { friend: { id: 300 } } props
```
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // Clean up previous effect

ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // Run next effect
```

Unmount
```
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // Clean up last effect
```

## Optimizing Performance by Skipping Effects
>  You can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:

```
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```
Only re-run the effect if count changes

> This also works for effects that have a cleanup phase

>React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.










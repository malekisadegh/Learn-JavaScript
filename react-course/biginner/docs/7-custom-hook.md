## Building Your Own Hooks

Sometimes, we want to reuse some stateful logic between components. Traditionally, there were two popular solutions to this problem: higher-order components and render props. Custom Hooks let you do this, but without adding more components to your tree.

```
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    handleStatusChange({isOnline:true})
    return () => {
     handleStatusChange({isOnline:false})
    };
  });

  return isOnline;
}
```
Now we can use it from any components:
```
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

The state of each component is completely independent. Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The useSomething naming convention is how our linter plugin is able to find bugs in the code using Hooks.

You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions, timers, and probably many more we haven’t considered. We are excited to see what custom Hooks the React community will come up with.

## Other Hooks
There are a few less commonly used built-in Hooks that you might find useful. For example, useContext lets you subscribe to React context without introducing nesting:
```
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
}
```
And useReducer lets you manage local state of complex components with a reducer:
```
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
```

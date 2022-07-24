# what is Components in React

If you visit the example code at the [jsx.md](./jsx.md), you'll see that the JSX code is being returned by a function. But the App( ) function is not an ordinary function, it is actually a component
> ## A component is an independent, reusable code block which divides the UI into smaller pieces

 ###  Rather than building the whole UI under one single file, we can and we should divide all the sections into smaller independent pieces. In other words, these are components.

## React has two types of components
- functional 
- class

# Functional Components

The first and recommended component type in React is functional components. A functional component is basically a JavaScript/ES6 function that returns a React element (JSX). According to React's official docs, the function below is a valid functional component:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Alternatively, you can also create a functional component with the arrow function definition

```
const Welcome = (props) => { 
  return <h1>Hello, {props.name}</h1>; 
}
```
> This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. 

To be able to use a component later, you need to first export it so you can import it somewhere else
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```
After importing it, you can call the component like in this example:

```
import Welcome from './Welcome';

function App() { 
  return (
    <div className="App">
      <Welcome />
    </div>
  );
}
```
## Functional Component in React:

- is a JavaScript/ES6 function
- must return a React element (JSX)
- always starts with a capital letter (naming convention)
- takes props as a parameter if necessary

# Class Components

The second type of component is the class component. Class components are ES6 classes that return JSX. Below, you see our same Welcome function, this time as a class component:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
Different from functional components, class components must have an additional render( ) method for returning JSX.

## Why Use Class Components?
We used to use class components because of "state". In the older versions of React (version < 16.8), it was not possible to use state inside functional components.

Therefore, we needed functional components for rendering UI only, whereas we'd use class components for data management and some additional operations (like life-cycle methods).

This has changed with the introduction of React Hooks, and now we can also use states in functional components as well.

## A Class Component in React:

- is an ES6 class, will be a component once it ‘extends’ a React component.
- takes Props (in the constructor) if needed
- must have a render( ) method for returning JSX  

**  ** 
# What are Props in React?

Another important concept of components is how they communicate. React has a special object called a prop (stands for property) which we use to transport data from one component to another.

But be careful – props only transport data in a one-way flow (only from parent to child components). It is not possible with props to pass data from child to parent, or to components at the same level.

Let's revisit the App( ) function above to see how to pass data with props.

First, we need to define a prop on the Welcome Component and assign a value to it:

```
import Welcome from './Welcome';

function App() { 
  return (
    <div className="App">
      <Welcome name="John"/>
      <Welcome name="Mary"/>
      <Welcome name="Alex"/>
    </div>
  );
}
```

Props are custom values and they also make components more dynamic. Since the Welcome component is the child here, we need to define props on its parent (App), so we can pass the values and get the result simply by accessing the prop "name":

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
> ### Props are used for passing data, not for manipulating it.
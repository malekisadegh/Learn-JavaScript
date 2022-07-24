# What is JSX?

> The first thing you'll realize after installing your first React project is that a JavaScript function returns some HTML code
```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
```
- ### JSX allows us to write HTML and JavaScript combined together
> In React projects, we don't create separate HTML files, because JSX allows us to write HTML and JavaScript combined together in the same file, like in the example above. You can, however, separate your CSS in another file.

- ### JSX can execute any JavaScript code inside the HTML 

>JSX is very practical, because we can also execute any JavaScript code (logic, functions, variables, and so on) inside the HTML directly by using curly braces { }.

```
function App() {

  const text = 'Hello World';
  
  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}
```
- ### in JSX you can assign HTML tags to JavaScript variables
```
const message = <h1>React is cool!</h1>;
```

- ### in JSX you can return HTML inside JavaScript logic
```
render() {
    if(true) {
        return <p>YES</p>;
    } else {
        return <p>NO</p>;
    }
}
```

## consider the following rules while writing JSX

> - HTML and component tags must always be closed < />
> - Some attributes like “class” become “className” (because class refers to JavaScript classes) should be written camelCase
> - We can’t return more than one HTML element at once, so make sure to wrap them inside a parent tag

```
return (
  <div>
    <p>Hello</p>
    <p>World</p>
  </div>
);
```
or as an alternative, you can wrap them with empty tags
```
return (
  <>
    <p>Hello</p>
    <p>World</p>
  </>
);
```

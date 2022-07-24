## Why function component
- classes don’t minify very well
-  classes make hot reloading flaky and unreliable
- in classes code optimization is hard

 function components in React look like this:
 ```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
 ```
 or this:
 ```
 function Example(props) {
  // You can use Hooks here!
  return <div />;
}
 ```
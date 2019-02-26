---
title: "What is continuous integration?"
date: 01-08-2019
---

Don't bind when passing props or during render. Replace them with class methods (using the Property Initializer Syntax or keep the methods inside the child component. Use closures to pass in additiional arguments.

Property initialize syntax: use arrow functions to define event handlers

```js
class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          ADD
        </button>
        <input onChange={this.handleInput}/>
        {
          this.state.todos.map((item) => {
            return (
              <li onClick={this.handleRemove(item.id)}>
                {item.text}
              </li>
            );
          });
        }
      </div>
    )
  }

// Property Initializer Syntax
  handleClick = () => {
    // "this"
  }

  handleInput = (e) => {
    // "this", "e"
  }

    // use closure to pass in additional arguments
  handleRemove = (id) => (e) => {
    // "this", "e", "id"
  }
}
```


https://stackoverflow.com/questions/45041878/closures-in-react
https://daveceddia.com/avoid-bind-when-passing-props/
https://ryanfunduk.com/articles/never-bind-in-render/
https://blog.logrocket.com/5-common-practices-that-you-can-stop-doing-in-react-9e866df5d269
https://alligator.io/react/new-way-to-handle-events/
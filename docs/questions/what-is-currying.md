---
title: 'What is currying'
date: 03-28-2018
---

- "Partial applications" of a functiion's arguments
- Reduce functions of more than one argument to functions of one argument
- handy when you don't know all the parameters at the same time: currying allows you to store the partial result.

```js
var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  console.log(parameters);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};


var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};
var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi."
greetHello("Eddie"); //"Hello, Eddie."
```

## References

[https://www.sitepoint.com/currying-in-functional-javascript/](https://www.sitepoint.com/currying-in-functional-javascript/)
[https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400](https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400)
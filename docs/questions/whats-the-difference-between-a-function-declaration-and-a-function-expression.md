---
title: "What is the difference between a function declaration and a function expression"
date: 03-28-2018
---

## General


A function expression is only defined when its line is reached. So they're not available until the browser reaches them.

```js
sayHello() // sayHello is not a function
var sayHello = function() {
    return 'say hello';
}
```

A function declaration is available throughout a function's scope. They are loaded before the browser executes any code.

```js
sayHello(); // 'say hello'
function sayHello() {
    return 'say hello';
}

```

This means you cannot conditionally declare a function using a function declaration.


```js
sayHello(); // 'say hello';

if (condition) {
    function sayHello() {
        return 'say hello';
    }
}
```

## References

[https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function)
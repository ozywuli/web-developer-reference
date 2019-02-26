---
title: "Explain hoisting"
date: 03-28-2018
---

- Within a functional scope, all variable declarations are hoisted to the top, meaning variables can be used before their formal declaration.
- In other words, a variable declared anywhere in a function exists throughout the entire function and its value is undefined until it's assigned a value. Therefore, the best practice is to declare all variables at the top.


Phases
1. compile
2. execution

key ideas
- nothing is moving anywhere... function and variable declarations are added to memeory during the compile phase
- only declarations are hoisted (not initializations)
- function declarations are also hoisted
- declare variables at top!
- `var` is initialized with undefined
- `let` and `const` are not initialized with anything

## References

[https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)
[https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28](https://codeburst.io/javascript-what-is-hoisting-dfa84512dd28)
[https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1)
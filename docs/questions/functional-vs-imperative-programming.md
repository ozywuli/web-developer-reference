---
title: "Functional vs imperative programming"
date: 04-02-2019
---

## Functional
- tell the machine what you want done, then the machine figures it out
- write code in a declarative way, ie, __what__ code is doing instead of how to do it
- functions should be pure and have little to no side effects
- data should be immutable. data is changed by making copies
- avoid for loops
- use recursion to walk through data
- first class functions, higher order functions, and __composition__ of functions
- currying - partial application
- declarative programming: building logic without describing its flow
- reduces the need to manage state

Keywords
- immutable
- side effects
- higher order functions -> first class functions and function composition
- declarative programming -> WHAT
- recursion

e.g.

HTML, CSS
React events are inlined in the HTML
JS built in methods like map, reduce, and filter

## Imperative
- tell the machine the steps it needs to do to complete a job
- create statements that change program state
- mutate data
- side effects
- __how__ to achieve a result
- uses loops to walk through data
- classes and OOP

Keywords
- HOW
- for loops
- OOP and classes
- steps and statements
- mutate data

e.g.
for loop
attaching events and handlers explicity using methods

## References

[https://codeburst.io/from-imperative-to-functional-javascript-5dc9e16d9184](https://codeburst.io/from-imperative-to-functional-javascript-5dc9e16d9184)
[https://www.tutorialspoint.com/functional_programming/functional_programming_introduction.htm](https://www.tutorialspoint.com/functional_programming/functional_programming_introduction.htm)
[https://medium.com/front-end-weekly/imperative-versus-declarative-code-whats-the-difference-adc7dd6c8380](https://medium.com/front-end-weekly/imperative-versus-declarative-code-whats-the-difference-adc7dd6c8380)
[https://medium.com/front-end-weekly/8-steps-to-turn-imperative-javascript-class-to-a-functional-declarative-code-862964faf46c](https://medium.com/front-end-weekly/8-steps-to-turn-imperative-javascript-class-to-a-functional-declarative-code-862964faf46c)
[https://flaviocopes.com/javascript-functional-programming/](https://flaviocopes.com/javascript-functional-programming/)
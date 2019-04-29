---
title: 'What is Big O notation?'
date: 03-04-2019
---

Big O notation is a way to measure how long it takes an algorithm to run

Big O plots the time for an algorithm to run against the number of inputs on which the algorithm runs

## Chart

Runtime = y axis
Size = x axis

f(x) = x;

## Pronunciation

Big O N

Big O log

Big O n square

## Types

*O(1) - constant*

- object lookup (aka hasing or memoization)
- is integer even or odd?
- String.length
- write an element in an array
- splice() (if if the insertion is at the very end)
- insert an item in a linked list
- remove an item in a linked list
- append an item to the end of a linked list

*O(log n) - logarithmic*

- binary search
- divide and conquer
- looking up a number in a phone book
- either or choices but only one is chosen

[https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly](https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly)

*O(n log n) - linear logarithmic*

- sort then perform log

*O(n) - linear*

- single loop
- `toUpperCase()`
- `slice()`
- `splice()` (JS needs to copy and append everything after the inserted item unless the insertion is at the very end)
- `Set` remove duplicates
- find an item by index in a linked list

*O(n^2) - quadratic*

- selection sort

*O(2^n) - exponential*

- brute force matrix chain multiplication
- sort()

*O(n!) - n factorial*

- travelling salesperson


## Amortization


## JS Methods measured by Big O



## Other Pragmatic Performance considerstions

- Has JIT ran?
- are there other programs running?
- What's the hardware used?
- What's the browser used?

## References

<iframe width="560" height="315" src="https://www.youtube.com/embed/KatlvCFHPRo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[https://medium.com/@MarcHoag/three-days-ago-i-had-no-idea-what-things-like-big-o-or-sorting-algorithms-were-now-ill-teach-you-124432c00a96](https://medium.com/@MarcHoag/three-days-ago-i-had-no-idea-what-things-like-big-o-or-sorting-algorithms-were-now-ill-teach-you-124432c00a96)

[https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation](https://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation)

[http://bigocheatsheet.com/](http://bigocheatsheet.com/)

[https://stackoverflow.com/questions/11514308/big-o-of-javascript-arrays](https://stackoverflow.com/questions/11514308/big-o-of-javascript-arrays)

[https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)

[http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript/](http://blog.benoitvallon.com/sorting-algorithms-in-javascript/sorting-algorithms-in-javascript/)
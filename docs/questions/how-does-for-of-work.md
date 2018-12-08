---
title: 'How does for... of work?'
date: 03-28-2018
---

- Iterates and logs values that were defined to be iterated over
- Loops built-in String, Array, Array-like objects (arguments or NodeList), TypedArray, Map, Set, and user defiend iterables
- Won't work on objects, which not iterable

```js
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```


## References

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
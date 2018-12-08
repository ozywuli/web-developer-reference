---
title: "Can you give an example for destructuring an object or an array?"
date: 03-28-2018
---

Destructuring assignment makes it possible to unpack values from arrays or properties from objects into distinct variables.


```js
var numbers = [1, 2, 3];
[a, b, c] = numbers;
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
[a, b, ...rest] = letters;
console.log(a) // 'a'
console.log(b) // 'b'
console.log(rest) // ['c', 'd', 'e', 'f', 'g']

var cars = {
    ford: 'f150',
    honda: 'civic',
    bmw: '3 series',
    toyota: '4runner
}

{ a, b, ...rest } = cars;

console.log(a) // 'f150'
console.log(b) // 'civic'
console.log(..rest) // { bmw: '3 series', toyota: '4runner' }
```
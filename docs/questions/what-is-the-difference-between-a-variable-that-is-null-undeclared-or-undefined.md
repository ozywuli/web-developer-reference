---
title: "What's the difference between a variable that is: null, undefined or undeclared?
How would you go about checking for any of these states?"
date: 3-25-2018
---

## null

- `null` is actually a value and a type of object that can be set for a variable
- You can check for `null` values using an equality operator
  
```js
var a = null;
a === null // true
```

## undefined

- `undefined` is a variable that's been declared but hasn't been assigned a value
- `undefined` is its own type

```js
var a;
console.log(typeof a); // undefined
a === undefined // true
a == undefined // true
```

## Not falsy

- Neither `null` or `undefined` are not equal to the boolean value `false` but they are falsy values

```js
var a = null;
!a // true
a === false // false

var b;
!b // true
b == false // false
```
---
title: "Describe 3 different instances of function declarations"
date: 03-28-2018
---

# Difference between: function Person(){}, var person = Person(), and var person = new Person()?

```js
// create a constructor function using function declaration
function Person() {}

// assign the return value of Person() to the `person`
var person = Person();

// create an instance of Person
var person = new Person();
```


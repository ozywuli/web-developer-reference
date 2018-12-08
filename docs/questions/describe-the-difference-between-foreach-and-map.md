---
title: "Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?"
date: 3-25-2018
---

- `map` and `forEach` are built-in JS iterators. They provider a cleaner interface for creating loops for using the `for` keyword.

## map

- `map` iterates over an array and executes a callback for each element in the array. The function will then return a new array.

## forEach

- `forEach` also iterates over an array and executes a callback for each element in the array. But the function will not return a new array. This is useful when you just want to perform a loop without the overhead of returning a new array. This is useful, for example, for saving every item in an array to a database.


## The difference?

`map` and `forEach` can both be used to loop an array. You could use `map` in every instance where you'd use `forEach`, but it'd be more performant to use `forEach` if you can discard the transformed values.
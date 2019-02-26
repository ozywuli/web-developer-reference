---
title: "What is a closure, and how/why would you use one?"
date: 03-25-2018
---

Closures occurs when inner functions have access to the variables and parameters of an enclosing function.

Useful for:

- Hiding the implementation of functionality while still revealing the interface
- Private variables and functions
- Redux thunks - inner function receives a `dispatch` method as a parameter that can be used to update the store
- property initializer syntax - pass arguments to method
- component composition
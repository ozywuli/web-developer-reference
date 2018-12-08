---
title: 'What is super?'
date: 03-28-2018
---

- if you have a constructor in a subclass, you must have a constructor in the parent class, otherwise you short circuit the `this` value
- calling `super()` in subclass constructor gives that subclass access to the `this` value
- `this` is not initialized until `super()` is invoked
- In React, if you want to access props inside the constructor, you must pass props into `super()` to access `this.props`. This is because `props` gets assigned to the `this` value



## References

[https://jordankasper.com/understanding-super-in-javascript/](https://jordankasper.com/understanding-super-in-javascript/)
---
title: "Why are mixins bad?"
date: 03-28-2019
---

- indirection: not immediately clear whether a property belongs to a component or a mixin
- implicit dependencies: hard to refactor because one component might use the mixin differently than another component
- name clashes: properties and methods on a mixin can conflict with those on other mixins
- snowballing complexity?


One solution: HOC

- less magic than mixins. you can clearly see the data being passed into a child component

Problem with HOC

- complex to setup
- child component is highly coupled to the HOC
- huge render trees

Render Props

- reduces HOC hardcoded boilerplate by providing a render method that dynamically renders
- render prop is a function prop that a component uses to know what to render

Problem with Classes

- code related to a single behavior ends up scattered across many different lifecycle methods

## References

[https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html)
[https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
[https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c](https://itnext.io/why-reacts-hooks-api-is-a-game-changer-8731c2b0a8c)
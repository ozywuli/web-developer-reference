---
title: 'What is a functional component?'
date: 03-28-2018
---

**What is a functional component and how is it different from a class based component?**

### Class components

- Makes use of lifecycle methods
- Extends from the the React Component class
- templates rendered with a render method

Advantages

- Gives you more options with state and lifecycle methods


### Functional components

- Built with simple JS function
- Do not have internal state or lifecycle methods
- template is rendered with a simple return statement
  
Advantages

- Less bloat, simpler
- great for presentational components
- improved intellisense support since it's just a function
- easier to test because it's a pure function
- better performance because there's no state or lifecycle methods


## Refernces

[https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)
---
title: "What does setState do?"
date: 04-02-2019
---

- Don't modify or change React component state directly. React can't keep track of those state changes and rerender accordingly
- Treat state as immutable. `setState` don't mutate. it compares the old state and new state and returns a new state based on the differences
- creates a pending state transition, an async operation, that will eventually and always trigger a rerender
- unidirectinal data flow - setState is part of the component's lifecycle whereas changes applied through `this.state` can be overwritten or out of sync
- keep track of state changes
- `this.state` will not trigger rerenders

## References

[https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really](https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really)
[https://stackoverflow.com/questions/35867038/what-the-difference-of-this-state-and-this-setstate-in-reactjs](https://stackoverflow.com/questions/35867038/what-the-difference-of-this-state-and-this-setstate-in-reactjs)
---
title: 'What is super?'
date: 03-28-2018
---

- super is a reference to the parent prototype
- if you have a constructor in a subclass, you must have a constructor in the parent class, otherwise you short circuit the `this` value
- calling `super()` in subclass constructor gives that subclass access to the `this` value
- `this` is not initialized until `super()` is invoked
- In React, if you want to access props inside the constructor, you must pass props into `super()` to access `this.props`. This is because `props` gets assigned to the `this` value


<iframe height="265" style="width: 100%;" scrolling="no" title="js super" src="//codepen.io/ozywuli/embed/pGrwrG/?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ozywuli/pen/pGrwrG/'>js super</a> by ozywuli
  (<a href='https://codepen.io/ozywuli'>@ozywuli</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## References

[https://jordankasper.com/understanding-super-in-javascript/](https://jordankasper.com/understanding-super-in-javascript/)
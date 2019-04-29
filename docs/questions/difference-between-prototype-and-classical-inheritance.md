---
title: "How does prototypal inheritance differ from classical inheritance?"
date: 03-25-2018
---

Classical
- immutable
- may or may not support multiple inheritance
- verbose and complicated

Prototype
- flexible
- multiple inheritance
- only have objects and you just extend them

Classical inheritance

- Provides a blueprint, the whole kitchensink, for your child instances to inherit and/or extend
- two types of abstraction: classes and objects
- tight coupling of parent/child
- subclass, hierarchical clas, taxonomies

Prototypical inheritance

- the abstraction is object and only objects
- Provides a way to inherit only the properties you need from the prototypes of multiple objects, aka, multiple inheritance
- use compositions and concatenation to share object properties and methods freely
- use delegation to loop up properties and methods on instance prototypes

```js
const color = { color: 'red' };
const brand = { brand: 'ford' };

const Car = (options) => {
    return Object.assign({}, color, brand, options);
}

const Ford = Car({
    color: 'silver',
    brand: 'ford',
})
```

## References

[https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical](https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)
[http://aaditmshah.github.io/why-prototypal-inheritance-matters/](http://aaditmshah.github.io/why-prototypal-inheritance-matters/)
[https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical](https://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)
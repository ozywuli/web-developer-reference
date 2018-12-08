---
title: "How does prototypal inheritance work?"
date: 03-25-2018
---

- Every object has a prototype
- Objects inherit methods and properties from the prototype of other objects
- If you want instances of an constructor to inherit methods and properties, then you add them to the constructor's prototype
- When a method or property on an object is called, JS will attempt to find them on that object itself. If they're not found there, JS will look up parent objects all the way up to the Object object itself.
- The prototype is stored on the __proto__ property.
  
```js
var car = {
    type: 'truck'
}

var ford = {};
ford.__proto__ = car;

console.log(ford.type) // 'truck'
console.log(car.isPrototypeOf(ford)) // true
```
[https://jsfiddle.net/ozywuli/pLgu3j6h/](https://jsfiddle.net/ozywuli/pLgu3j6h/)

- Prototype properties are dynamic so anytime they're updated, the prototype chain lookup will find the new properties


```js
var car = {};

var honda = {};
honda.__proto__ = car;

car.kind = 'sedan';

console.log(honda.kind) // 'sedan'
```

- New or updated properties are assigned to the object, not to the prototype
```js
var car = {
    type: 'sedan'
}

var ford = {};
ford.__proto__ = car;

ford.type = 'truck';
console.log(ford.type) // 'truck'
console.log(car.type) // 'sedan'
```

- `__proto__` is not a well supported way of assigning objects to prototypes, so `Object.create` is used instead
```js
var car = {
    type: 'sedan'
}

var bmw = Object.create(car);

console.log(bmw.type) // 'sedan'
```

- `Object.create` also accepts a second argument that is specific properties for the Object, although you should know it's convoluted.
```js
var car = {
    type: 'sedan'
}

var bmw = Object.create(car, {color: {value: 'red'}})
console.log(bmw.color) // 'red'
```

- Use `Object.getPrototypeOf` to get an object's prototype
```js
var car = {};
var ford = Object.create(car);
console.log(Object.getProtoTypeOf(ford)); // car
```

## Constructor functions

- Constructors are the most common way to create prototype chains. The newly created object is called an **instance**

```js
function Car() {}

var ford = new Car();

console.log(ford instanceof Car); // true
```

- When using the **new** keyword, 'this' is a new object that is returned by the constructor and refers to the newly created instance

```js

function Car() {
    this.type = 'sedan';
}

var ford = new Car();
console.log(ford.type); // 'sedan'
```

- Behind the scenes, it looks like this

```js
function Car() {
    var this = {};

    this.__proto__ = Car.prototype;

    this.type = 'sedan';

    return this;
}
```

## The 'function prototype'

- All functions have a prototype, but this is different from __proto__.
- The function's prototype is a property of the `Function` object. Whereas `__proto__` is an internal property of an object that points to its prototype.
- The function prototype is used to establish the inheritance chain for instances created from the constructor, that is, any __proto__ of an instance points to the function prototype of the constructor.


# References

[http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)
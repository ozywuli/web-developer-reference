---
title: "How does \"this\" work in JavaScript?"
date: 03-25-18
---

`this` refers to an object and its value is determined by how a function is called. 

# Global 

If `this` is used outside a function, then `this` refers to the gobal object, which is `window` in browsers (whether in strict mode or not) or the global scope of a module in Node.

```js
// browser
console.log(this === window); // true

// node
console.log(this === global); // true
```

# Function

The value of `this` depends on how a function is called.

## Simple call

Inside a function not in strict mode, `this` refers to the global object.

```js
function whatIsThis() {
    return this;
}

// browser
whatIsThis() === window // true

// node
whatIsThis() === global // true
```

Inside a function in strict mode, `this` is undefined if its value isn't explicity set (more in this below)

```js
function whatIsThis() {
    return this;
}

// browser
whatIsThis() === undefined // true

// node
whatIsThis() === undefined // true
```

## call and apply

You can explicit set the `this` value inside a function by using the methods `call` and `apply`, which take an object as an argument.

```js
// sample object
var moose = {
    message: "I am this"
}

function whatIsThis() {
    return this;
}

whatIsThis() // `window` or `global`
whatIsThis().call(moose); // `this` now refers to the moose object
whatIsThis().apply(moose): // `this` also now refers to the moose object
```

In this case, both `call` and `apply` work exactly the same. You can look up the differences in another part of this guide.

## bind

`bind` is like `call` and `apply`, but `bind` creates a new function that's the same as the original function except that its `this` value is explicitly set. In other words, when you use `call` or `apply`, you immediately invoke the function with `this` already set. With `bind`, you create a new function with `this` set but the new function is not immediately invoked Furthermore you cannot use `bind` more than once on a function to set and reset the `this` value.

```js
function whatIsThis() {
    console.log(this.message);
}

let eagle = whatIsThis.bind({message: "I am an eagle"}) // set the `this` value`
eagle() // invokes the newly minted function, which will print the message "I am an eagle"

let falcon = whatIsThis.bind({message: "I am a falcon"}) // You cannot rebind the same function, which means no you are not a falcon. Instead this will print "I am an eagle"

```

## arrow functions

Inside an arrow function, the value of `this` is the same as the enclosing context, whether its the global context or the surrounding function context. If the arrow function exists in the global context, then `this` refers to the global object.

```js
// browser
let whatIsThis = () => { return this; }
whatIsThis() === window // true
```

Inside an arrow function, the value of `this` cannot be changed by `bind`, `call`, or `apply`.

```js
// inside a browser: 
var moose = {
    message: "I am a moose"
}
  
let whatIsThis = () => {
    return this;
}

console.log(whatIsThis.bind(moose)()) // not a moose but a window
console.log(whatIsThis.call(moose)) // not a moose but a window
console.log(whatIsThis.apply(moose)) // not a moose but a window
```

If an arrow function is defined inside other functions, the value of `this` is determined by the enclosing function.

```js
var moose = {
    whatIsThis: function() {
        // the value of `this` refers to the `moose` object
        // we define an arrow function inside of another function, so the arrow function refers to the `this` value of the `whatIsThis` function, which points to the `moose` object
        var x = (() => {
            return this;
        })
        return x;
    }
}

var whatIsThis = moose.whatIsThis();
console.log(whatIsThis()); // `moose`

// but if you reference the `moose.whatIsThis` method without invoking it, the `whatIsThis` method does not bind its `this` value based on the `moose` object context but rather on the global object. Therefore, the `this` value inside the arrow function refers to the global object as well. 

var whatIsthis = moose.whatIsThis;

console.log(whatIsThis()()); // window
```

## object method
Inside an object method, `this` refers to the object on which the method is defined.

```js
var moose = {
    whatIsThis: function() {
        return this;
    }
}

console.log(moose.whatIsThis()); // moose
```


## constructor

Inside a constructor function, the `this` value refers to the new instance of the constructor function.

```js
function Animal(species) {
    this.species = species;
}

var moose = new Animal('I am a moose');
console.log(moose.species); // 'I am a moose'
```

If you decide to return an object inside a constructor function, the value of `this` is then set to that return value.

```js
function Animal(species) {
    this.species = species;

    return {
        species: 'whoa'
    }
}

var moose = new Animal('I am a moose');
console.log(moose.species); // 'whoa'
```

## DOM event handler

Inside a callback function for an event handler, the `this` value refers to the element on which the event originated.

```js
document.querySelector('.anchor').addEventListener('click', function(event) {
    event.preventDefault();
    console.log(this); // .anchor
})
```

## inline event handler
When `this` is used in an inline event handler, the value of `this` refers to the element on which the listener is placed

```html
<button onclick="alert(this.tagName.toLowerCase());">
    Show this
</button>
```

# References

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
[https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/](https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
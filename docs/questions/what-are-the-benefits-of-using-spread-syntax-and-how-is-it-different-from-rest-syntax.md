---
title: "What are the benefits of using spread syntax and how is it different from rest syntax?"
date: 03-28-2018
---

## Arrays

`Spread` synax allows iterables to be expanded in places where one or more arguments are expected.

```js

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

sum(...numbers);

// this is the pre-ES6 way
sum.apply(null, numbers);

```

`Spread` also provides a succinct way to help create a new array by adding a new part to another one.


```js
var newBrands = ['tesla', 'BYD'];
var brands = ['ford', 'honda', ...newBrands, 'bmw']

```

It can copy arrays

```js
var arr1 = ['a', 'b', 'c'];
var arr2 = [...arr1] // like arr1.slice()
arr2.push('d')

console.log(arr1) // ['a', 'b', 'c']
console.log(arr2) // ['a', 'b', 'c', 'd']

```

It can concat arrays

https://codepen.io/ozywuli/pen/rrdREZ?editors=1010

## Objects

Copy or clone enumerable properties in objects

var obj1 = { name: 'oscar', age: 28 }
var obj2 = { name : 'ozy', age: 25 }

var cloneObj = { ...obj1 }
var mergedObj = { ...obj1, ...obj2 }


Merge objects


## Rest

- `Rest` is for destructuring. 
- It's the opposite of `spread`, which expands an array into its elements, whereas `rest` collects multiple elements and condenses them into a single element.
- You would use the spread operator as a parameter in a function
- arrays in rest parameters can be destructured
```js
function cars(...[a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

cars('ford', 'honda', 'bmw');
```
- difference between rest parameters and the arguments object
    - rest parameters are only the ones that haven't been given a separate name / arguments object contains all arguments passed into the function
    - rest is an array where as arguments is an object
    - arguments has methods for itself


# References

[https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6](https://stackoverflow.com/questions/33898512/spread-operator-vs-rest-parameter-in-es2015-es6)
[https://stackoverflow.com/questions/33898512/spread-syntax-vs-rest-parameter-in-es2015-es6](https://stackoverflow.com/questions/33898512/spread-syntax-vs-rest-parameter-in-es2015-es6)
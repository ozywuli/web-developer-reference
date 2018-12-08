---
title: '++someVariable Vs. someVariable++ in Javascript'
date: 03-28-2018
---


- ++x increments the value, then evaluates and stores it.
- x++ evaluates the value, then increments and stores it.
- Note that there are slight performance benefits to using ++x where possible, because you read the variable, modify it, then evaluate and store it. Versus the x++ operator where you read the value, evaluate it, modify it, then store it.


- When ++var or var++ form a complete statement (as in your examples) there is no difference between the two. For example the following

```js
let x = 0;
let y = 0;

for (let i = 0; i < 10; i++) {
    x++;
    ++y;
}

console.log(x); // 10
console.log(y); // 10
```

- However, when ++var or var++ are used as part of a larger statement, the two may not be equivalent. For example, the following assertion passes

```js
let array = ['a', 'b', 'c']

x = 0;
y = array[x++]; // This will get array[0]

console.log(y);

x = 0;
y = array[++x]; // This will get array[1]


console.log(y);
```


```js
var n = 0, m = 0;

alert(n++); /* Shows 0, then stores n = 1 */
alert(++m); /* Shows 1, then stores m = 1 */
```



## References

[https://stackoverflow.com/questions/6175316/the-difference-between-var-and-var](https://stackoverflow.com/questions/6175316/the-difference-between-var-and-var)
[https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript](https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript)
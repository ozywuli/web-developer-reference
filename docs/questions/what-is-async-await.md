---
title: 'What is async await?'
date: 03-28-2018
---

- The `async` keyword used before a function defines an asynchronous function that returns an `AsyncFunction` object. 
- `async` functions should always return a promise. If the return value is not a promise, then its value will be wrapped in a resolved promise

```js
async function f() {
    return 1;
}

f().then(alert) // 1

async function e() {
    return Promise.resolve(1)


e().then(alert) // 1
```

- An `async` function may contain an `await` expression that pauses the execution of the function and waits for the returb value from a resolved Promise function.
- `await` is ony valid within an `async` function

```js
async function a() {
    let wait = new Promise((resolve, reject) => {
    		window.setTimeout(() => {
            resolve(1);
        }, 5000);
    })

    let result = await wait;

    console.log(result); // 1
}

a();
```


- `async/await` allows you to write cleaner group of Promises that look more like synchronous code.
- `async/await` is good for running async operations in sequential or concurrent proccesses. Use `thens` for true parallel proccesses.


[https://jsfiddle.net/ozywuli/wac1g987/11/](https://jsfiddle.net/ozywuli/wac1g987/11/)

```js
var resolveAfter2Seconds = function() {
  console.log("starting slow promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(20);
      console.log("slow promise is done");
    }, 2000);
  });
};

var resolveAfter1Second = function() {
  console.log("starting fast promise");
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(10);
      console.log("fast promise is done");
    }, 1000);
  });
};
```

### Sequence

Sequential proccesses occur one after the other

```js
var sequentialStart = async function() {
  console.log('==SEQUENTIAL START==');

  // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
  const slow = await resolveAfter2Seconds();

  const fast = await resolveAfter1Second();
  console.log(slow);
  console.log(fast);
}
```

### Concurrent

Concurrent processes occur at the time but finish in sequence.

```js
var concurrentStart = async function() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second();

  console.log(await slow);
  console.log(await fast); // waits for slow to finish, even though fast is already done!
}

var stillConcurrent = function() {
  console.log('==CONCURRENT START with Promise.all==');
  Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]); // slow
    console.log(messages[1]); // fast
  });
}
```

### Parallel

Parallell proccesses occur at the time and complete independently of one another. Use `then` to run parallel proccesses.

```js
var parallel = function() {
  console.log('==PARALLEL with Promise.then==');
  resolveAfter2Seconds().then((message)=>console.log(message)); // in this case could be simply written as console.log(resolveAfter2Seconds());
  resolveAfter1Second().then((message)=>console.log(message));
}
```


### Error handling

```js

async function f() {
    try {
        let response = await fetch('http');
    } catch(err) {
        alert(err)
    }
}

f();

```


```js
async function f() {
    let response = await fetch('http://');
}

f().catch(alert);
```

```js
async function f() {
    throw new Error('whoops');
}
```

[https://jsfiddle.net/ozywuli/71Lrmk45/21/](https://jsfiddle.net/ozywuli/71Lrmk45/21/)

## References

[https://javascript.info/async-await](https://javascript.info/async-await)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
[https://stackoverflow.com/questions/1897993/what-is-the-difference-between-concurrent-programming-and-parallel-programming](https://stackoverflow.com/questions/1897993/what-is-the-difference-between-concurrent-programming-and-parallel-programming)
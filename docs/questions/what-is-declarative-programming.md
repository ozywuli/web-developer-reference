---
title: "What is declarative programming?"
date: 01-08-2019
---

## Qualities
- minimal to no side effects
- pure functions
- immutable data
- higher order functions
- what should be accomplished by describing a goal

Imperative -> how
Declarative -> what

- Instructions that tell you how to get to address. Imperative
- HTML that shows user address. Declarative

Attach event handlers

```js
// Imperative
document.querySelector('.button').addEventListener('click', function(event) {
    console.log('click')
})

// Declarative
function Button() {
    function handleClick() {
        console.log('click');
    }
    return (
        <button onClick={handleClick}>Click</button>
    )
}
```

Loop

```js
// Imperative
let arr = [1,2,3,4,5]
let sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// Declarative
let sum = arr.reduce((accumulator, item) => accumulator += item)
```


## References

[https://tylermcginnis.com/imperative-vs-declarative-programming/](https://tylermcginnis.com/imperative-vs-declarative-programming/)
[https://www.reddit.com/r/programming/comments/5lteo1/imperative_vs_declarative_programming/](https://www.reddit.com/r/programming/comments/5lteo1/imperative_vs_declarative_programming/)
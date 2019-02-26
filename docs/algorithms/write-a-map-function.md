---
title: "Write a custom map function"
date: 01-08-2019
---



```js
var evens = [2, 4, 6, 8, 10];

Array.prototype.customMap = function(fn) {
    let results = [];

    for (let i = 0; i < this.length; i++) {
        results.push(fn(this[i], i))
    }

    return results;
}

const odds = evens.customMap(item => {
    return item - 1;
})

console.log(odds);
```

<iframe width="100%" height="300" src="//jsfiddle.net/edubba/yL96an3w/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
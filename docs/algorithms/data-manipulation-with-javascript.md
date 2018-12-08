---
title: "Data Manipulation with JavaScript"
date: 12-07-2018
---

## Filter

Retrieve objects in an array of objects that don't exist in another array of objects.


```js
var all = [
  {
    "id": 1,
    "published": true
  },
  {
    "id": 2,
    "published": true
  },
  {
    "id": 3,
    "published": false
  },
  {
    "id": 4,
    "published": false
  }
]

var selected = [
  {
    "id": 2,
    "published": true
  },
  {
    "id": 4,
    "published": false
  }
]
```

### Solution 1

```js
let filtered = [];

all.forEach(aItem => {
	if (!selected.some(sItem => aItem.id === sItem.id )) {
  	filtered.push(aItem);
  }
})

console.log(filtered);
```

[https://codepen.io/ozywuli/pen/VqZBQr](https://codepen.io/ozywuli/pen/VqZBQr)


### Solution 2

```js
let filtered = all.filter(aItem => {
   return selected.every(sItem => {
      return aItem.id !== sItem.id;
   })
})

console.log(filtered);
```

[https://codepen.io/ozywuli/pen/KbPBBP](https://codepen.io/ozywuli/pen/KbPBBP)
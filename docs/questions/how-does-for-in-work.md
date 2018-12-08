---
title: 'How does for... in work?'
date: 03-28-2018
---

- Iterates over all non-Symbol, enumberable properties of an object
- Note that it iterates in an arbitrary order, that is, not in sequence

```js
var brands = {
    "ford": "automotive",
    "honda": "automotive",
    "microsoft": "technology"
}

for (let brand in brands) {
    console.log(brand) // ford, honda, microsoft
}

```
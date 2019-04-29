---
title: "Masks"
date: 04-02-2019
---

```js
const mask = (str, maskChar = "#") =>
  str.slice(-4).padStart(str.length, maskChar)
```
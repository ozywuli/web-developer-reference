---
title: "Difference between slice and substring"
date: 03-12-2019
---

```js
slice(start, stop)
substring(start, stop)
```

Common
- if start === stop, return empty string
- if stop omitted, extract start to end
- if stop > string length, use string length for stop value

Substring
- if start > stop, swap arguments
- if either start or stop are negative or NaN, treat them as 0

Slice
- if start > stop, return empty string
- if start < 0, treat it as string.length + start
- if stop < 0, treat it as string.length + start


## References

[https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring](https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring)
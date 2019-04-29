---
title: "Arrays"
date: 03-12-2019
---

Useful methods
- sort
- reverse
- slice
- splice
- substring

Good for
- indexing (pushing) - O(1)

Bad for
- inserting - O(n)
- deleting (not popping) - O(n)
- searching - O(n) or O(log n)

Characteristics
- Begins at index 0
- Last item is array size - 1
- Grows dynamically


Iterators
- for loop
- while (number of iterations not determined)
- do while (loop at least once)
- for in (get keys)
- for of (get values)
- entries() - keys and values
- `break` break out of loop
- `continue` skip over a iteration
- `generation` functions offer the most control while looping

Native iterators
- indexOf
- lastIndexOf
- includes
- fill
- join

Native iterators with callbacks
- findIndex
- find
- filter
- forEach
- map
- some
- every
- reduce
---
title: 'Writing Good Tests'
date: 01-14-2019
---

- Write explicit, descriptive, concise names for tests
- one concern, one test. write one `expect` in a `it` statement
- Write shared initialized in one place. Oftentimes they are placed in the `beforeEach` hook
- Create stateless mock environment for testing. Don't hit the real DB because we don't want to modify external resources.
- Avoid logic in tests: don't write loops and conditions


## Unit tests
- they should be orthogonal or independent to any other tests

## Related

[/types-of-tests](/types-of-tests)

## References

[https://medium.com/@yahelyechieli/5-tips-for-writing-great-javascript-unit-tests-86296ad2d997](https://medium.com/@yahelyechieli/5-tips-for-writing-great-javascript-unit-tests-86296ad2d997)
[http://www.agitar.com/downloads/TheWayOfTestivus.pdf](http://www.agitar.com/downloads/TheWayOfTestivus.pdf)
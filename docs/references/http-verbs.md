---
title: "HTTP Verbs"
date: 04-02-2019
---

Get
- get a resource

Delete
- delete a resource

Post
- creates a new resource
- not idempotent

Put
- updates a resource by completely replacing it
- idempotent

Patch
- updates a resource by updating only the fields passed in
- not idempotent

Head
- make sure a resource exists and is retrievable
- good for sending test requests

Options
- get full options for accessing resources


## References

[https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)
[https://www.restapitutorial.com/lessons/httpmethods.html](https://www.restapitutorial.com/lessons/httpmethods.html)
[https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD)
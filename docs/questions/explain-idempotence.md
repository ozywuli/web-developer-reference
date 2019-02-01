---
title: "Explain idempotence"
date: 01-12-2019
---

- Repeated calls to the server produce the same result
- Making multiple calls should result in the same mutation as making a single request
- Response from the server might not be the same (the resource changed between requests)
- PUT and DELETE

Difference between PUT and POST
- PUT is idempotent whereas POST is not
- PUT completely overwrites a resource at a particular KNOWN URL
- POST creates a resource at an unspecified URL
- Rule of thumb if to use PUT to update a resource and POST to create a resource

Difference beetween PUT and PATCH
- PATCH is not idempotent
- PATCH can update part of resources

## References

[https://stackoverflow.com/questions/630453/put-vs-post-in-rest](https://stackoverflow.com/questions/630453/put-vs-post-in-rest)
[https://restfulapi.net/rest-put-vs-post/](https://restfulapi.net/rest-put-vs-post/)
[https://stackoverflow.com/questions/21660791/what-is-the-main-difference-between-patch-and-put-request](https://stackoverflow.com/questions/21660791/what-is-the-main-difference-between-patch-and-put-request)
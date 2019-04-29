---
title: "What is middleware?"
date: 04-02-2019
---

- Code that sits between different parts of an application
- A simple mental model that is a pipe

## Express
- middleware functions with access to req and res objects
- execute code to make changes to the req and res objects
- end the req/res cycle
- or call the next middleware function
- types
  - application level
  - router level
  - error handling
  - built-in
    - express.static
    - express.json
    - exprses.urlencoded
  - 3rd party

## References

[https://stackoverflow.com/questions/2904854/what-is-middleware-exactly](https://stackoverflow.com/questions/2904854/what-is-middleware-exactly)
[https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)
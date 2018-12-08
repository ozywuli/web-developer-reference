---
title: 'What is the event loop?'
date: 03-28-2018
---

## What is event loop? What is the difference between call stack and task queue?

- The concurrency model is the event loop
- it creates two queues: one for asynchronous functions, and the other for temporal functions.
- function calls form a **stack** of frames
    - function calls are by stacking from the bottom
    - functions in the stack are executed from top to bottom and removed along the way
- Objects are allocated in a **heap**, which is mostly unstructured region of memory
- JS runtimes uses a message **queue**
- The event loop model never blocks
- qualities of the JS event loop
    - single threaded
    - non-blocking
    - asynchronous
    - concurrent
- properties
    - Web APIS (DOM, setTimeout, XMLHttpRequest),
    - call stack: one thread == one call sack == one thing at a time
    - callback queue
    - heap
- code that runs slowly are "blocking"
- browser can't do anything when something's blocked or stuck
- async callbacks are non-blocking
- JS runtime does one thing at a time but the browser is more than just the JS runtime, which means the browser can do things concurrently
- the **task queue** is where async operations push their calls to be processed
- the event loop looks at the stack and the task queue... if the stack is empty, it takes the first thing on the queue and pushes it onto the stack
- setTimeout time is not the time until execution, it's the minimum time until execution depending on how much many other messages have been queued

<iframe width="560" height="315" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## References

[http://latentflip.com/loupe/](http://latentflip.com/loupe/)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
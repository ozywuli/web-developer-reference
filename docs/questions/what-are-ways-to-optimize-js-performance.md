---
title: "What are ways you can optimize JS performance?"
date: 03-25-18
---

- Lazy load JS to defer the execution of code until it's needed
- Use code-splitting to break up your code into logical chunks that can then be loaded on demand (lazy loading)
- During your build, minify JS to reduce its file size
- Use gzip to compress JS file size even further
- Use the `debounce` method to temper the number of times code is executed. For example,  when a user resizes the window, the `window.resize` method can fire dozens of events per second and cause website jankiness. But using the debounce method with a window resize callback ensures that it only fires once *n* milliseconds after the event stops.
- The `throttle` method limits the event execution rate to a fixed time interval. In other words, it will execute an event at most once every *n* milliseconds.
- Keep DOM manipulation to a minimum, which can be inefficient because updates to one part of the DOM can affect another part. Use the VDOM whenever possible to diff changes and update only parts of the DOM that change.
- Cache values that are repeatedly used. For example if you access a selector `$('.nav')` throughout your code, then you should store the selector in a variable.
- Do as much code execution as possible outside loops. For example, you can store the length of an array in a variable instead of reading its length during every iteration.
- Keep your code DRY (Don't repeat yourself). If you find yourself writing the same block of code over and over again, then maybe it's time to modularize that code and make it reusable. This can help reduce file size of your JS.


# References
[https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/)
[http://www.monitis.com/blog/8-tips-for-improving-your-javascript-performance/](http://www.monitis.com/blog/8-tips-for-improving-your-javascript-performance/)
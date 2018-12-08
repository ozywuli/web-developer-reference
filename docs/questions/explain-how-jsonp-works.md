---
title: "Explain how JSONP works (and how it's not really Ajax)."
date: 03-28-2018
---

You can't normally make ajax requests to a domain that's different from yours. It's a big nono in browserland. What you can do however is if the server you make a request from has JSONP enabled, you can send a callback function with your request. That way, it can send data back with your callback that's executed. Boom, you've got a cross domain request.

It's not really ajax because you are using script tags to load data from another server

# References

[https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about)
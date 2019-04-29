---
title: "What is a CSRF attack?"
date: 03-28-2018
---

Cross Site Reequest Forgery "C-SURF"

What?

- usually exploits form POST methods and cookie-based authentication
- hacker places a malicious form on their website that makes a POST request to a trusted website
- an unsuspecting user with sessions stored for the trusted website will fill out the malicious form. this will use the user's cookies to send information on their behalf

Prevention
- when user's browser gets page from the server, it also receives a CSRF token. so when the user performs a POST request, the browser will also send along the CSRF token in the body or the HTTP header (X-CSRF-Token) that the server will use to identify the user
- hackers cannot access this CSRF token through their malicious form

## References

[https://www.twilio.com/blog/2018/01/protect-your-node-js-app-from-cross-site-request-forgery.html](https://www.twilio.com/blog/2018/01/protect-your-node-js-app-from-cross-site-request-forgery.html)
[http://csrf-attack.glitch.me/](http://csrf-attack.glitch.me/)
[https://medium.com/@l4mp1/difference-between-xss-and-csrf-attacks-ff29e5abcd33](https://medium.com/@l4mp1/difference-between-xss-and-csrf-attacks-ff29e5abcd33)
[https://github.com/pillarjs/understanding-csrf](https://github.com/pillarjs/understanding-csrf)
---
title: "What is a XSS attack?"
date: 03-28-2018
---

cross-site scripting

What?
- hacker injects JS into a trusted website's database
- user executes the compromised JS which can let the hacker steal the user's session cookies
- 3 types
    1. Stored
       - malicious script in inserted through insecured input and stored in DB
       - executed when user visits a compromised page
       - user can execute a script that sends cookies to the hacker's website
    2. Reflected
       - hacker sends user a compormised query param link. when user clicks on it, the trusted website will execute the malicious script
    3. DOM XSS

How?
- hacker injects JS into a website's db through insecured inputs
- hacker creates a link with JS embedded in query params for victims to click

Prevention
- sanitize all inputs

## References

[https://www.reddit.com/r/AskNetsec/comments/4tga5c/i_cant_understand_dom_xss/](https://www.reddit.com/r/AskNetsec/comments/4tga5c/i_cant_understand_dom_xss/)
[https://medium.com/@l4mp1/difference-between-xss-and-csrf-attacks-ff29e5abcd33](https://medium.com/@l4mp1/difference-between-xss-and-csrf-attacks-ff29e5abcd33)
[https://www.netsparker.com/blog/web-security/cross-site-scripting-xss/](https://www.netsparker.com/blog/web-security/cross-site-scripting-xss/)
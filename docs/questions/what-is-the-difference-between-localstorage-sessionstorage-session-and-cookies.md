---
title: "What is the difference between localStorage, sessionStorage, session, and cookies?"
date: 03-28-2018
---

`localStorage` and `sessionStorage` are WebStorages, features of HTML5.

## localStorage

`localStorage` stores information as long as the user does not delete them

not available to the server

## sessionStorage

`sessionStorage` stores information as long as the session goes, usually until the user closes the tab/browser.

## cookies

- Cookies allow you to store small amount of data (4KB) on the client that can persist between pages, browser closes, and computer shutdowns.
- offers temporary persistance
- given to the browser by the server, and allows the server to continue a conversation
- 
- cookies can be deleted by the users
- cookies consists of
    - key (name)
    - value (id)
    - expiration date
    - domain
    - headers


## sessions


## References

[https://www.reddit.com/r/webdev/comments/3c9mtg/eli5_how_are_cookies_and_sessions_used_for_logged/](https://www.reddit.com/r/webdev/comments/3c9mtg/eli5_how_are_cookies_and_sessions_used_for_logged/)
[https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)
[https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)
[https://stackoverflow.com/questions/16855680/are-there-any-drawbacks-to-using-localstorage-instead-of-cookies](https://stackoverflow.com/questions/16855680/are-there-any-drawbacks-to-using-localstorage-instead-of-cookies)
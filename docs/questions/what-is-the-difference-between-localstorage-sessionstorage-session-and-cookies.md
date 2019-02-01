---
title: "What is the difference between localStorage, sessionStorage, session, and cookies?"
date: 03-28-2018
---

`localStorage` and `sessionStorage` are WebStorages, features of HTML5.

## localStorage

- `localStorage` stores information until user clears browser cache or the web app clears it
- 10mb of data
- stored in the client's browser, not available to the server
- good for things like night mode

## sessionStorage

- same API as localStorage
- `sessionStorage` stores information as long as the session goes, usually until the user closes the tab/browser.
- 

## cookies

- Cookies allow you to store small amount of data (4KB) on the client that can persist between pages, browser closes, and computer shutdowns.
- offers temporary persistance
- given to the browser by the server, and allows the server to continue a conversation
- sent to the server with every page refresh so that the server can identify the user
- cookies can be deleted by the users
- encrypted by a secret that only the server can decrypt
- cookies consists of
    - key (name)
    - value (id)
    - expiration date
    - domain
    - headers


## sessions

- HTTPS is a stateless protocol, but sessions and cookies allow websites to persist state between page visits
- data stored on the server
- when a user visits a website, the server sends a cookie to the user. this cookie has an ID which can then be associated with a session on the server

## References

[https://alligator.io/js/introduction-localstorage-sessionstorage/](https://alligator.io/js/introduction-localstorage-sessionstorage/)

[https://stackoverflow.com/questions/6339783/what-is-the-difference-between-sessions-and-cookies-in-php](https://stackoverflow.com/questions/6339783/what-is-the-difference-between-sessions-and-cookies-in-php)
[https://www.reddit.com/r/webdev/comments/3c9mtg/eli5_how_are_cookies_and_sessions_used_for_logged/](https://www.reddit.com/r/webdev/comments/3c9mtg/eli5_how_are_cookies_and_sessions_used_for_logged/)
[https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/](https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/)
[https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies)
[https://stackoverflow.com/questions/16855680/are-there-any-drawbacks-to-using-localstorage-instead-of-cookies](https://stackoverflow.com/questions/16855680/are-there-any-drawbacks-to-using-localstorage-instead-of-cookies)
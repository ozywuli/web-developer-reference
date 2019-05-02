---
title: Useful Regex
date: 29-04-2019
---

Find words in a class or any HTML attribute  by regex

[https://stackoverflow.com/questions/22298358/find-class-name-by-regex](https://stackoverflow.com/questions/22298358/find-class-name-by-regex)

```
class=/(.*[\s+\"\']btn[\s+\"\'].*)/g
```

Find CSS Comments

[https://projects.lukehaas.me/regexhub/](https://projects.lukehaas.me/regexhub/)
```
/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//
```
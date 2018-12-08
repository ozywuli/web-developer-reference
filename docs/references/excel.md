---
title: 'Excel snippets'
date: 03-28-2018
---


Trim leading and trailing spaces including problematic characters like non-breaking spaces.

```
=TRIM(CLEAN(SUBSTITUTE(B1,CHAR(160)," ")))
```

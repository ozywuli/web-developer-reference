---
title: 'How does Linux $PATH work'
date: 04-14-2019
---

- typing a command is just telling Linux to run a program
- commands like `ls`, `cd`, `mkdir`, and `rm` are just executable programs that live in `/usr/bin`
- programs usually live in `/usr/bin` but they can live anywhere. so how does Linux know where to find the right program to run? You add a directory path to the $PATH variable

What does the $PATH variable look like?

```
export PATH=$PATH:/place/with/the/fiel
```

You can also add additional paths by prepending them with a `;` to separate each directory path.

But in order to save the $PATH, you need to add it through the `.bashrc` or `.bash_profile` files, but this may be different depending on which shell you run.

## References

[https://opensource.com/article/17/6/set-path-linux](https://opensource.com/article/17/6/set-path-linux)
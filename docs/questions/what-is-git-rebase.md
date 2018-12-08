---
title: 'What is git rebase?'
date: 03-28-2018
---

- `git rebase` is one of two primary ways you can integrate changes from one branch onto another. The other is `git merge`
- `git merge` is forward moving, that is, it keeps track of integrated changes as a merge commit
- `git rebase` has rewriting features that help keep logs "clean" and keep a linear project history
- why would you want a clean project history?
    - easier to reason about project history
    - allows `git bisect` to more quickly identify when a bug was introduced
- common way to integrate upstream changes into your local, downstream repository
- `git rebase` will take commits in your working branch and apply them to the head of the passed branch
- `git rebase --i` opens an interactive console that allows you rewrite history

- features
    - pick a commit
    - reword a commit
    - edit a commit (change both the message and the content)
    - squash commit
    - fixup
    - exec
    - drop (remove commit)


## References

[https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
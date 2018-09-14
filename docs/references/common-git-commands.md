---
title: Git commands
date: 03-25-2018
---

# My most commonly used git commands

Initialize a git repository in a directory

```bash
git init
```

Track new files by adding them to the staging area (files that are ready to be committed)
```bash
git add README.md # tracks a single file
git add -A # track all modified files
```

Check the status of files

```bash
git status
```

Commit files in the staging area, that is, add logs for tracked files

```bash
git commit -m "add README" # commit with a message
```

Remove file(s) and/or folder(s) from staging

```bash
git reset HEAD README.md # remove a single file or folder from staging
git reset HEAD . # from every file and folder from staging
git reset --hard # remove all staged and unstaged files
git checkout -- . # remove all staged and unstaged files in the working directory
```bash


Remove stray file(s) and/or folder(s) after they've been committed

```bash
git rm --cached README.md # remove a single file
git rm -r --cached sample-directory # remove directory and its content
```

Read logs

```bash
git log
```

Push your changes to a remote branch

```bash
git push # if default remote has been set
git push <remote> <branch> # if default remote has not been set
```

## Stashes

Stash your changes

```bash
git stash
git stash push -m "stash README.md" # create a stash log with a comment
```

Grab your latest stash

```bash
git stash apply
```

List all stashes

```bash
git stash list
```

Get a specific stash

```bash
git stash apply stash@{3}
```

Drop the latest stash

```bash
git stash drop
```

Drop a specific stash

```bash
git stash drop stash@{2}
```

Clear all stashes

```bash
git stash clear
```

## Checkouts

Create and switch to a new branch

```bash
git checkout -b "feat-hover"
```


## Remotes

List remotes

```bash
git remote
```

Add remote

```bash
git remote add origin <url>
```


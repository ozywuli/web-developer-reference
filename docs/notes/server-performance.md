---
title: "Server Performance"
date: 04-02-2019
---

## gzip compression

- do gzip compression with reverse proxy for high traffic websites

## Don't use synchronous functions

- use async in place of sync
- use `--trace-sync-io` to track sync functions

## Log correctly

Disable logs in production

## Handle exceptions properly

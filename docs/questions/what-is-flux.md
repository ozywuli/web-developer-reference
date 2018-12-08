---
title: 'What is flux?'
date: 03-28-2018
---

- Flux is an architecture for unidirectional or one-way data flow. 
- If any data needs to be updated, the flow starts all over from the beginning. 
- This solves the issue of multiple models updating multiple views at the same time.

Actions -> dispatchers -> store -> view

## Action creator

- the "telegraph operator"
- creates an action with a type and a payload
- types are usually constants stored in a single file. this is helpful not only because it keeps things organize but also allows you to look over all the possible state changes in the codebase
- actions can be asynchronous

## Dispatcher

- mutaters, reducers
- updates stores synchronously
- subscribes to actions
- filters out what it cares about

## Store

- a global singleton that holds the state of the application
- to change its state, you must follow proper procedure
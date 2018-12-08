---
title: 'What is redux?'
date: 03-28-2018
---

## Actions

Actioins return a plain JS object that describes **what happened**

```js
export const changeName = () => {
    return {
        type: CHANGE_NAME,
        payload: {
            name: 'ozy'
        }
    }
}
```

This allows us to keep track of what's happening. Actions are like breadcrumbs.

## Reducers

Reducers take state and action as arguments and returns the next state of the app. The reducer **updates the app**

```js
export default function(state = {}, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name
            }
    }
}
```

## Store

- there is a single store, a single source of truth
- holds the entire app state

The store:
    - holds application state
    - allows access to state via `getState()`
    - allows state to be updated via `dispatch(action)`
    - registers listeners via `subscribe(listener)`
    - unregisters listeners



## Provider

## Concepts

### Smart component

### Dumb component

## Three Princples
- single source of truth
- read-only state
- make changes with pure functions

## References

[https://www.youtube.com/watch?v=1w-oQ-i1XB8](https://www.youtube.com/watch?v=1w-oQ-i1XB8)
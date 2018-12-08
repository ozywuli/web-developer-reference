---
title: "Describe each of the lifecycle methods in React"
date: 03-28-2018
---

## render()

- the only required method in a class component
- it should be pure, meaning that it should not modify component state
- returns 
    - React elements
    - arrays and fragments, which return multiple elements without superfluous nodes `<React.Fragment>`
    - portals, allows you to insert DOM elements outside of the nearest parent node, that is, somewhere else
        ```js
        render() {
            return ReactDOM.createPortal(
                this.props.children,
                domNode
            )
        }
        ```
    - string and numbers, that is, text nodes
    - Booleans or null, which render nothing

## constructor()

- called before the component is mounted
- call super(props) before anything else (otherwise `this.props` will be undefined)
- initializes state
- bind methods
- do not call `setState` in the constructor (use this.state instead)


## componentDidUpdate(prevProps, prevState, snapshot)

- updates whenever props change
- not called in the initial render
- operate on the DOM when the component has been updated
- good place to do network requests (but first check current props with previous props first to make sure something changed)
- dont copy props into state

```js
componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
        this.fetchData(this.props.userID);
    }
}
```

- a 3rd parameter `snapShot` is passed if `getSnapshotBeforeUpdate()` is invoked
- will not be invoked if `shouldComponentUpdate()` returns false


## componentWillUnmount()

- invoked right before a component is unmounted and destroyed
- perform any cleanups here
    - invalidate timers
    - cancel network requests
    - cleanup subscriptions created in `componentDidMount()`
- do not call `setState` here

## shouldComponentUpdate(nextProps, nextSate)

- invoked before new props or state are received
- not called during initial render or when forceUpdate() is used
- returns true by default
- return false to skip a render
    - `UNSAFE_componentWillUpdate()`, `render()`, and `componentDidUpdate()` will not be invoked
- this is used mainly for performance optimization
- consider using `PureComponent` instead of manually invoking this function

# Rare

## static getDerivedStateFromProps(props, state)

- invoked before calling the render method, both on the initial mount and subsequent updates
- fires on every render
- doesn't have access to the component instance (so you can't access `this`)
- returns an object to update the state
- useful for when state depends on changes in props over time, such as whether to animate an element in or out

## getSnapshotBeforeUpdate(prevProps, prevState)

- invoked before any rendered output is committed to the DOM
- lets you capture info from the DOM like the scroll position before it's changed
- any return value is passed as a paramter to the `componentDidUpdate()`


## componentDidCatch(error, info)

- catch errors in their child component tree, log those errors, and display a fallback UI instead of the component that crashed
- catch errors in components below them
- display a fallback UI when calling `setState()`

# Legacy

## UNSAFE_componentWillMount()

- invoked just before mounting occurs
- called before `render()`
- calling `setState` will not trigger a rerender
- only lifecycle hook called on server rendering
- can be replaced by `componentDidMount`

## UNSAFE_componentWillReceiveProps(nextProps)

- invoked before a mounted component receives new props
- not invoked by initial props during mounting
- will not be triggered by `setState()`

- use `componentDidUpdate` to perform a side effect
- use a memoization helper instead for rec-computing data when prop changes
- use fully controlled or uncontrolled with a key components to reset state when prop changes
- use `getDerivedStateFromProps` as the replacement

## UNSAFE_componentWillUpdate(nextProps, nextState)



# Methods

- invoked before new props and state are received
- can be replaced by `componentDidUpdate()`

## setState(update[, callback])

- doesn't immediately update state.. rather it may batch or defer updates until later for performance
- read updated state in `componentDidUpdate()` or in `setState()` callback

```js
this.setState({
    name: 'oscar'
})
```

```js
this.setState((state, props) => {
    return { counter: state.counter + props.step }
})
```

## forceUpdate()

- force a render without the need to update state or props
- skips `shouldComponentUpdate()`
- try to avoid if possible
---
title: "How do to connect React to Redux"
date: 04-02-2019
---


How to set up Redux for the first time.

The hardest thing about Redux is not its concept but the initial setup and all the boilerplate code. It can be difficult to keep all the moving parts in your head.

## Step 1 - Installation

Download Redux. But this is not enough. In order to use Redux with React, you must also install a binding that links Redux with React. This package is called "React-Redux", which will allow React components to access the Redux store.

```bash
npm i --save redux react-redux
```

You may want to install redux-devtools as well.

```bash
npm i --save redux-devtools
```

## Step 2 - Create Actions

```bash
mkdir actions
touch types.js
touch uiActions.js
```

## Step 3 - Create Reducers

```bash
mkdir reducers
touch index.js
touch uiReducer.js
```

Import all reducers in `index.js` and then use react-redux's `combineReducer` helper to merge all of them into a single reducer

## Step 4 - Create the global store

In the topmost level of your app where you render the React app, import the `createStore` helper from redux and the primary reducer file. Then create the global store from the reducer.

```js
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
```

## Step 5 - Hook up the global store with the Provider HOC

React-redux provides a wrapper component called `Provider` with a prop that links the global store to your React app

```js
import Provider from 'react-redux';

<Provider store={store}>
    <App />
</Provider>
```

## Step 6 - Make a Container/Smart component

Container components link Redux store data with a parent component who then passes props down to child components.

Import the `connect` helper from redux, which will be used to connect props and actions with a component.

```js
import { connect } from 'redux';
import { navbar } from 'navbar';

const mapStateToProps = state => ({
    isMenuVisible: state.ui.isMenuVisible
});

const mapDispatchToProps = dispatch => ({
    toggleMenu,
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(navbar);
```

You can optionally automatically bind dispatches to actions as well using redux's `bindActionCreators` helper

```js
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({toggleMenu}, dispatch)
});
```
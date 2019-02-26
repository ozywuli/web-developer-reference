---
title: "What are the strengths and weaknesses of each js framework?"
date: 01-08-2019
---


## Ember

Strengths

- handlebars (easily testable)
- batteries included:
  - includes router,
  - data layer,
  - ajax library (jquery),
  - cli tool (generators),
  - build and development tool (broccoli)
    - es6 support out of the box
    - loads of plugins that are simple to integrate
  - global data with services
  - qunit testing framework
  - initializer infrastructure  (application and instance initializers)
- strong conventions that make it easy for developers to onboard
- Stable and offers an upgrade path

Weaknesses
- dated or unsuitable patterns (controllers) [https://guides.emberjs.com/release/controllers/](https://guides.emberjs.com/release/controllers/)
  - paired with a route which sends model data
  - controller decoreates the model data with new attributes or actions
    - create a boolean value for a prop (isExpanded)
    - toggle the boolean value of a prop (toggleIsExpanded)
    - handle computed properties that depend on the model hook
    - handles query parameters
- Can't import 3rd party packages. They must first be wrapped in an ember addon or the import statement has to augmented by an addon
- Slow to adopt new patterns and features used by the rest of the JS community
- rigid folder strucutre

### References
[https://blog.kollegorna.se/3-years-of-ember-6-months-of-react-34ce909a5ce1](https://blog.kollegorna.se/3-years-of-ember-6-months-of-react-34ce909a5ce1)


## React

Strengths
- On the cutting edge of JS template rendering performance and front end code organization
- Adopted by the wider community
- JSX makes it so you dont need an overcomplicated DSL layer over your templates
- Layouts as a function of your data is a very satisfying mental model (but maybe not always practical)
- functional patterns make it easy to reuse code
- flexible. sometimes you want to be creative or solve a problem that's unique to your problem space

Weaknesses
- Just the view layer
- No router or state management built in
- No official build tool
- Everything is a component even routes
  - routes should have different hooks
  - handling url params, loading/error states, redirects, route authorization, different lifecycles, when they fire...
- JSX makes it harder to separate views from rendering code
- functional and OO pattern mixed together (but hooks may fix this)

## Vue

Strengths
- Strong documentation (although Ember and React documentation is also really good)
- Provides more out of the box than React (Vue router and Vuex)
- Single file components keep related html, css, and js tidy

Weaknesses
- Vue templates are hard to reason about and more difficult to read (v- symbols). more complicated than handlebars
- Developed by a single person (what happens if that person is gone?)
- Doesn't provide as much features as Ember, not as cutting edge as React
- single file components can get pretty big (maybe a better pattern would be pods where related html, css, and js files are placed in a single folder)


### References

[https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)
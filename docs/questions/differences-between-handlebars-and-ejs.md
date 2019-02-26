---
title: "What are the differences between Handlebars and EJS"
date: 01-08-2019
---

Handlesbar

- provides pretty much all the features you might need for writing templates
  - layouts
    - block placeholders (contentFor hooks)
    - partials
    - built in helpers (if, each ...)
    - inheritance
  - common helpers like for loops and if statements
- easy way to register new helpers. this consolidation also makes it easier to test

Weaknesses
- An extra DSL layer over your templates
- You might end up writing a lot of helpers depending on the complexity of your templates
- passing values to nested templates become difficult to reason about


[https://github.com/barc/express-hbs](https://github.com/barc/express-hbs)

EJS
- Use plain JS in your templates
- simple to learn but very powerful because you can easily leverage all the features of JS
- Extremely flexible
- easy to pass data around
- easy to extend

Weaknesses
- Barebones. You have to reinvent layouts, block placeholders, partials, inheritance...
- All the JS in your templates can get messy really quick
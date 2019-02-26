[](---
title: "What strategies do you use to scale CSS?"
date: 01-08-2019
---

## Overall goals
- keep nesting to a minimal and keep styles as flat as possible (makes it easier to override styles)
- modularize your css by dividing one big file into many smaller ones
- keep dry and reuse styles where possible
- create namespaces for your styles to keep classes from fighting each other

## BEM

Block
- standalone entity that's meaningful on its
- e.g. button, navbar, menu

Element
- can't stand on its own and is tied to its block
- e.g. button icon, navbar links, menu links

Modifier
- Properties on a block or element, usually to indicate state
- e.g. active, disabled, visible


## Trello

Similar to BEM but no underscores...


## SASS
- variables, mixins, and extends let you reuse styles
- simple loops and conditionals

## PostCSS
- autoprefixer
- use future CSS features like variables


## Refereces

[https://medium.com/front-end-developers/css-modules-solving-the-challenges-of-css-at-scale-85789980b04f](https://medium.com/front-end-developers/css-modules-solving-the-challenges-of-css-at-scale-85789980b04f))
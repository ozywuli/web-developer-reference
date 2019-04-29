---
title: "Scalable CSS"
date: 04-26-2019
---

- keep specificity low by staying flat as possible and reducing nesting (BEM)
- keep duplicate values in variables or mixins (colors, font sizes, media queries)


## Tailwind

- great set of default spacing and color values
- compose styles out of primitive utilities
- constraints on values -> less magical numbers and more disciplined design -> more consistent UI
- "utility-first workflow": start with utility classes until a pattern emerges -> this is better than premature abstraction

Tailwind Components

- Good way to remove duplication
- Good transitory step between inline tailwind classes and abstraction
- Preferable to hand crafted CSS

Pros
- just CSS classes. easily reusable on multiple different DOM elements
- very lightweight abstraction, reduces duplication
- not tied to any specific JS implementation

Cons
- not enough constraints... very easy to override. makes it more difficult to maintain consistent designs
- enables brittle relationships

Ember Components

Pros
- Leverage full power of the Ember API
- More constrained interface: you can't just apply arbitrary classes to the component, no afforance to go willy-nilly
- No need to split out CSS states

Cons
- Not as easy to customize
- Performance may be an issue because more components need to be rendered


## Notes

- Trying to abstract away too many features can lead to bloated and brittle components
- Use Ember's `concat` helper, which takes multi arity strings for arguments, to help manage style variants in a presentation component
- Styled mixin [https://gist.github.com/samselikoff/7b4b4a96b24dfa3e0606340a88eaa95f](https://gist.github.com/samselikoff/7b4b4a96b24dfa3e0606340a88eaa95f)

## References

[https://news.ycombinator.com/item?id=19758848](https://news.ycombinator.com/item?id=19758848)
[https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
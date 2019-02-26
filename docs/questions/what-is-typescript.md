---
title: 'What is TypeScript?'
date: 03-28-2018
---

## Benefits of type

- eliminates undesirable code from being run (by being pruned during compile time)
- reality itself is typed (you cant add lengths to weight and vice versa)
- adding two lengths of different units will cause a compile error
-

## Benefits

- optional static typing
- type inference: omit irrelevant types
- access to the latest JS features (classes, decorators, imports) and compile down to a version of JS that runs on all browsers
- useful reference: less time figuring out what upstream API provides in terms of payload and return types
  - interface -> write down the shape of the object
  - type checking -> determine what each property requires in terms of type
- very flexible
  - turn on/off features in a config file
  - optional typing
- improve tooling (intellisense)

### optional static typing

- can be added to variables, functions, properties...
- help the compiler show warnings about potential errors before code is ever run
- when using libraries and frameworks, lets developers know exactly what type of data APIs expect
- optional!

### type inference

- TypeScript is smart enough to guess what a variable's type might be

### intellisense

- provide code hints and code completion
- provide all methods available and what they expect as arguments
- tells you when you're taking shortcuts or messing up



## References

[https://softwareengineering.stackexchange.com/questions/215482/what-are-the-safety-benefits-of-a-type-system](https://softwareengineering.stackexchange.com/questions/215482/what-are-the-safety-benefits-of-a-type-system)
[https://www.reddit.com/r/javascript/comments/78m8fp/eli5_the_benefits_of_typescript/](https://www.reddit.com/r/javascript/comments/78m8fp/eli5_the_benefits_of_typescript/)
[https://softwareengineering.stackexchange.com/questions/257450/why-is-type-inference-useful](https://softwareengineering.stackexchange.com/questions/257450/why-is-type-inference-useful)
[https://www.reddit.com/r/javascript/comments/68k2fz/why_typescript_is_growing_more_popular/](https://www.reddit.com/r/javascript/comments/68k2fz/why_typescript_is_growing_more_popular/)
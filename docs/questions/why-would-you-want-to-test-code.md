---
title: "Why would you want to test code?"
date: 03-28-2018
---

- Protect against regressions
- Encourages you think and write code in a more modular and loosely coupled way
- Gives you confidence when adding new features or while refactoring
- Takes more time upfront but makes maintaining a clean codebase better down the road

**What are unit tests?**

- Break your code into pieces, usually functions and modules, and then testing those individual pieces
- Make sure that when a function accepts an argument that it returns a desired value or an error

**What are integration tests?**

- Make sure communications and connections between different parts of your code work
- Make a mock API request and make sure that those items are rendered on the page
- Test user interactions
- Make sure URL states are correct
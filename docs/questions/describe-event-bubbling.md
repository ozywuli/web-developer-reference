---
title: "Describe event bubbling"
date: 03-28-2018
---

When a user clicks on an element, the event is recorded on not only that element but also any other parent element. In other words, a click event on any element will ***bubble*** up the DOM until the event reaches the topmost element. Each element in between the topmost element and the element on which an event originated is aware of the event as well.
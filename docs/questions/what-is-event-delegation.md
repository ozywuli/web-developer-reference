---
title: "What is event delegation?"
date: 03-25-2018
---

"Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future. Inside the Event Handling Function."

Event delegation is when an event bubbles up or propagates from a nested element to an element higher up in the DOM. In other words, parent elements are aware of events, such as clicks, that occur on a child element.

Let's look at an example:

```html
<div class="grandparent">
    <div class="parent">
        <a href="#">I am a link</a>
    </div>
</div>
```

```js
let $grandparent = document.querySelector('.grandparent');

// Attach an event handler on the `.grandparent`. element
$grandparent.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click');
})
```

Although a click event handler is attached to the `.grandparent` element, clicks on the anchor element will trigger the event handler callback. That's because parent elements are aware of events that happen on child elements. See for yourself (check your console):

<iframe width="100%" height="300" src="//jsfiddle.net/ozywuli/3gbp215q/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

This is useful because any dynamic elements added to an element will automatically listen to any event handlers that have been attached to it.

# References

[https://learn.jquery.com/events/event-delegation/](https://learn.jquery.com/events/event-delegation/)
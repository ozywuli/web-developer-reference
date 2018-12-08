---
title: 'What is a singleton'
date: 03-28-2018
---

Singleton pattern is when an object can be instantiated only once

- useful for coordinating system wide state and actions
- Reduces name collisions and need for too many global variables
- Usually implemented as an IIFE 
- Examples include:
    - Redux store
    - database connection pool
    - JQuery module pattern 

```js
var Singleton = (function() {
    var instance;

    function createInstance() {
        var object = new Object('I am the instance');
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        }
    }
})();

function run() {
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    alert(`Same instance? + ${instance1 === instance2}`)
}

run();

```


## References

[https://www.dofactory.com/javascript/singleton-design-pattern](https://www.dofactory.com/javascript/singleton-design-pattern)
[https://learn.jquery.com/code-organization/concepts/](https://learn.jquery.com/code-organization/concepts/)
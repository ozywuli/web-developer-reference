---
title: "Explain object oriented programming"
date: 04-02-2019
---

Objects are the building blocks of an application.

Everything is JS is an Object

Ways to create an object
- object literal
- constructor function

Three techniques
- inheritance: objects inherit features like methods and properties from other objects
- polymorphism: objects share the same interface
- encapsulation: each object is responsible for specific tasks, that is, its method and properties are hidden from other parts of the application

Instance is an implementation of an object

Every function has a prototype because it's not known when a function is meant to be used as a constructor

## Prototype pattern

```js
function Employee () {}

Employee.prototype.firstName = "Abhijit";
Employee.prototype.lastName = "Patel";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
    console.log (this.firstName + " " + this.lastName);
};

var abhijit = new Employee () //
console.log(abhijit.fullName()); // Abhijit Patel
console.log(abhijit.signedNDA); // true
```

## Constructor Pattern

```js
function Employee (name, profession) {
    this.name = name;
    this.profession = profession;
} // Employee () is the constructor function because we use the new keyword below to invoke it.

var richard = new Employee (“Richard”, “Developer”) // richard is a new object we create from the Employee () constructor function.

console.log(richard.name); //richard
console.log(richard.profession); // Developer
```

## Combination Constructor/Prototype Pattern

```js
function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

// A User
firstUser = new User("Richard", "Richard@examnple.com");
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18
```

## Parasitic combination inheritance

```js
// We have a simple cars object
var cars = {
    type: "sedan",
    wheels: 4
};

// We want to inherit from the cars object, so we do:
var toyota = Object.create(cars); // now toyota inherits the properties from cars
console.log(toyota.type); // sedan
```

```js
 function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);

    copyOfParent.constructor = childObject;

    childObject.prototype = copyOfParent;
}
```

## References
[https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
[https://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/](https://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)
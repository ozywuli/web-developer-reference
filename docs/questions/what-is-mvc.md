---
title: "What is MVC?"
date: 03-28-2018
---

MVC stands for "model-view-controllers"


## Model

- connects the app to a database
- represents knowledge or data structure
- could be a single object or a collection of objects
- the model corresponds to the database
- the classes that store and manipulate data
- an abstraction layer over a database

## Views

- represents the visual aspect of its model
- presentation filter: highlights certain model attributes and supresses others
- asks the model for data to be rendered or sends updates to the model data
- the user interface that renders the model for users

## Controllers

- Connects the view and model
- Handles business logic (the rules that determine how data is created, read, updated, and deleted)
- Interacts with the model
- Receive events from the outside world (usually through views)
- Directs users to requested views and handles input from users to be directed to models
- decides what user input is, what models need to change as a result of user input, and what views should be rendered
- Consists of routes and their handlers

## References

[https://blog.codinghorror.com/understanding-model-view-controller/](https://blog.codinghorror.com/understanding-model-view-controller/)
[https://github.com/ciscoheat/mithril-hx/wiki/Rediscovering-MVC](https://github.com/ciscoheat/mithril-hx/wiki/Rediscovering-MVC)
---
title: 'Types of Testing'
date: 03-18-2019
---

## Why?

- preserve intent even when underlying code changes
- prevent regressions during refactoring
- automate application response so you don't have to do it manually

## Terminology

### Assertion

- worker bees of testing
- perform the actual checks

### Test runner

- runs your tests and provides feedback

### Test database

- dummy data for the tests to work with
- fixtures: sample data

## Types of Tests

### Unit Tests

- Test the smallest blocks of code
- Usually individual functions, methods, components, and modules

### Integration

- test how various parts of your application interact
- e.g. test how your app interacts with your database
- does not expect specific values only that different parts of your app can work together
- enzyme
  - mount component
  - simulate a click event
  - make a mock API request

### Functional tests
- tests the business requirements of an application
- checks for correctness of a feature by comparing results of a given input against a specification
- similar to integration tests but the difference is that functional tests expect specific values
- e.g. integration tests check that your app can query a database whereas a functional test would ask for a specific value from the database

### End-to-end / Acceptance tests
- verifies the correctness of user flow
- e.g. making that users can complete an ecommerce transaction
- useful but hard to maintain

## References

[https://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test](https://stackoverflow.com/questions/4904096/whats-the-difference-between-unit-functional-acceptance-and-integration-test)
[https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing)
---
title: "What's the difference between feature detection, feature inference, and using the UA string?"
date: 03-28-2018
---

## Feature detection

- Feature detection is checking if a browser supports a feature or if a feature is enabled. If not, provide a form of fallback. 
- Modernizr is probably the most popular library for feature detection
- Some common features to check for are touchevents, geolocation, localstorage...

## Feature inference

Feature inference is when you assume one feature exists because another one exists. This is bad practice because you can never be 100% sure.

## UA string

UA is a string text of data that each browser sends and can be accessed with `navigator.userAgent`. This contains info about the browser environment.
---
title: 'What is the DOM?'
date: 03-28-2018
---

- It's the document object model
- represents a document with a tree of nodes (text, attribute, comments, element) which are represented as objects
- DOM methods allow programmatic access to the tree to change the document structure, style, or object content
  - the root of the hierarchy is the EventTarget
  - Object -> EventTarget -> Node -> (text, element, comment) -> (HTMLElement, SVGElement) -> HTMLInputElement, HTMLBodyElement, HTMLAnchorElement
- connects web pages to scripts and stylesheets

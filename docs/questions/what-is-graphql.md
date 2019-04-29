---
title: "What is GraphQL"
date: 04-02-2019
---

What does it solve?
- fetching unnecessary data (overtfetching data)
- inflexible tree like RESTful structures

What is it?
- graph: a data structure that contains nodes and the relations between them (edges)
- edges are functions that resolve relationships between nodes

Query Variables
- inject variables into a mutation

```
query {
    user(id: "23") {
        friends() {
            company {
                name
            }
        }
    }
}
```
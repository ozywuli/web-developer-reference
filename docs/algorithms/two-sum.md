---
title: "Two sum"
date: 03-28-2018
---

[https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

Solution 1

```js
var twoSum = function(nums, target) {
    let indices = []
    let tmpIndices = []
    let sum = 0
    let sumA = 0

    for (let i = 0; i < nums.length; i++) {
        tmpIndices = []
        sumA = nums[i]
        tmpIndices.push(i)

        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue
            sum = sumA + nums[j]
            indices.push(...tmpIndices, j)
            if (sum === target) {
                return indices;
            } else {
              sum = 0;
              indices = []
            }
        }
    }
};
```

Solution 2

<iframe width="100%" height="300" src="//jsfiddle.net/ozywuli/enh8rkdm/13/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Solution 3

<iframe width="100%" height="300" src="//jsfiddle.net/ozywuli/82f7bjue/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
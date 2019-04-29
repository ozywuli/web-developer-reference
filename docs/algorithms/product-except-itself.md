---
title: "Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division"
date: 01-18-2019
---

Tips
- keep an output array
- keep an initial product set to 1
- the key is to push to the output before generating a new product value. this way, you can avoid pushing an item to the output array that is a product of itself
- loop right to get the product right of the initial element. loop left to get the product left of the initial element

Solution 1

<iframe height="265" style="width: 100%;" scrolling="no" title="Product except itself (Solution 1)" src="//codepen.io/ozywuli/embed/YBWdEQ/?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ozywuli/pen/YBWdEQ/'>Product except itself (Solution 1)</a> by ozywuli
  (<a href='https://codepen.io/ozywuli'>@ozywuli</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Solution 2

<iframe height="265" style="width: 100%;" scrolling="no" title="Product except itself (Solution 2)" src="//codepen.io/ozywuli/embed/jdrdrE/?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ozywuli/pen/jdrdrE/'>Product except itself (Solution 2)</a> by ozywuli
  (<a href='https://codepen.io/ozywuli'>@ozywuli</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## References

[]()
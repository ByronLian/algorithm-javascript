// https://leetcode.com/problems/min-stack/
// Runtime: 144 ms, faster than 30.99% of JavaScript online submissions for Min Stack.
// Memory Usage: 44.4 MB, less than 37.50% of JavaScript online submissions for Min Stack.

/*
 * initialize your data structure here.
 */
var MinStack = function () {
  this.items = [];
  this.min = [];
};

/*
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this.items.push(x);
  this.min[0] = Math.min(...this.items);
};

/*
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.items.pop();
  this.min[0] = Math.min(...this.items);
  return this.items;
};

/*
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/*
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.min[0];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
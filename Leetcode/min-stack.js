// https://leetcode.com/problems/min-stack/
// Runtime: 144 ms, faster than 30.99% of JavaScript online submissions for Min Stack.
// Memory Usage: 44.4 MB, less than 37.50% of JavaScript online submissions for Min Stack.

/*
 * initialize your data structure here.
 */
var MinStack = function () {
  this._items = [];
  this._min = [];
};

/*
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  this._items.push(x);
  this._min[0] = Math.min(...this._items);
};

/*
* @return {void}
*/
MinStack.prototype.pop = function () {
  this._items.pop();
  this._min[0] = Math.min(...this._items);
  return this._items;
};

/*
* @return {number}
*/
MinStack.prototype.top = function () {
  return this._items[this._items.length - 1];
};

/*
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this._min[0];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
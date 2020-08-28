// https://leetcode.com/problems/implement-queue-using-stacks/
// Runtime: 64 ms, faster than 92.69% of JavaScript online submissions for Implement Queue using Stacks.
// Memory Usage: 36.6 MB, less than 28.05% of JavaScript online submissions for Implement Queue using Stacks.

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this._queue = [];
};

/*
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this._queue.push(x);
};

/*
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this._queue.shift();
};

/*
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this._queue[0];
};

/*
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this._queue.length === 0 ? true : false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// https://leetcode.com/problems/moving-average-from-data-stream/
// Runtime: 108 ms, faster than 95.93% of JavaScript online submissions for Moving Average from Data Stream.
// Memory Usage: 44.8 MB, less than 5.88% of JavaScript online submissions for Moving Average from Data Stream.

/*
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this._size = size;
  this._elements = [];
  this._total = 0;
};

/*
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this._elements.length + 1 > this._size) {
    this._total -= this._elements.shift();
  }

  this._elements.push(val);
  this._total += val;

  return this._total / this._elements.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

// https://leetcode.com/problems/kth-largest-element-in-a-stream/
// Runtime: 184 ms, faster than 74.48% of JavaScript online submissions for Kth Largest Element in a Stream.
// Memory Usage: 45.6 MB, less than 80.71% of JavaScript online submissions for Kth Largest Element in a Stream.

/*
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this._arr = nums.sort((a, b) => b - a);
  this._k = k;
};

/*
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this._arr.length === 0) {
    this._arr.push(val);
    return val;
  }

  for (let i = 0; i < this._arr.length; i++) {
    if (val > this._arr[i]) {
      this._arr.splice(i, 0, val);
      break;
    }
    if (i > this._k) {
      return this._arr[this._k - 1];
    }
    if (i === this._arr.length - 1) {
      this._arr.push(val);
      break;
    }
  }
  return this._arr[this._k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

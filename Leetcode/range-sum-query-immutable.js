// https://leetcode.com/problems/range-sum-query-immutable/

/*
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const len = nums.length;
  this._accumulate = Array(len + 1).fill(0);
  for (let i = 1; i <= len; ++i) {
    this._accumulate[i] = this._accumulate[i - 1] + nums[i - 1];
  }
};

/*
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this._accumulate[j + 1] - this._accumulate[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

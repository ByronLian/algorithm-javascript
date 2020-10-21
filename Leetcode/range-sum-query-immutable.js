// https://leetcode.com/problems/range-sum-query-immutable/

/*
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this._nums = nums;

  // dp is for memo
  // this._dp = {};
};

/*
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  let result = 0;
  const start = i;
  const end = j;

  // if(this._dp[`${start},${end}`] !== undefined) return this._dp[`${start},${end}`];
   
  for (let i = start; i <= end; i++) {
    result += this._nums[i];
  }

  // this._dp[`${start},${end}`] = result;
  return result;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/

/*
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this._nums = new Map();
  this._count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      this._nums[i] = nums[i];
      this._count += 1;
    }
  }

};

// Return the dotProduct of two sparse vectors
/*
* @param {SparseVector} vec
* @return {number}
*/
SparseVector.prototype.dotProduct = function (vec) {
  let total = 0;
  const short = vec.count > this._count ? this._nums : vec._nums;
  const long = vec.count > this._count ? vec._nums : this._nums;

  for (let i in short) {
    if (long[i] !== undefined) {
      total += short[i] * long[i];
    }
  }

  return total;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
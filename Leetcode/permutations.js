// https://leetcode.com/problems/permutations/
// Runtime: 76 ms, faster than 98.91% of JavaScript online submissions for Permutations.
// Memory Usage: 42 MB, less than 44.73% of JavaScript online submissions for Permutations.

/*
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const len = nums.length;
  const result = [];

  const checkAndPick = (arr, pool) => {
    if (arr.length === len) return result.push(arr);

    for (let i = 0; i < pool.length; i++) {
      arr.push(pool[i]);
      checkAndPick([...arr], pool.slice(0, i).concat(pool.slice(i + 1, pool.length)));
      arr.pop();
    }
  }

  checkAndPick([], nums);
  return result;
};

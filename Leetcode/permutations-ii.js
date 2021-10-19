// https://leetcode.com/problems/permutations-ii
// Runtime: 88 ms, faster than 92.38% of JavaScript online submissions for Permutations II.
// Memory Usage: 43.7 MB, less than 61.63% of JavaScript online submissions for Permutations II.

/*
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  const len = nums.length;
  const result = [];
  nums.sort((a, b) => a - b);

  const checkAndPick = (arr, pool, start) => {
    if (arr.length === len) return result.push(arr);

    for (let i = 0; i < pool.length; i++) {
      if (pool[i] === pool[i - 1]) continue;
      arr.push(pool[i]);
      checkAndPick([...arr], pool.slice(0, i).concat(pool.slice(i + 1, pool.length)), i);
      arr.pop();
    }
  }

  checkAndPick([], nums, 0);
  return result;
};
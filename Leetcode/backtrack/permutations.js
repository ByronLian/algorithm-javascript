// https://leetcode.com/problems/permutations/
// Runtime: 80 ms, faster than 96.02% of JavaScript online submissions for Permutations.
// Usage: 42.1 MB, less than 36.99% of JavaScript online submissions for Permutations.

/*
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  const result = [];
  if (nums.length === 0) return [result];
  const len = nums.length;

  const pick = (arr, visited = {}) => {
    if (arr.length === len) return result.push(arr);

    for (let i = 0; i < len; i++) {
      if (visited[nums[i]] === 1) continue;
  
      visited[nums[i]] = 1;
      arr.push(nums[i]);

      pick([...arr], visited);

      visited[nums[i]] = null;
      arr.pop();
    }
  };

  pick([]);
  return result;
};

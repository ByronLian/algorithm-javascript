// https://leetcode.com/problems/single-number/
// Runtime: 100 ms, faster than 38.86% of JavaScript online submissions for Single Number.

/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

  const len = nums.length;
  let previousEl = undefined;

  // Solution:
  // e.g [1, 4, 1, 2, 2]
  // Sort the array from small to big first
  // [1, 4, 1, 2, 2] => [1, 1, 2, 2, 4]
  // use current element compare with previous and next element
  // if previous or next element can match current element then current element is not single
  // if not then we can know current element is single

  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < len; i++) {
    const currentEl = nums[i];
    const nextEl = nums[i + 1];
    let isSingle = true;

    // Case [1, 2, 2]
    if (previousEl === undefined && currentEl !== nextEl) return currentEl;

    // Other cases
    if (previousEl === currentEl) isSingle = false;
    if (currentEl === nextEl) isSingle = false;

    previousEl = currentEl;

    if (isSingle) {
      return currentEl;
    }
  }
};
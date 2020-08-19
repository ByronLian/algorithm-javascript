// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// Runtime: 72 ms, faster than 88.56% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
// Memory Usage: 37.2 MB, less than 20.83% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.

/*
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
  if (arr.length < 3) return true;

  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) return false;
  }

  return true;
};
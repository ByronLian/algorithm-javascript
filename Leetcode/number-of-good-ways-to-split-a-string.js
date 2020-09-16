// https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
// Runtime: 116 ms, faster than 75.38% of JavaScript online submissions for Number of Good Ways to Split a String.
// Memory Usage: 39.2 MB, less than 83.42% of JavaScript online submissions for Number of Good Ways to Split a String.

/*
 * @param {string} s
 * @return {number}
 */

var numSplits = function (s) {
  let left = {};
  let right = {};

  // Put everything into right
  for (let i = 0; i < s.length; i++) {
    if (right[s[i]] === undefined) {
      right[s[i]] = 1;
    } else {
      right[s[i]] += 1;
    }
  }

  let count = 0;
  let leftDisCount = 0;
  let rightDiscount = Object.keys(right).length;
  // Move one by one to left
  for (let j = 0; j < s.length; j++) {
    if (left[s[j]] === undefined) {
      left[s[j]] = 1;
      leftDisCount++;
    }

    if (right[s[j]] > 1) {
      right[s[j]] -= 1;
    } else {
      rightDiscount--;
    }

    // Check the distinct
    if (leftDisCount === rightDiscount) count++;
  }

  return count;
};

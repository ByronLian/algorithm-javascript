// https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// Runtime: 72 ms, faster than 95.92% of JavaScript online submissions for Maximum Score After Splitting a String.
// Memory Usage: 37.3 MB, less than 56.46% of JavaScript online submissions for Maximum Score After Splitting a String.

/*
 * @param {string} s
 * @return {number}
 */

var maxScore = function (s) {
  if (s.length <= 1) return 0;

  let count0 = 0;
  let count1 = s.split("").filter((x) => x === "1").length;
  let max = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "1") count1--;
    if (s[i] === "0") count0++;

    if (count0 + count1 > max) max = count0 + count1;
  }

  return max;
};

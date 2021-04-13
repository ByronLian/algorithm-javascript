// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/
// Runtime: 72 ms, faster than 94.35% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
// Memory Usage: 38.2 MB, less than 98.35% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.

/*
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let s1FirstDiff = "";
  let s2FirstDiff = "";
  let s1SecondDiff = "";
  let s2SecondDiff = "";

  let count = 0;

  for (let i = 0; i <= s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (count === 0) {
        s1FirstDiff = s1[i];
        s2FirstDiff = s2[i];
      } else {
        s1SecondDiff = s1[i];
        s2SecondDiff = s2[i];
      }
      count += 1;
    }

    if (count >= 3) return false;
  }

  return s1FirstDiff === s2SecondDiff && s1SecondDiff === s2FirstDiff;
};

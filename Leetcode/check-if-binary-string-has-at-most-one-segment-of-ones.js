// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/
// Runtime: 72 ms, faster than 96.91% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.
// Memory Usage: 38.5 MB, less than 83.02% of JavaScript online submissions for Check if Binary String Has at Most One Segment of Ones.

/*
 * @param {string} s
 * @return {boolean}
 */

var checkOnesSegment = function (s) {
  let maxCount = 0;
  let countOne = 0;
  let tempCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      countOne += 1;
      tempCount += 1;
    } else {
      if (tempCount > maxCount) maxCount = tempCount;
      tempCount = 0;
    }
  }

  // Case that 1011111
  if(tempCount > maxCount) maxCount = tempCount;

  return maxCount >= countOne;
};

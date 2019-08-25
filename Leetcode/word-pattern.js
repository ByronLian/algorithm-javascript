// https://leetcode.com/problems/word-pattern/
// Runtime: 36 ms, faster than 99.86% of JavaScript online submissions for Word Pattern.
// Memory Usage: 33.8 MB, less than 54.55% of JavaScript online submissions for Word Pattern.

/*
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function (pattern, str) {
  let strMap = {};
  let patternMap = {}
  const strAry = str.split(' ');

  if (strAry.length !== pattern.length) return false;

  for (let i = 0; i < strAry.length; i++) {
    if (strMap[pattern[i]] && strMap[pattern[i]] !== strAry[i]) {
      return false;
    } else {
      strMap[pattern[i]] = strAry[i];
    }

    if (patternMap[strAry[i]] && patternMap[strAry[i]] !== pattern[i]) {
      return false;
    } else {
      patternMap[strAry[i]] = pattern[i];
    }
  }

  return true;
};
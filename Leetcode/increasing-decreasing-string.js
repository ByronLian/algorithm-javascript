// https://leetcode.com/problems/increasing-decreasing-string/submissions/

/*
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  if (s.length <= 1) return s;

  let chars = new Array(26).fill(0);

  for (let char of s) {
    chars[char.charCodeAt() - 97]++;
  }

  let result = "";
  while (result.length < s.length) {
    for (let i = 0; i <= 25; i++) {
      if (chars[i]) {
        chars[i]--;
        result += String.fromCharCode(97 + i);
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (chars[i]) {
        chars[i]--;
        result += String.fromCharCode(97 + i);
      }
    }
  }

  return result;
};

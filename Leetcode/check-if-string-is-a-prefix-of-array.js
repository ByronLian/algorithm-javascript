// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

/*
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

var isPrefixString = function (s, words) {
  const len = s.length;
  let isPrefix = false;

  let temp = "";
  for (let i = 0; i < len; i += 1) {
    temp += words[i];
  
    if (!s.includes(temp) || temp.length > len) break;
    if (temp === s) {
      isPrefix = true;
      break;
    }
  }

  return isPrefix;
};

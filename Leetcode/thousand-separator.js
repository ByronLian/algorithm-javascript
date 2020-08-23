// https://leetcode.com/problems/thousand-separator/
// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 36.7 MB, less than 100.00% of JavaScript online submissions for Thousand Separator.

/*
 * @param {number} n
 * @return {string}
 */

var thousandSeparator = function (n) {
  let result = [];
  const strN = n.toString();

  let counter = 0;
  for (let i = strN.length - 1; i >= 0; i--) {
    counter++;
    if (counter === 3) {
      result.unshift(('.'), strN[i]);
      counter = 0;
    } else {
      result.unshift(strN[i]);
    }
  }

  if (result[0] === '.') result.shift();
  return result.join('');
};
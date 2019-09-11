// https://leetcode.com/problems/add-binary/
// Runtime: 52 ms, faster than 97.95% of JavaScript online submissions for Add Binary.
// Memory Usage: 36.4 MB, less than 14.29% of JavaScript online submissions for Add Binary.

/*
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  // Find the long length and fill '0' into short one 
  // Now 2 strings have same length
  const len = a.length > b.length ? a.length : b.length;
  if (a.length > b.length) {
    b = b.padStart(len, '0');
  } else {
    a = a.padStart(len, '0');
  }

  let additional = 0;
  let temp = [];
  let result = '';

  // binary counting
  // e.g. 1 + 1 = 0, additional = 1
  for (let i = len - 1; i >= 0; i--) {
    let count = additional + parseInt(a[i]) + parseInt(b[i]);

    if (count > 2) {
      temp.push('1');
      additional = 1;
    } else if (count > 1) {
      temp.push('0');
      additional = 1;
    } else {
      temp.push(count.toString());
      additional = 0;
    }
  }

  if (additional === 1) temp.push('1');

  for (let j = temp.length - 1; j >= 0; j--) {
    result += temp[j];
  }
  return result;
};
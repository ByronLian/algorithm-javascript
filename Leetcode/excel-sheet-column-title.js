// https://leetcode.com/problems/excel-sheet-column-title/

/*
 * @param {number} n
 * @return {string}
 */

var convertToTitle = function (n) {
  let result = "";
  let rem;

  while (n) {
    rem = (n - 1) % 26;
    n = (n - 1 - rem) / 26;
    result += String.fromCharCode(65 + rem);
  }

  return result;
};

// https://leetcode.com/problems/check-if-n-and-its-double-exist/
// Runtime: 72 ms, faster than 96.42% of JavaScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 38.8 MB, less than 81.27% of JavaScript online submissions for Check If N and Its Double Exist.

/*
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr.filter((x) => x === 0).length > 1) {
        return true;
      }
    } else if (arr.indexOf(arr[i] * 2) !== -1) {
      return true;
    }
  }

  return false;
};

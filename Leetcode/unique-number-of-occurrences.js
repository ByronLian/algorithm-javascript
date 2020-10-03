// https://leetcode.com/problems/unique-number-of-occurrences/
// Runtime: 52 ms, faster than 81.87% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Unique Number of Occurrences.

/*
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
  if (arr.length === 1) return true;
  if (arr.length === 2) {
    if (arr[0] !== arr[1]) return false;
    return true;
  }

  // Input: arr = [1,2,2,1,1,3]
  // Output: arr = [1,1,1,2,2,3]
  arr.sort((a, b) => a - b);

  // Count until number changed
  // Check the count of number exists in result array or not
  // If exist then return false
  // If not then push into result
  let preEl = arr[0];
  let count = 1;
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === preEl) {
      count++;
    } else {
      if (result.indexOf(count) !== -1) return false;
      result.push(count);
      preEl = arr[i];
      count = 1;
    }
  }

  return true;
};

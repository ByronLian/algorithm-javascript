// https://leetcode.com/problems/long-pressed-name/
// Runtime: 72 ms, faster than 90.26% of JavaScript online submissions for Long Pressed Name.
// Memory Usage: 40.3 MB, less than 5.13% of JavaScript online submissions for Long Pressed Name.

/*
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */

var isLongPressedName = function (name, typed) {
  // Input:
  //  "leelee"
  //  "lleeelee"
  //
  // Output:
  //  [ [ 'l', 1 ], [ 'e', 2 ], [ 'l', 1 ], [ 'e', 2 ] ]
  //  [ [ 'l', 2 ], [ 'e', 3 ], [ 'l', 1 ], [ 'e', 2 ] ]
  const nameArr = formatData(name);
  const typedArr = formatData(typed);

  if (nameArr.length !== typedArr.length) return false;

  for (let j = 0; j < nameArr.length; j++) {
    if (nameArr[j][0] !== typedArr[j][0] || typedArr[j][1] < nameArr[j][1])
      return false;
  }

  return true;
};

const formatData = (arr) => {
  let result = [];
  let current = arr[0];
  let count = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      result.push([current, count]);
      count = 1;
      current = arr[i];
    }
  }

  return result;
};

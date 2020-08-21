// https://leetcode.com/problems/relative-sort-array/
// Runtime: 68 ms, faster than 92.97% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 38.1 MB, less than 16.55% of JavaScript online submissions for Relative Sort Array.

/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let temp = [];
  let others = [];
  let result = [];

  // Input
  //  arr1 [2,3,1,3,2,4,6,7,9,2,19]
  //  arr2 [2,1,4,3,9,6]
  // Output
  //  [
  //   <1 empty item>,
  //   [ 1 ],
  //   [ 2, 2, 2 ],
  //   [ 3, 3 ],
  //   [ 4 ],
  //   <1 empty item>,
  //   [ 6 ],
  //   <2 empty items>,
  //   [ 9 ]
  // ]
  // [ 7, 19 ]
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      others.push(arr1[i]);
    } else {
      if (!temp[arr1[i]]) temp[arr1[i]] = new Array();
      temp[arr1[i]].push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    result = result.concat(temp[arr2[j]]);
  }

  return result.concat(others.sort((a, b) => a - b));
};

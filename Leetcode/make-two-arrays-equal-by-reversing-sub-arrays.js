// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
// Runtime: 76 ms, faster than 90.57% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 43 MB, less than 6.03% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.

/*
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

var canBeEqual = function (target, arr) {
  if (target === arr) return true;

  // This is array save those non checking element
  let middleArr = [...arr];
  // This is counter for length of elements that we checked
  let count = 0;

  // middleArr value after each loop
  // [ 2, 4, 1, 3 ]
  // [ 4, 2, 3 ]
  // [ 4, 3 ]
  // [ 4 ]
  for (let i = 0; i < target.length; i++) {
    if (middleArr.indexOf(target[i]) === -1) return false;
    let idx = middleArr.indexOf(target[i]) + count;

    // Switch elements
    // replace below 3 lines with
    // arr = arr.slice(0, i).concat(arr.slice(i, idx+1).reverse()).concat(arr.slice(idx+1, arr.length));
    // it will be reverse version but super slow
    let temp = arr[idx];
    arr[idx] = arr[i];
    arr[i] = temp;

    middleArr = arr.slice(count + 1);
    count++;
  }
  return true;

  // If you don't care step, here's simple way

  // target.sort((a, b) => a - b);
  // arr.sort((a, b) => a - b);

  // for (let i = 0; i < target.length; i++) {
  //   if (target[i] !== arr[i]) return false;
  // }

  // return true;
};

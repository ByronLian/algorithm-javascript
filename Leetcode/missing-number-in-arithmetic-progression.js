// https://leetcode.com/problems/missing-number-in-arithmetic-progression/
// Runtime: 72 ms, faster than 88.46% of JavaScript online submissions for Missing Number In Arithmetic Progression.
// Memory Usage: 38.9 MB, less than 21.15% of JavaScript online submissions for Missing Number In Arithmetic Progression.

/*
 * @param {number[]} arr
 * @return {number}
 */

var missingNumber = function (arr) {
  let countCase1 = 0;
  let countCase2 = 0;
  let case1 = arr[1] - arr[0];
  let case2 = -Infinity;

  let commonDiff = 0;

  let prevCase1Idx = -1;
  let prevCase2Idx = -1;
  let idx = 0;

  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i + 1] - arr[i] === case1) {
      countCase1++;
      prevCase1Idx = i;
    } else {
      case2 = arr[i + 1] - arr[i];
      countCase2++;
      prevCase2Idx = i;
    }

    // When we find both cases
    if (countCase1 === 1 && countCase2 > 1) {
      commonDiff = case2;
      idx = prevCase1Idx;
      break;
    }
    if (countCase2 === 1 && countCase1 > 1) {
      commonDiff = case1;
      idx = prevCase2Idx;
      break;
    }

    i++;
  }

  // Case: [15, 13, 12]
  if (countCase1 === countCase2) {
    let targetDiff = Math.abs(case1) > Math.abs(case2) ? case1 : case2;
    let commonDiff = Math.abs(case1) > Math.abs(case2) ? case2 : case1;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] - arr[j] === targetDiff) return arr[j] + commonDiff;
    }
  }

  return arr[idx] + commonDiff;
};

// https://leetcode.com/problems/custom-sort-string/
// Runtime: 76 ms, faster than 82.21% of JavaScript online submissions for Custom Sort String.
// Memory Usage: 40.1 MB, less than 30.06% of JavaScript online submissions for Custom Sort String.

/*
 * @param {string} S
 * @param {string} T
 * @return {string}
 */

var customSortString = function (S, T) {
  let priorityMap = new Map();
  for (let i = 0; i < S.length; i++) {
    priorityMap[S[i]] = i;
  }

  const arr = [];
  for (let j = 0; j < T.length; j++) {
    const val = T[j];
    if (priorityMap[val] === undefined) continue;
    arr.push([priorityMap[val], val]);
  }

  arr.sort((a, b) => a[0] - b[0]);

  let result = "";
  let key = 0;
  for (let k = 0; k < T.length; k++) {
    const val = T[k];
    if (priorityMap[val] === undefined) {
      result += val;
    } else {
      result += arr[key][1];
      key++;
    }
  }

  return result;
};

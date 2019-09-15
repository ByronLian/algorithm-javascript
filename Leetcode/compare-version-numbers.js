// https://leetcode.com/problems/compare-version-numbers/
// Runtime: 52 ms, faster than 77.75% of JavaScript online submissions for Compare Version Numbers.
// Memory Usage: 33.8 MB, less than 40.00% of JavaScript online submissions for Compare Version Numbers.

/*
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

var compareVersion = function (version1, version2) {
  let v1 = [];
  let v2 = [];

  // Deal data into array
  // e.g. 1.001.1.2  => [1, 1, 1, 2]
  version1.split('.').forEach((e) => {
    v1.push(parseInt(e));
  });

  version2.split('.').forEach((e) => {
    v2.push(parseInt(e));
  });

  // Find the longest length
  const len = v1.length > v2.length ? v1.length : v2.length;

  // Compare and return result
  for (let i = 0; i < len; i++) {
    const v1El = v1[i] === undefined ? 0 : v1[i];
    const v2El = v2[i] === undefined ? 0 : v2[i];

    if (v1El === v2El) continue;
    if (v1El > v2El) return 1;
    if (v2El > v1El) return -1;
  }

  return 0;
};
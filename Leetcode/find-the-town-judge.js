// https://leetcode.com/problems/find-the-town-judge/
// Runtime: 112 ms, faster than 82.57% of JavaScript online submissions for Find the Town Judge.
// Memory Usage: 45.1 MB, less than 43.58% of JavaScript online submissions for Find the Town Judge.

/*
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function (N, trust) {
  if (trust.length === 0)  return N === 1 ? 1 : -1;

  let beTrustedList = {};
  let trustOtherList = new Set();

  // Get trust others and be trusted list
  for (let i = 0; i < trust.length; i++) {
    if (beTrustedList[trust[i][1]] === undefined) {
      beTrustedList[trust[i][1]] = 1;
    } else {
      beTrustedList[trust[i][1]] += 1;
    }
    trustOtherList.add(trust[i][0].toString());
  }

  // If person in be trusted list but not in trust others list then it is.
  let trustOtherListArr = [...trustOtherList];
  for (let i in beTrustedList) {
    if (beTrustedList[i] === N - 1 && trustOtherListArr.indexOf(i) === -1) return i;
  }

  return -1;
};

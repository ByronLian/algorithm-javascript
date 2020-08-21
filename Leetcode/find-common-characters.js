// https://leetcode.com/problems/find-common-characters/
// Runtime: 92 ms, faster than 71.52% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 43.7 MB, less than 24.34% of JavaScript online submissions for Find Common Characters.
  
/*
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let target = A[0];
  let result = [];

  for (let i = 0; i < target.length; i++) {
    let count = 1;
    for (let j = 1; j < A.length; j++) {
      if (A[j].indexOf(target[i]) !== -1) {
        count++;
        A[j] = A[j].replace(target[i], "");
      }
    }

    if (count === A.length) result.push(target[i]);
  }

  return result;
};

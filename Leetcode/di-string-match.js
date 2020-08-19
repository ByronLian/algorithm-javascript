// https://leetcode.com/problems/di-string-match/

/*
 * @param {string} S
 * @return {number[]}
 */

var diStringMatch = function (S) {
  const A = []
  const result = []

  for (let i = 0; i < S.length + 1; ++i) {
    A.push(i);
  }

  for (var i = 0; i < S.length; ++i) {
    if (S[i] === 'I') {
      result.push(A.shift())
    }
    else {
      result.push(A.pop())
    }
  }
  result.push(A[0]);

  return result;
};

// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
// Runtime: 76 ms, faster than 70.76% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
// Memory Usage: 37.9 MB, less than 5.32% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.

/*
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  if (S.length <= 1) return S.length;

  const stack = [S[0]];

  for (let i = 1; i < S.length; i++) {
    if (stack.length === 0) {
      stack.push(S[i]);
      continue;
    }
    if (S[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.length;
};

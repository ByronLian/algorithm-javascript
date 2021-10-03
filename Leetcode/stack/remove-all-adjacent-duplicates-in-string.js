// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// Runtime: 92 ms, faster than 75.47% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 45.5 MB, less than 19.17% of JavaScript online submissions for Remove All Adjacent Duplicates In String.

/*
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.join("");
};

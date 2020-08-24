// https://leetcode.com/problems/remove-outermost-parentheses/
// Runtime: 80 ms, faster than 66.29% of JavaScript online submissions for Remove Outermost Parentheses.
// Memory Usage: 39.5 MB, less than 17.04% of JavaScript online submissions for Remove Outermost Parentheses.

/*
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let map = {
    ")": "(",
  };
  let stack = [];
  let temp = "";
  let result = [];

  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0 && temp === "") {
      stack.push(S[i]);
      temp += S[i];
      continue;
    }

    if (stack[stack.length - 1] === map[S[i]]) {
      temp += S[i];
      stack.pop();

      if (stack.length === 0) {
        let arr = temp.split("");
        arr.shift();
        arr.pop();
        result.push(arr.join(""));
        temp = "";
      }
    } else {
      temp += S[i];
      stack.push(S[i]);
    }
  }

  return result.join("");
};

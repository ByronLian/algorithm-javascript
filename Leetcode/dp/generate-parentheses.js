// https://leetcode.com/problems/generate-parentheses

/*
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const result = [];

  const compose = (lRemainCount, rRemainCount, str) => {
    if (lRemainCount > rRemainCount) return;

    if (lRemainCount === 0 && rRemainCount === 0) {
      result.push(str);
      return;
    }

    if (lRemainCount > 0) compose(lRemainCount - 1, rRemainCount, str + "(");
    if (rRemainCount > 0) compose(lRemainCount, rRemainCount - 1, str + ")");
  };

  compose(n, n, "");
  return result;
};

// https://leetcode.com/problems/backspace-string-compare/
// Runtime: 76 ms, faster than 78.64% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 37.2 MB, less than 49.01% of JavaScript online submissions for Backspace String Compare.

/*
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function (S, T) {

  let transform = str => {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  
    return stack.join('');
  }

  return transform(S) === transform(T);
};
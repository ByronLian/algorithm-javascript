// https://leetcode.com/problems/valid-parentheses/submissions/
// Runtime: 48 ms, faster than 94.57% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.9 MB, less than 75.00% of JavaScript online submissions for Valid Parentheses.

/*
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const len = s.length;
  if (len === 1) return false;

  let tempStack = [];
  const leftMapping = ['(', '[', '{'];
  const mapping = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  // Store the left element into stack
  // pop element from stack when we find the matching right element
  for (let i = 0; i < len; i++) {
    if (leftMapping.indexOf(s[i]) > -1)
      tempStack.push(s[i]);
    else {
      if (mapping[s[i]] === tempStack[tempStack.length - 1])
        tempStack.pop();
      else
        return false;
    }
  }

  return tempStack.length === 0 || false;
};

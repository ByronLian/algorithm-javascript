// https://leetcode.com/problems/validate-stack-sequences/
// Runtime: 76 ms, faster than 95.89% of JavaScript online submissions for Validate Stack Sequences.
// Memory Usage: 40.3 MB, less than 8.23% of JavaScript online submissions for Validate Stack Sequences.

/*
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

var validateStackSequences = function (pushed, popped) {
  let stack = [];

  while (pushed.length > 0 || popped.length > 0) {
    // If next pop element shows then pop that element from temp stack and also pop from popped array
    if (stack[stack.length - 1] === popped[0]) {
      stack.pop();
      popped.shift();
    } else {
      // Add element to tmp stack if the next pop element is not show up yet
      stack[stack.length] = pushed.shift();
    }

    // When there's no element left and the next pop element is not match the one in temp stack
    if (pushed.length === 0 && stack[stack.length - 1] !== popped[0])
      return false;
  }

  return true;
};

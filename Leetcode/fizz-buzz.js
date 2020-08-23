// https://leetcode.com/problems/fizz-buzz/
// Runtime: 76 ms, faster than 86.41% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 38.9 MB, less than 47.25% of JavaScript online submissions for Fizz Buzz.

/*
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {

  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
};
// https://leetcode.com/problems/number-complement/submissions/
// Runtime: 60 ms, faster than 87.91% of JavaScript online submissions for Number Complement.
// Memory Usage: 33.8 MB, less than 45.45% of JavaScript online submissions for Number Complement.

/*
 * @param {number} num
 * @return {number}
 */

var findComplement = function (num) {

  let position = 0;
  let result = 0;

  while (num > 0) {

    // Solution
    // Turn Decimal to Binary by finding the Remainder
    // in the mean time we need to flap 0 to 1 and 1 to 0
    // but we don't really do that, just use "if" condition
    // so if the Remainder is 0 at this moment 
    // then we need to count it into final result because it should be turned to 1 actually
    if (num % 2 === 0) {
      result += Math.pow(2, position);
    }

    // e.g num = 5
    // loop 1, num = 5
    // loop 2, num = 2
    num = Math.floor(num / 2);

    // 2^0, 2^1, 2^2 ...
    position++;
  }

  return result;
};
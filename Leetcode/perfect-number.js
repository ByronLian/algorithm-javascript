// https://leetcode.com/problems/perfect-number/
// Runtime: 736 ms, faster than 79.94% of JavaScript online submissions for Perfect Number.
// Memory Usage: 38.7 MB, less than 5.18% of JavaScript online submissions for Perfect Number.

/*
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function (num) {
  if (num < 2) return false;

  let total = 0;
  let i = 1;

  while (true) {
    if (num % i === 0) {
      const tmp = num / i;
      if (i > tmp) break;
      total += i + tmp;
    }
    
    i++;
  }

  return total - num === num ? true : false;
};

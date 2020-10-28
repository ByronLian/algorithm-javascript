// https://leetcode.com/problems/armstrong-number/
// Runtime: 72 ms, faster than 88.89% of JavaScript online submissions for Armstrong Number.
// Memory Usage: 38.8 MB, less than 44.44% of JavaScript online submissions for Armstrong Number.

/*
 * @param {number} N
 * @return {boolean}
 */

var isArmstrong = function (N) {
  const Nstr = N.toString();
  const len = Nstr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    count += Math.pow(parseInt(Nstr[i]), len);
  }

  return count === N ? true : false;
};

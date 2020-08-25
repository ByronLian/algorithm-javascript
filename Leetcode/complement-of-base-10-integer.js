// https://leetcode.com/problems/complement-of-base-10-integer/

/*
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  if (N === 0) return 1;

  let position = 0;
  let result = 0;

  while (N > 0) {
    if (N % 2 === 0) {
      result += Math.pow(2, position);
    }

    N = Math.floor(N / 2);
    position++;
  }

  return result;
};

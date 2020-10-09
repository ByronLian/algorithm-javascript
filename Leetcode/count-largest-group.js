// https://leetcode.com/problems/count-largest-group/

/*
 * @param {number} n
 * @return {number}
 */

var countLargestGroup = function (n) {
  let result = {};
  let currentMaxCount = 0;

  for (let i = 1; i <= n; i++) {
    const tmp = sumDigits(i);

    if (result[tmp] === undefined) {
      result[tmp] = [i];
    } else {
      result[tmp].push(i);
    }

    if (result[tmp].length > currentMaxCount)
      currentMaxCount = result[tmp].length;
  }

  let largestSize = 0;
  Object.keys(result).forEach((key) => {
    if (result[key].length === currentMaxCount) largestSize++;
  });

  return largestSize;
};

const sumDigits = (num) => {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

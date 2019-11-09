// https://leetcode.com/problems/self-dividing-numbers/
// Runtime: 56 ms, faster than 90.60% of JavaScript online submissions for Self Dividing Numbers.
// Memory Usage: 35.3 MB, less than 84.62% of JavaScript online submissions for Self Dividing Numbers.
/*
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var selfDividingNumbers = function (left, right) {
  let result = [];
  const edge = right + 1;

  for (let i = left; i < edge; i++) {
    if (i % 10 === 0) continue;

    const str = i.toString();
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (i % parseInt(str[j]) !== 0) break;
      count += 1;
    }

    if (count === str.length) result.push(i);
  }

  return result;
};

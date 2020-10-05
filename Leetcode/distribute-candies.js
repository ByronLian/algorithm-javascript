// https://leetcode.com/problems/distribute-candies/

/*
 * @param {number[]} candies
 * @return {number}
 */

var distributeCandies = function (candies) {
  const len = candies.length;
  if (len === 2) return 1;

  let map = {};
  let result = [];

  for (let i = 0; i < len; i++) {
    if (map[candies[i]] === undefined) {
      result.push(candies[i]);
      map[candies[i]] = true;
      if (result.length === len / 2) return result.length;
    }
  }

  return result.length;
};

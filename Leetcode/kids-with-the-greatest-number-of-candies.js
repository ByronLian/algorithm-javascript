// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Runtime: 84 ms, faster than 28.39% of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 36.3 MB, less than 18.55% of JavaScript online submissions for Kids With the Greatest Number of Candies.

/*
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
  const maximum = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= maximum ? true : false;
  }

  return candies;
};

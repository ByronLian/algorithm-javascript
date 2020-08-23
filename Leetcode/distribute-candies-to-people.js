// https://leetcode.com/problems/distribute-candies-to-people/
// Runtime: 72 ms, faster than 80.48% of JavaScript online submissions for Distribute Candies to People.
// Memory Usage: 37 MB, less than 24.10% of JavaScript online submissions for Distribute Candies to People.

/*
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */

var distributeCandies = function (candies, num_people) {
  let result = new Array(num_people).fill(0);

  // i is pointer for people
  // counter is how many candies this time
  let i = 0;
  let counter = 1;

  while (candies > 0) {
    // Case when last round
    if (candies < counter) {
      result[i] += candies;
      break;
    } else {
      // Case when normal round
      result[i] += counter;
    }
    
    candies -= counter;
    counter++;
    i = i === num_people - 1 ? 0 : i + 1;
  }

  return result;

};
// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
// Runtime: 204 ms, faster than 92.94% of JavaScript online submissions for Maximum Number of Coins You Can Get.
// Memory Usage: 47.3 MB, less than 70.59% of JavaScript online submissions for Maximum Number of Coins You Can Get.
 
/*
 * @param {number[]} piles
 * @return {number}
 */

var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);

  // The count that we will give to Bob are those the smallest one
  let stop = piles.length / 3;
  let result = 0;

  // Only count the sec big
  for (let i = piles.length - 2; i >= stop; i -= 2) {
    result += piles[i];
  }

  return result;
};

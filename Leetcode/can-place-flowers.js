// https://leetcode.com/problems/can-place-flowers/
// Runtime: 76 ms, faster than 93.83% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 39.1 MB, less than 23.05% of JavaScript online submissions for Can Place Flowers.

/*
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && flowerbed[0] === 0) {
      if (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined) {
        flowerbed[0] = 1;
        n--;
      }
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[flowerbed.length - 1] === 0
    ) {
      if (flowerbed[flowerbed.length - 2] === 0) {
        flowerbed[flowerbed.length - 1] = 1;
        n--;
      }
    } else {
      if (
        flowerbed[i] === 0 &&
        flowerbed[i - 1] === 0 &&
        flowerbed[i + 1] === 0
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }

    if (n === 0) return true;
  }

  return n > 0 ? false : true;
};

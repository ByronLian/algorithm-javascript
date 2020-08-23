// https://leetcode.com/problems/last-stone-weight/
// Runtime: 80 ms, faster than 51.47% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 38.2 MB, less than 36.97% of JavaScript online submissions for Last Stone Weight.

/*
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {

  while (stones.length !== 1) {
    stones.sort((a, b) => b - a);
    let newStone = stones.shift() - stones.shift();
    if (newStone !== 0) stones.push(newStone);
  }

  return stones[0] ? stones[0] : 0;
};
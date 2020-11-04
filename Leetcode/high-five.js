// https://leetcode.com/problems/high-five/
// Runtime: 84 ms, faster than 79.48% of JavaScript online submissions for High Five.
// Memory Usage: 41.3 MB, less than 11.40% of JavaScript online submissions for High Five.

/*
 * @param {number[][]} items
 * @return {number[][]}
 */

var highFive = function (items) {
  let store = [];
  let result = [];

  for (let i = 0; i < items.length; i++) {
    const id = items[i][0];
    const score = items[i][1];

    if (store[id] === undefined) {
      store[id - 1] = [score];
    } else {
      store[id - 1].push(score);
    }
  }

  store.map(x => {
    x.length > 5 ? x.sort((a, b) => b - a) : x;
  });

  for (let j = 0; j < store.length; j++) {
    const avg = Math.floor((store[j][0] + store[j][1] + store[j][2] + store[j][3] + store[j][4]) / 5);
    result.push([j + 1, avg]);
  }

  return result;
};
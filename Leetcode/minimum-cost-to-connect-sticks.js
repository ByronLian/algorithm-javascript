// https://leetcode.com/problems/minimum-cost-to-connect-sticks/

/*
 * @param {number[]} sticks
 * @return {number}
 */

// Min heap

var connectSticks = function (sticks) {
  if (sticks.length <= 1) return 0;

  sticks.sort((a, b) => a - b);

  const combined = [];
  let result = 0;

  while (sticks.length || combined.length > 1) {
    let currentSum = 0;

    for (let i = 2; i > 0; i--) {
      const condition =
        sticks.length && (!combined.length || sticks[0] < combined[0]);
      currentSum += condition ? sticks.shift() : combined.shift();
    }

    result += currentSum;
    combined.push(currentSum);
  }

  return result;
};

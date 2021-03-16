// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

/*
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */

var countBalls = function (lowLimit, highLimit) {
  let store = new Map();
  let max = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    const numStr = i.toString();
    let boxNum = 0;

    for (let j = 0; j < numStr.length; j++) {
      boxNum += parseInt(numStr[j]);
    }

    if (store[boxNum] === undefined) {
      store[boxNum] = 1;
    } else {
      store[boxNum] += 1;
    }

    if (store[boxNum] > max) max = store[boxNum];
  }

  return max;
};

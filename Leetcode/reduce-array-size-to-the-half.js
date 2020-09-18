// https://leetcode.com/problems/reduce-array-size-to-the-half/
// Runtime: 160 ms, faster than 74.76% of JavaScript online submissions for Reduce Array Size to The Half.
// Memory Usage: 59.4 MB, less than 33.01% of JavaScript online submissions for Reduce Array Size to The Half.

/*
 * @param {number[]} arr
 * @return {number}
 */

var minSetSize = function (arr) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]] === undefined) {
      store[arr[i]] = 1;
    } else {
      store[arr[i]] += 1;
    }
  }

  let result = [];
  for (let data in store) {
    result.push(store[data]);
  }
  result.sort((a, b) => b - a);

  const mid = arr.length / 2;
  let count = 0;
  let temp = 0;
  for (let j = 0; j < result.length; j++) {
    if (temp >= mid) return count;
    temp += result[j];
    count++;
  }

  return count;
};

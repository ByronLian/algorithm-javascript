// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
// Runtime: 108 ms, faster than 67.05% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
// Memory Usage: 41.8 MB, less than 52.27% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.

/*
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let store = [[], []];
  let result = [];

  // Data
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      store[0].push(arr[i]);
    } else if ((Math.log(arr[i]) / Math.log(2)) % 1 === 0) {
      store[1].push(arr[i]);
    } else {
      const bin = (arr[i] >>> 0).toString(2);
      let count = 0;
      for (let j = 0; j < bin.length; j++) {
        if (bin[j] === "1") count++;
      }

      if (!store[count]) store[count] = new Array();
      store[count].push(arr[i]);
    }
  }

  for (let j = 0; j < store.length; j++) {
    if (!store[j]) continue;
    result = result.concat(store[j].sort((a, b) => a - b));
  }

  return result;
};


// Another simple code from claytonjwong
// let sortByBits = A => A.map(x => [x.toString(2).split('').filter(c => c == '1').length, x])
//      .sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]).map(a => a[1]);
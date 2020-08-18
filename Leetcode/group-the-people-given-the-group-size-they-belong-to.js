// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
// Runtime: 96 ms, faster than 89.13% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
// Memory Usage: 41.4 MB, less than 94.66% of JavaScript online submissions for Group the People Given the Group Size They Belong To.

/*
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function (groupSizes) {
  const map = {};
  const result = [];

  // Set into map
  // Input: [3,3,3,3,3,1,3]
  // Output: { '1': [ 5 ], '3': [ 0, 1, 2, 3, 4, 6 ] }
  groupSizes.forEach((val, idx) => {
    if (map[val]) {
      map[val].push(idx);
    } else {
      map[val] = [idx];
    }
  });

  // Re group value
  // Input: { '1': [ 5 ], '3': [ 0, 1, 2, 3, 4, 6 ] }
  // Output: [[5],[0,1,2],[3,4,6]]
  Object.keys(map).forEach((val) => {
    if (map[val].length === Number(val)) {
      result.push(map[val]);
    } else {
      for (let i = 0; i < map[val].length; i += Number(val)) {
        result.push(map[val].slice(i, i + Number(val)));
      }
    }
  });

  return result;
};

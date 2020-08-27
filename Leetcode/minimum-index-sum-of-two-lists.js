// https://leetcode.com/problems/minimum-index-sum-of-two-lists/
// Runtime: 108 ms, faster than 84.29% of JavaScript online submissions for Minimum Index Sum of Two Lists.
// Memory Usage: 49.3 MB, less than 8.05% of JavaScript online submissions for Minimum Index Sum of Two Lists.

/*
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

var findRestaurant = function (list1, list2) {
  let listA = {};

  for (let i = 0; i < list1.length; i++) {
    listA[list1[i]] = i;
  }

  let min = Infinity;
  let commons = {};

  for (let j = 0; j < list2.length; j++) {
    if (listA[list2[j]] !== undefined) {
      listA[list2[j]] += j;
      if (listA[list2[j]] < min) min = listA[list2[j]];
      commons[list2[j]] = listA[list2[j]];
    }
  }

  let result = [];
  for (let common in commons) {
    if (commons[common] === min) result.push(common);
  }

  return result;
};

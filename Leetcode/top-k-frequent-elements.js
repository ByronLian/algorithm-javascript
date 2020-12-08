// https://leetcode.com/problems/top-k-frequent-elements/
// Runtime: 96 ms, faster than 63.25% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 42.4 MB, less than 44.99% of JavaScript online submissions for Top K Frequent Elements.

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let store = {};
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (store[nums[i]] === undefined) {
      store[nums[i]] = 1;
    } else {
      store[nums[i]] += 1;
    }

    if (map[store[nums[i]]] === undefined) {
      map[store[nums[i]]] = [nums[i]];
    } else {
      map[store[nums[i]]].push(nums[i]);
    }
  }

  let tmp = [];
  for (let i in map) {
    tmp = tmp.concat(map[i]);
  }

  let result = [];
  let key = {};
  for (let j = tmp.length - 1; j >= 0; j--) {
    if (result.length === k) break;

    if (key[tmp[j]] === undefined) {
      result.push(tmp[j]);
      key[tmp[j]] = 1;
    }
  }

  return result;
};

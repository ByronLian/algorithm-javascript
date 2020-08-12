// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// Runtime: 88 ms, faster than 77.64% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 38.4 MB, less than 45.51% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function (nums) {
  // Copy array and sorting
  // [8,1,2,2,3] >> [8,3,2,2,1]
  const newArr = nums.slice(0, nums.length).sort((a, b) => b - a);
  let map = {};

  // [8,3,2,2,1]
  // Check how many element less than current element and store into map object
  for (let i = 0; i < newArr.length; i++) {
    if (!map[newArr[i]]) {
      map[newArr[i]] = 0;

      let j = i;
      while (j < newArr.length) {
        if (newArr[j] > newArr[j + 1]) {
          map[newArr[i]] = newArr.length - j - 1;
          break;
        } else {
          j++;
        }
      }
    }
  }

  // Checking result
  const result = [];
  for (let j = 0; j < nums.length; j++) {
    result.push(map[nums[j]]);
  }

  return result;
};
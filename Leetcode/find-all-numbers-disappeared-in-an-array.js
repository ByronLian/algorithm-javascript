// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  let temp = [...Array(nums.length + 1)].map((_, i) => i);
  nums.forEach((x) => (temp[x] = 0));

  return temp.filter((x) => x > 0);
};

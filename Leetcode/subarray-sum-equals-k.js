// https://leetcode.com/problems/subarray-sum-equals-k/solution/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function (nums, k) {
  const len = nums.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    let curr = nums[i];
    if (curr === k) count++;

    for (let j = i + 1; j < len; j++) {
      curr += nums[j];
      if (curr === k) count++;
    }
  }

  return count;
};

//TO DO: Hash map O(n)
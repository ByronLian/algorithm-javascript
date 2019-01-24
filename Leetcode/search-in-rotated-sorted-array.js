// https://leetcode.com/problems/search-in-rotated-sorted-array/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  Solution 1:

  var search = function(nums, target) {
    return nums.indexOf(target);
  }
*/
/*
  Solution 2:
  
  var search = function(nums, target) {
    const len = nums.length;
    for(let i=0; i<len; i++){
      if(nums[i] === target) return i;
    }

    return -1;
  }
*/

// Solution 3:
// I suggest separate search area + binary search

var search = function (nums, target) {
  const len = nums.length;
  const firstEl = nums[0];
  const lastEl = nums[len - 1];

  // nums: []
  if (len === 0) return -1;

  // nums: [1]
  if (len === 1) {
    if (firstEl === target) return 0; // target: 1
    return -1; // target not 1
  }

  // nums: [0, 1, 2, 3, 4], ordered array
  // I use linear search O(N) here but I suggest to use binary search for ordered array O(log n)
  if (lastEl > firstEl) {
    for (let i = 0; i < len; i++) {
      if (nums[i] === target) return i;
    }
    return -1;
  } else {
    let minEl = firstEl;
    let maxEl = firstEl;
    let minElIdx = -1;
    let maxElIdx = -1;

    // Find the break points
    // e.g nums: [5, 6, 7, 0, 3] 
    // 7 and 0 are break points
    for (let i = 0; i < len; i++) {
      if (nums[i] >= maxEl) {
        maxEl = nums[i];
        maxElIdx = i;
      }
      if (nums[i] <= minEl) {
        minEl = nums[i];
        minElIdx = i;
      }
      if (nums[i] < nums[i - 1]) break;
    }

    // nums: [5, 6, 7, 0, 3], target = 8 or -1
    if (target > maxEl || target < minEl) return -1;

    // nums: [5, 6, 7, 0, 3], target = 4
    if (target > lastEl && target < firstEl) return -1;

    // nums: [5, 6, 7, 0, 3], target might be in [5, 6, 7]
    // again, we should use binary search here but I use linear search 
    if (target >= firstEl && target <= maxEl) {
      for (let i = 0; i <= maxElIdx; i++) {
        if (nums[i] === target) return i;
      }
      return -1;
    }

    // nums: [5, 6, 7, 0, 3], target might be in [0, 3]
    // again, we should use binary search here but I use linear search 
    if (target >= minEl && target <= lastEl) {
      for (let i = minElIdx; i < len; i++) {
        if (nums[i] === target) return i;
      }
      return -1;
    }
  }
};
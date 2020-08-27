// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/

/*
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  // Math problem...
  return nums.reduce((a, b) => a + b) - Math.min(...nums) * nums.length;

  // let count = 0;

  // while (true) {
  //   let max = Math.max(...nums);
  //   let maxIdx = nums.indexOf(max);
  //   let min = Math.min(...nums);
  //   let diff = max - min;

  //   count += diff;

  //   let flag = false;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (i === maxIdx) continue;
  //     nums[i] += diff;
  //   }

  //   for (let j = 0; j < nums.length - 1; j++) {
  //     if (nums[j] !== nums[j + 1]) {
  //       flag = true;
  //       break;
  //     }
  //   }

  //   if (flag === false) break;
  // }

  // return count;
};

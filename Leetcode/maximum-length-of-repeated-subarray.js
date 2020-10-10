// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

/*
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var findLength = function (A, B) {
  // A [1,2,3,2,1]
  // B [3,2,1,4,7]

  const len = A.length;
  let max = 0;

  // Has no common
  for (let i = 0; i < len; i++) {
    if (A.indexOf(B[i]) !== -1) {
      max = 1;
      break;
    }
  }
  if (max === 0) return 0;

  // Has common
  // ",1,2,3,2,1,"
  const aStr = "," + A.join(",") + ",";

  for (let i = 0; i < len; i++) {
    if (len - i < max) return max;
    let bStr = "," + B[i] + ",";
    let bLen = 1;

    // ",3,"
    // ",3,2,"
    // ",3,2,1,"
    // ...
    for (let j = i + 1; j < len; j++) {
      bStr = bStr + B[j] + ",";
      bLen++;

      const idx = aStr.indexOf(bStr);
      if (idx === -1) break;
      if (bLen > max) max = bLen;
    }
  }

  return max;
};

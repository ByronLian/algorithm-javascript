// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// Task Score: 100
// Correctness: 100
// Performance: N/A

function solution(N) {
  const binaryStr = (N >>> 0).toString(2); // Turn N to binary number

  // Return when N only has one binary number
  const len = binaryStr.length;
  if (binaryStrLen === 1) return 0;

  let longestCount = 0;  // For storing '0' length of longest number
  let count = 0;

  // e.g 1041 = 10000010001
  // start from left to right and add '0' into temp string until next 1 showup
  // compare longestCount and count
  for (let i = 1; i < len; i++) {
    if (binaryStr[i] === '0') {
      count++;
    } else {
      if (count > longestCount) longestCount = count;
      count = 0
    }
  }

  return longestCount;
}
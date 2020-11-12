// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(A) {
  // Get sum of array
  let totalNum = A.reduce((acc, val) => acc + val);

  // Initial first element
  const firstEl = A[0];
  // Initial minimize range
  let min = Math.abs(firstEl - (totalNum - firstEl));

  // Return if minimize range equals 0
  if (min === 0) return min;

  // e,g
  // A[0] = 3
  // A[1] = 1
  // A[2] = 2
  // A[3] = 4
  // A[4] = 3
  // P = 1, difference = |3 − 10| = 7
  // P = 2, difference = |4 − 9| = 5
  // P = 3, difference = |6 − 7| = 1
  // P = 4, difference = |10 − 3| = 7

  // take P = 1 as example
  // the previousSum will be 3
  // 10 will be totalNum - previousSum
  // num is abs number
  // compare current min and num
  // if num less than current min then update min
  // return min after loop
  const len = A.length - 1;
  for (let i = 1; i < len; i++) {
    previousSum += A[i];

    let num = Math.abs(previousSum - (totalNum - previousSum));
    if (num < min) min = num;
    if (min === 0) return min;
  }

  return min;
}

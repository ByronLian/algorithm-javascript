// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(A) {
  let len = A.length;

  if (len === 1) {
    return A[0];
  }

  // Solution
  // e.g A [3, 2, -6, 4, 0]
  // so the temp array is used to record accumulation result when we iterate the array A
  // and maxSum is used to record highest sum so far

  // loop 1: temp [3], maxSum = 3
  // loop 2: temp [3, 5], maxSum = 5
  // loop 3: temp [3, 5, -1], maxSum = 5
  // loop 4: temp [3, 5, -1, 4] , maxSum = 5
  // loop 5: temp [3, 5, -1, 4, 4], maxSum = 5
  // return maxSum which is 5

  let maxSum = A[0];
  let temp = [];
  temp[0] = A[0]

  for (let i = 1; i < len; i++) {
    // Return A[i] if accumulation of previous sum and A[i] are less than A[i]
    temp[i] = temp[i - 1] + A[i] > A[i] ? temp[i - 1] + A[i] : A[i];

    // Update maxSum if accumulation bigger than maxSum
    maxSum = temp[i] > maxSum ? temp[i] : maxSum;
  }

  return maxSum;
}
// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(A) {

  // Wrong Solution
  // my first solution is only count avg of 2 elements
  // for example [1, 2, 3, 4]
  // I do the for-loop
  // avg [1, 2] = 1.5
  // avg [2, 3] = 2.5
  // avg [3, 4] = 3.5
  // this solution is wrong which I didn't realize the possibility of avg of 3 elements could small than 2

  // Correct Solution
  // should consider below
  // * avg of 2 elements
  // * avg of 3 elements
  // * the last 2 elements if you run the for-loop like below code

  let len = A.length;
  let miniAvg = (A[0] + A[1]) / 2;
  let miniIdx = 0;

  for (let i = 0; i < len - 2; i++) {
    let twoAvg = (A[i] + A[i + 1]) / 2;
    let threeAvg = (A[i] + A[i + 1] + A[i + 2]) / 3;
    let currentMinAvg = Math.min(twoAvg, threeAvg);

    if (currentMinAvg < miniAvg) {
      miniAvg = currentMinAvg;
      miniIdx = i;
    }
  }

  let lastTwoAvg = (A[len - 2] + A[len - 1]) / 2;
  if (lastTwoAvg < miniAvg) {
    miniAvg = lastTwoAvg;
    miniIdx = len - 2;
  }

  return miniIdx;
}
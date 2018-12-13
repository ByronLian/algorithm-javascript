// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N + M)

function solution(N, A) {
  // Initial array which length is N for saving final result
  let resultArr = new Array(N);

  // Solution:
  // what we did is using currentBigVal to save current biggest value in result array
  // we empty result array when A[i] === N1 which is max counter
  // when empty result array we will add currentBigVal to additionVal
  // so we only need to record those steps which after final max counter 
  // and add additionVal to each element

  // e.g N = 5, A = [3, 4, 4, 6, 1, 4, 4]
  // So N1 = 6 and the original steps should look like below
  // (0, 0, 1, 0, 0) A[0] !== N1
  // (0, 0, 1, 1, 0) A[1] !== N1
  // (0, 0, 1, 2, 0) A[2] !== N1
  // (2, 2, 2, 2, 2) A[3] === N1, max counter
  // (3, 2, 2, 2, 2) A[4] !== N1
  // (3, 2, 2, 3, 2) A[5] !== N1
  // (3, 2, 2, 4, 2) A[6] !== N1

  // Our steps will be like this
  // (0, 0, 1, 0, 0) A[0] !== N1, currentBigVal = 1, additionVal = 0
  // (0, 0, 1, 1, 0) A[1] !== N1, currentBigVal = 1, additionVal = 0
  // (0, 0, 1, 2, 0) A[2] !== N1, currentBigVal = 2, additionVal = 0
  // (0, 0, 0, 0, 0) A[3] === N1, max counter so empty array, currentBigVal = 0, additionVal = 2
  // (1, 0, 0, 0, 0) A[4] !== N1
  // (1, 0, 0, 1, 0) A[5] !== N1
  // (1, 0, 0, 2, 0) A[6] !== N1
  // add additionVal which is 2 to each element 
  // (3, 2, 2, 4, 2)

  let len = A.length;
  let N1 = N + 1;
  let currentBigVal = 0;
  let additionVal = 0;

  for (let i = 0; i < len; i++) {
    if (A[i] === N1) {
      resultArr.length = 0;
      additionVal += currentBigVal;
      currentBigVal = 0;
    } else {
      if (resultArr[A[i] - 1] === undefined) resultArr[A[i] - 1] = 0;

      resultArr[A[i] - 1]++;

      if (currentBigVal < resultArr[A[i] - 1]) currentBigVal = resultArr[A[i] - 1];
    }
  }

  for (let i = 0; i < N; i++) {
    resultArr[i] = resultArr[i] === undefined ? additionVal : resultArr[i] + additionVal;
  }

  return resultArr;
}
// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N) or O(N * log(N))

function solution(A) {

  let len = A.length;
  let firstEl = A[0];

  // [-1] or [2] or [1]
  if (len === 1) {
    if (firstEl <= 0 || firstEl > 1) {
      return 1;
    }
    if (firstEl === 1) {
      return 2;
    }
  }

  // Because the question is finding missing smallest positive integer 
  // so we only need to focus positive number
  let newArr = A.filter((target) => target > 0).sort((a, b) => a - b);
  let newLen = newArr.length;

  // This array only contain negative integer so length is 0 after filtered
  if (newLen === 0) return 1;

  // From array A [-1, -3, 2, -2, 3, 5] to array newArr [2, 3, 5]
  // From array A [-1, -3, 2, -2] to array newArr [2]
  if (newArr[0] > 1) return 1;

  // From array A [-1, -3, 1, -2] to array newArr [1]
  if (newLen === 1 && newArr[0] === 1) return 2;

  // From array A [2, 1, 3, 4, 6] to array newArr [1, 2, 3, 4, 6]
  for (let i = 1; i < newLen; i++) {
    let temp = newArr[i] - newArr[i - 1];
    if (temp > 1) {
      return newArr[i - 1] + 1;
    }
  }

  // case [1, 2, 3, 4]
  return newArr[newLen - 1] + 1;
}
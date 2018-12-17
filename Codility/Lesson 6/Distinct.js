// https://app.codility.com/programmers/lessons/6-sorting/distinct/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N*log(N)) or O(N)

function solution(A) {
  let len = A.length;
  let obj = {};
  let count = 0;

  // Solution: 
  // if value didn't find in object then add count and add it into object as "1"
  // if value already in object then pass
  // return final count as result
  for (let i = 0; i < len; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
      count++;
    }
  }

  return count;
}
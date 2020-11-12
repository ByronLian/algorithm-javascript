// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N) or O(N * log(N))

function solution(A) {
  const len = A.length;
  // Case []
  if (len === 0) return 1;

  A.sort((a, b) => a - b);

  // Case [2, 4, 5, 6]
  for (let i = 0; i < len - 1; i++) {
    if (A[i + 1] - A[i] > 1) return A[i + 1] - 1;
  }

  // Case [1, 2, 3, 4] or [2, 3, 4, 5]
  return A[0] === 2 ? 1 : A[len - 1] + 1;
}

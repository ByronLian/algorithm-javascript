// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N) or O(N*log(N))

function solution(A) {
  let len = A.length;

  // Return if array A has only one element
  if (len === 1) {
    return A[0];
  }

  // e.g
  // A[0] = 9  A[1] = 3  A[2] = 9 A[3] = 3  A[4] = 9  A[5] = 7  A[6] = 9
  // use object to store element
  // if i element already exist in object then delete object
  // return object key when for-loop is finished (should have one key only)

  let store = {};

  for (let i = 0; i < len; i++) {
    let el = A[i];
    if (el in store) {
      delete store[el];
    }
    else {
      store[el] = 1;
    }
  }

  return +Object.keys(store);
}
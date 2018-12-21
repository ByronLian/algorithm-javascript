// https://app.codility.com/programmers/lessons/8-leader/dominator/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N*log(N)) or O(N)

function solution(A) {
  let len = A.length;
  let storage = {};
  let maxEl = 0, maxCount = 0;

  if (len === 0) {
    return -1;
  }

  if (len === 1) {
    return 0;
  }

  // Solution
  // we used an object(storage) to save every total count of each different number
  // maxEl is used to save element which has highest number so far
  // e.g array A [3, 4, 3, -1, 3] 
  // loop 1: storage { '3' : [0] }, maxEl = 3
  // loop 2: storage { '3' : [0], '4' : [1] }, maxEl = 3
  // loop 3: storage { '3' : [0, 2], '4' : [1] }, maxEl = 3
  // loop 4: storage { '3' : [0, 2], '4' : [1], '-1' : [3] }, maxEl = 3
  // loop 5: storage { '3' : [0, 2, 4], '4' : [1], '-1' : [3] }, maxEl = 3
  // check if max element's count over half of array then return max element array index
  // if not then return -1
  // in this case we should return [0, 2, 4]

  for (let i = 0; i < len; i++) {
    let el = A[i];

    if (storage[el] === undefined) {
      storage[el] = [];
      storage[el].push(i);
    } else {
      storage[el].push(i);
    }

    if (storage[el].length > maxCount) {
      maxEl = el;
      maxCount = storage[el].length;
    }
  }

  // If every element has equal count , e.g [1, 2, 3] or [-1, -2, 1]
  if (maxCount === 1) {
    return -1;
  }

  // Check if max element's count over half array or not
  if (storage[maxEl].length / len <= 0.5) {
    return -1;
  }

  return storage[maxEl][0];
}
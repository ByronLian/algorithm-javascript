// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(X, A) {
  let len = A.length;
  let firstEl = A[0];

  // If only has one step
  if (len === 1) {
    if (firstEl === 1) {
      return 0;  // A[0] = 1
    } else {
      return -1; // A[0] = 2, A[0] = 4 ...
    }
  }

  // Total path which frog has to jump in X steps
  // e.g 1+2+3+4+5......
  // you can do for-loop or better way like Gaussian
  let pathSum = ((1 + X) * X) / 2;

  // For saving those step which already showed up
  let footprint = {};

  // e,g
  // X = 4
  // A[0] = 3
  // A[1] = 1
  // A[2] = 2
  // A[3] = 4
  // 
  // pathSum will be 1 + 2 + 3 + 4 (10)
  // leaf 0 fall which is 3 
  // not showed before so save into footprint
  // subtract leaf 0 value
  // if already can go then return current step
  // for - loop to end
  // if pathSum !== 0 means frog can't pass in the end

  for (let i = 0; i < len; i++) {

    if (footprint[A[i]]) continue; // Pass below program for performance when we reach same step record

    footprint[A[i]] = true;
    pathSum -= A[i];

    if (pathSum === 0) {
      return i;
    }
  }

  if (pathSum !== 0) {
    return -1;
  }
}
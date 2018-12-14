// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(A) {
  let len = A.length;
  let count = 0;
  let zeroCount = 0;
  let i = 0;

  // Our solution will be like below
  //
  // look at this array 
  // A[0] = 0
  // A[1] = 1
  // A[2] = 0
  // A[3] = 1
  // A[4] = 1
  // start from the left of array we can get (0, 1), (0, 3), (0, 4), (2, 3), (2, 4) which is 5 groups
  // so we can use 2 loops to solve it which the performance will be O(N**2)
  // or we can use other way like below
  // let's take a look of array again [0, 1, 0, 1, 1]
  // just pick up any but not in first position 1 from the array and check
  // each 0 before this 1 can make a pair with it
  // what we need to do is set up a variable for recording how many 0 so far
  // if we meet 1 then add current 0 count into final count
  // if we meet 0 then add it into current 0 count

  if (A[0] === 1) i = 1; // If first element is 1 then we start from sec element

  for (; i < len; i++) {
    if (A[i] === 0) zeroCount++;
    if (A[i] === 1) count += zeroCount;

    if (count > 1000000000) {
      return -1;
    }
  }

  return count;
}
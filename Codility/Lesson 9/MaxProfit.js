// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(A) {
  let len = A.length;
  let maxProfit = 0;
  let lowestPrice = A[0];

  // Solution
  // so the idea is you want to get the biggest profit you need to buy it at the lowest price
  // lowestPrice = the lowest price so far
  // currentProfit = current price - lowestPrice
  // all we have to do is make sure lowestPrice is the smallest price
  
  // e.g [2, 4, 5, 3, 10]
  // loop 1: lowestPrice = 2, currentProfit = 2, maxProfit = 2
  // loop 2: lowestPrice = 2, currentProfit = 3, maxProfit = 3
  // loop 3: lowestPrice = 2, currentProfit = 1, maxProfit = 3
  // loop 4: lowestPrice = 2, currentProfit = 8, maxProfit = 8
  // return maxProfit = 8

  for (let i = 1; i < len; i++) {
    if (lowestPrice > A[i]) {
      lowestPrice = A[i];
    } else {
      let currentProfit = A[i] - lowestPrice;
      if (currentProfit > maxProfit) maxProfit = currentProfit;
    }
  }

  return maxProfit;
}
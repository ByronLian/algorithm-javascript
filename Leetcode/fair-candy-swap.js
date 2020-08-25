//

/*
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

var fairCandySwap = function (A, B) {
  let aCandies = A.reduce((acc, val) => acc + val);
  let bCandies = B.reduce((acc, val) => acc + val);
  let diff = Math.abs((aCandies + bCandies) / 2 - aCandies);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (Math.abs(A[i] - B[j]) === diff) {
        if (aCandies - A[i] + B[j] === bCandies - B[j] + A[i]) {
          return [A[i], B[j]];
        }
      }
    }
  }

  return [];
};

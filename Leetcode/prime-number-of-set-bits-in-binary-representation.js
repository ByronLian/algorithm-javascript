// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
// Runtime: 392 ms, faster than 54.90% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
// Memory Usage: 43.2 MB, less than 5.88% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.

/*
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let store = {};

  for (let i = L; i <= R; i++) {
    const bin = i.toString(2);
    let count = 0;
    for (let j = 0; j < bin.length; j++) {
      if (bin[j] === "1") count++;
    }

    store[count] ? store[count] += 1 : store[count] = 1;
    count = 0;
  }

  let prime = {};
  let total = 0;

  for (let i in store) {
    let key = parseInt(i);
    if (key === 1) continue;
    if (prime[key]) {
      total += store[i];
      continue;
    }

    let flag = true;
    for (let k = 3; k < key; k += 2) {
      if (key % 2 === 0 || key % k === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      prime[key] = 1;
      total += store[i];
    }
  }

  return total;
};

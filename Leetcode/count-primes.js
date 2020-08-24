// https://leetcode.com/problems/count-primes/
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

/*
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
    
  let count = 0;
  let signs = new Uint8Array(n);

  for (let i = 2; i < n; i++) {
      if (!signs[i - 1]) {
          count++;

          for (let j = i * i; j < n; j += i) {
              signs[j - 1] = true;
          }
      }
  }
  
  return count;
};
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

/*
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  time.sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      let temp = time[i] + time[j];
      if (temp < 60) break;
      if (temp % 60 === 0) count++;
    }
  }

  return count;
};

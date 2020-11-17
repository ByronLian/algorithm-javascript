// https://leetcode.com/problems/slowest-key/
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Slowest Key.
// Memory Usage: 39.7 MB, less than 100.00% of JavaScript online submissions for Slowest Key.

/*
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */

var slowestKey = function (releaseTimes, keysPressed) {
  let prevTime = 0;
  let maxTime = 0;
  let maxChar = "a";

  for (let i = 0; i < keysPressed.length; i++) {
    const timePeriod = releaseTimes[i] - prevTime;

    if (timePeriod > maxTime) {
      maxTime = timePeriod;
      maxChar = keysPressed[i];
    }

    if (timePeriod === maxTime && keysPressed[i].charCodeAt() > maxChar.charCodeAt()) {
        maxChar = keysPressed[i];
    }
    prevTime = releaseTimes[i];
  }

  return maxChar;
};

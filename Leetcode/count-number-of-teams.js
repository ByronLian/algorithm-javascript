// https://leetcode.com/problems/count-number-of-teams/
// Runtime: 80 ms, faster than 88.14% of JavaScript online submissions for Count Number of Teams.
// Memory Usage: 37 MB, less than 24.57% of JavaScript online submissions for Count Number of Teams.

/*
 * @param {number[]} rating
 * @return {number}
 */

var numTeams = function (rating) {
  let count = 0;

  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if ((rating[i] > rating[j] && rating[j] > rating[k]) || (rating[i] < rating[j] && rating[j] < rating[k])) {
          count++;
        }
      }
    }
  }

  return count;
};

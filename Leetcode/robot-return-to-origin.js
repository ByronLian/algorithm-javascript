// https://leetcode.com/problems/robot-return-to-origin/
// Runtime: 84 ms, faster than 66.04% of JavaScript online submissions for Robot Return to Origin.
// Memory Usage: 37.3 MB, less than 82.17% of JavaScript online submissions for Robot Return to Origin.

/*
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function (moves) {
  const map = {
    U: 0,
    D: 0,
    L: 0,
    R: 0
  }

  for (let i = 0; i < moves.length; i++) {
    map[moves[i]]++;
  }

  return map['U'] !== map['D'] || map['L'] !== map['R'] ? false : true;
};


// Another good solution from other author
// let movesSum = 0;
// for (let i = 0; i < moves.length; i++) {
//   switch (moves[i]) {
//     case 'U':
//       movesSum += 2;
//       break;
//     case 'D':
//       movesSum -= 2;
//       break;
//     case 'L':
//       movesSum -= 1;
//       break;
//     case 'R':
//       movesSum += 1;
//       break;
//   }
// }

// return (movesSum === 0);


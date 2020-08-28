// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/
// Solution from: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/discuss/500061/simple-javascript-iterative-solution-56ms

/*
 * @param {number[][]} moves
 * @return {string}
 */

var tictactoe = function (moves) {
  let result = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) {
      result[moves[i][0]][moves[i][1]] = "A";
    } else result[moves[i][0]][moves[i][1]] = "B";
  }

  if (
    (result[0][0] === result[1][1] &&
      result[1][1] === result[2][2] &&
      result[1][1] !== " ") ||
    (result[2][0] === result[1][1] &&
      result[1][1] === result[0][2] &&
      result[1][1] !== " ")
  )
    return result[1][1];

  if (
    result[0][0] === result[0][1] &&
    result[0][1] === result[0][2] &&
    result[0][0] !== " "
  )
    return result[0][0];
  if (
    result[1][0] === result[1][1] &&
    result[1][1] === result[1][2] &&
    result[1][0] !== " "
  )
    return result[1][0];
  if (
    result[2][0] === result[2][1] &&
    result[2][1] === result[2][2] &&
    result[2][0] !== " "
  )
    return result[2][0];

  if (
    result[0][0] === result[1][0] &&
    result[1][0] === result[2][0] &&
    result[0][0] !== " "
  )
    return result[0][0];
  if (
    result[0][1] === result[1][1] &&
    result[1][1] === result[2][1] &&
    result[0][1] !== " "
  )
    return result[0][1];
  if (
    result[0][2] === result[1][2] &&
    result[1][2] === result[2][2] &&
    result[0][2] !== " "
  )
    return result[0][2];

  return result.find((item) => item.includes(" ")) ? "Pending" : "Draw";
};

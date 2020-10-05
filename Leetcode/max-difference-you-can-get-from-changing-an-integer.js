// https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Max Difference You Can Get From Changing an Integer.
// Memory Usage: 39 MB, less than 17.65% of JavaScript online submissions for Max Difference You Can Get From Changing an Integer.

/*
 * @param {number} num
 * @return {number}
 */

var maxDiff = function (num) {
  return findBiggest(num) - findSmallest(num);
};

const findBiggest = (num) => {
  let numStr = num.toString();
  let target = "";

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "9") {
      continue;
    } else {
      if (target === "") target = numStr[i];
    }

    if (target === numStr[i]) numStr = numStr.replace(numStr[i], "9");
  }

  return parseInt(numStr);
};

const findSmallest = (num) => {
  let numStr = num.toString();
  let target = "";
  let startFromFirstDigit = false;

  for (let j = 0; j < numStr.length; j++) {
    if (numStr[j] === "1" || numStr[j] === "0") {
      continue;
    } else {
      if (target === "") {
        target = numStr[j];
        if (j === 0) startFromFirstDigit = true;
      }
    }

    if (target === numStr[j]) {
      numStr = startFromFirstDigit
        ? numStr.replace(numStr[j], "1")
        : numStr.replace(numStr[j], "0");
    }
  }

  return parseInt(numStr);
};

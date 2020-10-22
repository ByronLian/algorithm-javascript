// https://leetcode.com/problems/maximum-swap/
// Runtime: 64 ms, faster than 99.28% of JavaScript online submissions for Maximum Swap.
// Memory Usage: 38.7 MB, less than 27.34% of JavaScript online submissions for Maximum Swap.

/*
 * @param {number} num
 * @return {number}
 */

var maximumSwap = function (num) {
  const numStr = num.toString();
  let max = num;

  // Find all elements and store them
  let { store, flag } = findAllElements(numStr);

  // Case when no number need to swap, ex 9772
  if (flag) return max;

  // Find both first target and second target's index & value
  let { firstTargetIdx, firstTargetVal, secondTargetVal } = findFirstSwapElement(numStr, store);
  let secondTargetIdx = findSecondSwapElement(numStr, secondTargetVal);

  // Swap
  let resultStr = "";
  for (let k = 0; k < numStr.length; k++) {
    if (k === firstTargetIdx) {
      resultStr += secondTargetVal;
    } else if (k === secondTargetIdx) {
      resultStr += firstTargetVal;
    } else {
      resultStr += numStr[k];
    }
  }

  return parseInt(resultStr);
};

const findAllElements = numStr => {
  let store = {};
  let flag = true;

  for (let i = 0; i < numStr.length; i++) {
    if (store[numStr[i]] === undefined) {
      store[numStr[i]] = 1;
    } else {
      store[numStr[i]] += 1;
    }

    // Case when no number need to swap, ex 9772
    if (numStr[i] < numStr[i + 1]) flag = false;
  }

  return { store, flag };
}

const findFirstSwapElement = (numStr, store) => {
  let i = 0;
  let firstTargetIdx = -1;
  let firstTargetVal = 0;
  let secondTargetVal = 0;

  while (i < numStr.length) {
    const tmp = Object.keys(store);
    const key = tmp[tmp.length - 1];

    if (key > numStr[i]) {
      firstTargetIdx = i;
      firstTargetVal = numStr[i];
      secondTargetVal = key;
      break;
    }

    store[key] -= 1;
    if (store[key] === 0) delete store[key];
    i++;
  }

  return { firstTargetIdx, firstTargetVal, secondTargetVal };
}

const findSecondSwapElement = (numStr, secondTargetVal) => {
  for (let j = numStr.length - 1; j > 0; j--) {
    if (numStr[j] === secondTargetVal) {
      return j;
    }
  }
}
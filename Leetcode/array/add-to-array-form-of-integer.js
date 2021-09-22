// https://leetcode.com/problems/add-to-array-form-of-integer/
// Runtime: 132 ms, faster than 53.77% of JavaScript online submissions for Add to Array-Form of Integer.
// Memory Usage: 46.2 MB, less than 5.53% of JavaScript online submissions for Add to Array-Form of Integer.

/*
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */

var addToArrayForm = function (A, K) {
  // One line but performance is not good
  // return (BigInt(A.join('')) + BigInt(K)).toString().split('');

  const arrK = K.toString().split("");
  let result = [];
  const shortArr = arrK.length > A.length ? A : arrK;
  const longArr = arrK.length > A.length ? arrK : A;

  let j = shortArr.length - 1;
  let carry = 0;
  for (let i = longArr.length - 1; i >= 0; i--) {
    if (shortArr[j] === undefined) {
      if (carry === 0) break; // For performance
      shortArr[j] = 0;
    }

    let tmp = parseInt(longArr[i]) + parseInt(shortArr[j]) + carry;
    if (tmp > 9) {
      carry = 1;
      tmp = tmp - 10;
    } else {
      carry = 0;
    }

    result.unshift(tmp);
    j--;
  }

  if (carry !== 0) result.unshift(carry);

  if (result.length < longArr.length)
    result = longArr.slice(0, longArr.length - result.length).concat(result);

  return result;
};

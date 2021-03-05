// https://leetcode.com/problems/design-an-ordered-stream/
// Runtime: 188 ms, faster than 74.09% of JavaScript online submissions for Design an Ordered Stream.
// Memory Usage: 50.3 MB, less than 86.23% of JavaScript online submissions for Design an Ordered Stream.

/*
 * @param {number} n
 */

var OrderedStream = function (n) {
  this._stream = new Array(n);
  this._currentKey = 0;
};

/*
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */

OrderedStream.prototype.insert = function (idKey, value) {
  this._stream[idKey - 1] = value;

  let result = [];
  let i = this._currentKey;

  while (true) {
    if (this._stream[i] === undefined) break;
    result.push(this._stream[i]);
    this._currentKey++;
    i++;
  }

  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

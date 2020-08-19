// https://leetcode.com/problems/design-a-stack-with-increment-operation/
// Runtime: 128 ms, faster than 81.73% of JavaScript online submissions for Design a Stack With Increment Operation.
// Memory Usage: 43.5 MB, less than 51.27% of JavaScript online submissions for Design a Stack With Increment Operation.

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

class CustomStack {
  constructor(maxSize) {
    this._maxSize = maxSize;
    this._array = [];
  }
  push(x) {
    if (this._array.length < this._maxSize) this._array.push(x);
  }
  pop() {
    if (this._array.length == 0) return -1;
    return this._array.pop();
  }
  increment(k, val) {
    for (let i = 0; i < k && i < this._array.length; i++) {
      this._array[i] += val;
    }
  }
}


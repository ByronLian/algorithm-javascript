// https://leetcode.com/problems/design-hashset/
// Runtime: 304 ms, faster than 26.07% of JavaScript online submissions for Design HashSet.
// Memory Usage: 44.3 MB, less than 89.72% of JavaScript online submissions for Design HashSet.

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this._set = [];
};

/*
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function (key) {
  if (this._set.indexOf(key) === -1) this._set.push(key);
};

/*
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this._set.length; i++) {
    if (this._set[i] === key) {
      this._set.splice(i, 1);
      break;
    }
  }
};

/*
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function (key) {
  return this._set.indexOf(key) !== -1 ? true : false;
};

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/
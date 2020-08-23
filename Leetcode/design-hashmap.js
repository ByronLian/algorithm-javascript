// https://leetcode.com/problems/design-hashmap/
// Runtime: 204 ms, faster than 74.44% of JavaScript online submissions for Design HashMap.
// Memory Usage: 47.1 MB, less than 27.81% of JavaScript online submissions for Design HashMap.

/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this._hash = {};
};

/*
* value will always be non-negative. 
* @param {number} key 
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function (key, value) {
  this._hash[key] = value;
};

/*
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function (key) {
  return this._hash[key] !== undefined ? this._hash[key] : -1;
};

/*
* Removes the mapping of the specified value key if this map contains a mapping for the key 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function (key) {
  delete this._hash[key];
};

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/
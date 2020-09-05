// https://leetcode.com/problems/defanging-an-ip-address/
// Runtime: 64 ms, faster than 96.52% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 36.9 MB, less than 5.15% of JavaScript online submissions for Defanging an IP Address.

/*
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function (address) {
  return address.split('.').join('[.]');
};
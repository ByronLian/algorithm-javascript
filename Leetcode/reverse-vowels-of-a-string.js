// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Runtime: 76 ms, faster than 73.83% of JavaScript online submissions for Reverse Vowels of a String.
// Memory Usage: 43.6 MB, less than 35.71% of JavaScript online submissions for Reverse Vowels of a String.

/*
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {
  let vowels = [];
  let vowelIdx = [];

  // Find the vowel and record the position
  for (let i = 0; i < s.length; i++) {
    if ((/^[aeiou]$/i).test(s[i])) {
      vowels.push(s[i]);
      vowelIdx.push(i);
    }
  }

  const newAry = s.split('');

  // Replace the vowel with position from back to front 
  let j = vowelIdx.length - 1;
  for (let i = 0; i < vowelIdx.length; i++) {
    newAry[vowelIdx[i]] = vowels[j];
    j--;
  }

  return newAry.join('');
};
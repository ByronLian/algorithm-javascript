// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// Task Score: 100
// Correctness: 100
// Performance: N/A

function solution(N) {
  let biNum = (N).toString(2); // Turn N to binary number

  // Return when N only has one binary number
  let biNumLen = biNum.length;
  if (biNumLen === 1) {
    return 0;
  }

  let longestStr = "1";         // For storing longest number
  let longestStrZeroCount = 0;  // For storing '0' length of longest number
  let tempZero = 0;
  let tempStr = "1";
  
  // e.g 1041 = 10000010001
  // start from left to right and add '0' into temp string until next 1 showup
  // compare temp string and longest string so far
  // swap if the temp string is longer then current longest string
  // return longest string
  
  for (let i = 1; i < biNumLen; i++) {
    if (biNum[i] === '0') {
      tempStr += biNum[i];
      tempZero ++;
      continue;
    }

    if (biNum[i] === '1') {
      if (tempStr > longestStr) {
        longestStr = tempStr;
        longestStrZeroCount = tempZero;
      }
      tempStr = "1";
      tempZero = 0;
    }
  }

  return longestStrZeroCount;
}
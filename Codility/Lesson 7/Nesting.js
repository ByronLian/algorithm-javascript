// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(S) {
  let len = S.length;

  if (S === '') return 1; // e.g ''
  if (len < 2) return 0;  // Only one bracket

  // Solution:
  // We need a stack to store if we found open brackets
  // and use current bracket to compare with top element in Stack
  // if they can match which means they can close each other then we pop the top element
  // if not then we push current element
  // we can check the stack length when the loop end
  // if stack has element return 0 else return 1
  //
  // e.g '()'
  // stack [(]
  // current element is ) which can match top element in stack 
  // pop (
  // stack []
  // loop end check stack length is 0, so return 1
  // 
  // e.g ')('
  // stack [)]
  // current element is ( which can't match top element in stack 
  // push (
  // stack [), (]
  // loop end check stack length is 2, so return 0

  let stack = [];
  stack[0] = S[0];

  let clsBracketsMap = { ")": "(" };

  for (let i = 1; i < len; i++) {
    let lastElInStack = stack[stack.length - 1];
    let clsMatch = clsBracketsMap[S[i]];

    if (lastElInStack === clsMatch && clsMatch !== undefined) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.length > 0 ? 0 : 1;
}
// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N)

function solution(A) {
    // Solution
    // so we find the leader of array A first 
    // leader = findLeader(A);
    // leader[0] = Leader element of array 
    // leader[1] = Leader element total number
    // then we iterate the array and use currentLeaderCount to record 
    // how many Leader element we found so far
    // remainLeaderCount means how many Leader element remain in the rest array 
    // then we calculate both side to see if there have same Leader or not

    // e.g A [4, 3, 4, 4, 4, 2]
    // leader[0] = 4
    // leader[1] = 4
    // start iterating array
    //
    // loop 1: 
    // A[i] = 4, currentLeaderCount = 1, remainLeaderCount = 2
    // separate array A to [4] and [3, 4, 4, 4, 2]
    // counting 1st sub array [4] has 100% "4" element 
    // counting 2nd sub array [3, 4, 4, 4, 2] has 60% "4" element 
    // both sub array have over half "4" element so result add 1
    // 
    // loop 2: ...
    // after loop we return the result

    let len = A.length;
    let currentLeaderCount = 0;
    let result = 0;
    let leader = findLeader(A);

    for (let i = 0; i < len; i++) {
        if (A[i] === leader[0]) {
            currentLeaderCount++;
        }
        let remainLeaderCount = leader[1] - currentLeaderCount;
        if (currentLeaderCount / (i + 1) > 0.5 && remainLeaderCount / (len - (i + 1)) > 0.5) {
            result++;
        }

    }
    return result;
}

// Find the highest elements and number from array
function findLeader(array) {
    let len = array.length;
    let map = {};
    let maxEl = array[0], maxCount = 1;

    for (let i = 0; i < len; i++) {
        let el = array[i];
        if (map[el] === undefined) {
            map[el] = 1;
        }
        else {
            map[el]++;
        }

        if (map[el] > maxCount) {
            maxEl = el;
            maxCount = map[el];
        }
    }

    return [maxEl, maxCount];
}
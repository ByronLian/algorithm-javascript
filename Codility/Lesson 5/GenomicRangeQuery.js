// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
// Task Score: 100
// Correctness: 100
// Performance: 100, O(N + M)

function solution(S, P, Q) {
    let resultArr = [];
    let len = P.length;

    for (let i = 0; i < len; i++) {
        // Find the substring
        let seq = S.substring(P[i], Q[i] + 1);

        // Solution:
        // We get the substring for each round
        // and find the specific char from that substring by sequence A, C, G, T
        
        // For now (2018/12/16), indexOf is still the best efficient way to find char from a string
        if (seq.indexOf('A') !== -1) {
            resultArr.push(1);
        }
        else if (seq.indexOf('C') !== -1) {
            resultArr.push(2);
        }
        else if (seq.indexOf('G') !== -1) {
            resultArr.push(3);
        }
        else {
            resultArr.push(4);
        }
    }
    return resultArr;
}
function findPairOfSumWithTwoPointers (arr, sum) { // O(NlogN) sorting and then iterating half
    let uniquePairs = [];
    let start = 0;
    let end = arr.length-1;

    arr.sort((a,b) => a-b) // sort in ascending order

    while (start < end) { // run till start is less then end
        if (arr[start] + arr[end] === sum) { // 2 elements sum is same is required sum then move both pointer to find next pair
            uniquePairs.push([arr[start], arr[end]])
            start++;
            end--;
        } else if (arr[start] + arr[end] < sum) { // sum is less then target sum then increment start pointer
            start++;
        } else { // else decrement end
            end--;
        }
    }

    return uniquePairs
}

function findPairOfSumWithHashMap (arr, sum) { // O(n) space and O(n) time
    let visited = new Set(); // to store element which are visited
    let uniquePairs = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = sum - arr[i];
        if (!visited.has(temp)) {
            visited.add(arr[i])
        } else {
            uniquePairs.push([temp, arr[i]])
        }
    }
    return uniquePairs
}

const inputArr = [-8, 1, 4, 6, 10, 45];
const sum = 16;

console.log(findPairOfSumWithTwoPointers(inputArr, sum))
console.log(findPairOfSumWithHashMap(inputArr, sum))
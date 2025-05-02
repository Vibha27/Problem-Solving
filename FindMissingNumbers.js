function findMissingNumbers (nums) {
    let n = nums.length + 1; // 1 number is missing
    let expectedSum = (n*(n-1))/2; // formula for find sum of n natural numbers from 0 and incase of starting from 1 use n*n+1/2
    let actualSum = nums.reduce((sum,num) => sum+num);
    console.log(expectedSum, actualSum)
    return expectedSum - actualSum 
}

console.log(findMissingNumbers([0,1,3,2,5,4,6,7,9]))
console.log(findMissingNumbers([0,1,3]))
console.log(findMissingNumbers([0,1]))
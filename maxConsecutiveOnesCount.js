function maxConsecutiveOnesCount(data) {
    let maxCount = 0;
    let count = 0;

    for (let i of data) {
        if (i === 1) {
            count++;
            maxCount = Math.max(maxCount, count)
        } else {
            count = 0;
        }
    }

    return maxCount
}

const arr = [1,1,3,4,0,1,1,1,0,1,1,1,1]
console.log(maxConsecutiveOnesCount(arr))
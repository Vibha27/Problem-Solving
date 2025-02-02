function closestNumber (arr, target) {
    
    let closeNum = Infinity;
    let index;

    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== target) {
            let diff = Math.abs(arr[i] - target);
            if (diff < closeNum) {
                closeNum = diff
                index = i
            }
        }
    }

    return arr[index]
}

const arr = [1,4,-2,-3,2]
const arr1 = [2, -3, 6, 5, 1]
console.log(closestNumber(arr1, 4))